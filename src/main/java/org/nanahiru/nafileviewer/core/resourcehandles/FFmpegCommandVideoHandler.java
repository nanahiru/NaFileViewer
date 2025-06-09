package org.nanahiru.nafileviewer.core.resourcehandles;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;

import org.nanahiru.nafileviewer.config.ProjectConfig;
import org.nanahiru.nafileviewer.core.FileHandler;
import org.nanahiru.nafileviewer.core.VideoHandler;
import org.nanahiru.nafileviewer.model.FileInfo;
import org.nanahiru.nafileviewer.model.FileType;
import org.nanahiru.nafileviewer.model.VideoFileInfo;
import org.nanahiru.nafileviewer.util.PropertyMapper;
import org.nanahiru.nafileviewer.util.StringLock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Service
@Slf4j
public class FFmpegCommandVideoHandler implements VideoHandler {

    @Autowired
    private ProjectConfig projectConfig;

    @Autowired
    private FileHandler fileHandler;

    // 画质对应的目标视频码率
    private static final Map<Quality, Long> TARGET_VIDEO_BITRATES = new HashMap<>() {{
        put(Quality.P360, 800_000L);
        put(Quality.P480, 1_200_000L);
        put(Quality.P720, 2_500_000L);
        put(Quality.P1080, 5_000_000L);
        put(Quality.P2160, 15_000_000L);
    }};

    // 目标音频码率
    private static final int TARGET_AUDIO_BITRATE = 128_000;

    @Override
    public void convertToHLS(String inputPath, String outputPath, Codec codec, Quality quality) {
        try {
            String hlsSegmentFilename = outputPath + "/segment_%03d.ts";
            String hlsPlaylistFilename = outputPath + "/index.m3u8";
            if (Files.exists(Paths.get(hlsPlaylistFilename))) {
                return;
            }
            log.info("HLS(ffmpeg): {} {} {}", inputPath, codec, quality);

            // 创建输出目录（如果不存在）
            Files.createDirectories(Paths.get(outputPath));

            String videoCodec = getFFmpegCodecName(codec);
            long targetVideoBitrate = TARGET_VIDEO_BITRATES.getOrDefault(quality, 2_500_000L);
            String scaleParam = getScaleParam(quality);

            // 构造 ffmpeg 命令
            ProcessBuilder pb = new ProcessBuilder();
            pb.command(buildFfmpegCommand(
                    inputPath,
                    hlsPlaylistFilename,
                    hlsSegmentFilename,
                    videoCodec,
                    (int) targetVideoBitrate,
                    TARGET_AUDIO_BITRATE,
                    scaleParam
            ));
            pb.redirectErrorStream(true);
            pb.inheritIO();
            log.info("开始解码: {}", inputPath);
            Process process = pb.start();
            int exitCode = process.waitFor();
            if (exitCode != 0) {
                log.error("ffmpeg转码HLS失败, exit code: {}", exitCode);
            }
        } catch (Exception e) {
            log.error("ffmpeg转码HLS失败", e);
        }
    }

    @Override
    public void convertToHLS(String inputPath, Codec codec, Quality quality) {
        String outputPath = projectConfig.getCachePath() + inputPath;
        inputPath = projectConfig.getRootPath() + inputPath;
        boolean locked = false;
        try {
            locked = StringLock.tryLock("CONVERT_TO_HLS:" + outputPath);
            if (locked) {
                convertToHLS(inputPath, outputPath, codec, quality);
            }
        } finally {
            if (locked) {
                StringLock.unlock("CONVERT_TO_HLS:" + outputPath);
            }
        }
    }

    @Override
    @Async("videoConvertExecutor")
    public void asyncConvertToHLS(String inputPath, String outputPath, Codec codec, Quality quality) {
        convertToHLS(inputPath, outputPath, codec, quality);
    }

    @Override
    @Async("videoConvertExecutor")
    public void asyncConvertToHLS(String inputPath, Codec codec, Quality quality) {
        convertToHLS(inputPath, codec, quality);
    }

    @Override
    public void convertToMP4(String inputPath, String outputPath, Codec codec, Quality quality) {
        try {
            Files.createDirectories(Paths.get(outputPath).getParent());
            String videoCodec = getFFmpegCodecName(codec);
            long targetVideoBitrate = TARGET_VIDEO_BITRATES.getOrDefault(quality, 2_500_000L);
            String scaleParam = getScaleParam(quality);

            ProcessBuilder pb = new ProcessBuilder();
            pb.command(buildFfmpegMp4Command(
                    inputPath,
                    outputPath,
                    videoCodec,
                    (int) targetVideoBitrate,
                    TARGET_AUDIO_BITRATE,
                    scaleParam
            ));
            pb.redirectErrorStream(true);
            pb.inheritIO();
            Process process = pb.start();
            int exitCode = process.waitFor();
            if (exitCode != 0) {
                throw new RuntimeException("ffmpeg转码MP4失败, exit code: " + exitCode);
            }
        } catch (Exception e) {
            throw new RuntimeException("ffmpeg转码MP4失败", e);
        }
    }

    @Override
    @Cacheable(value = "GET-VIDEO-FILE-INFO", key = "#path")
    public VideoFileInfo getVideoFileInfo(String path) {

        try {
            ProcessBuilder pb = new ProcessBuilder(
                    "ffprobe",
                    "-v", "error",
                    "-select_streams", "v:0",
                    "-show_entries", "stream=codec_name",
                    "-show_entries", "format=duration",
                    "-of", "json",
                    path
            );
            pb.redirectErrorStream(true);
            Process process = pb.start();
            String json = new String(process.getInputStream().readAllBytes());
            int exitCode = process.waitFor();
            if (exitCode != 0) {
                log.error("ffprobe 获取视频信息失败，exit code: {}", exitCode);
                return new VideoFileInfo();
            }

            JSONObject jsonObject = JSON.parseObject(json);
            String codec = null;
            double seconds = 0;

            // 获取 codec
            JSONArray streams = jsonObject.getJSONArray("streams");
            if (streams != null && !streams.isEmpty()) {
                JSONObject stream = streams.getJSONObject(0);
                codec = stream.getString("codec_name");
            }
            // 获取 duration
            JSONObject format = jsonObject.getJSONObject("format");
            if (format != null) {
                String durationStr = format.getString("duration");
                if (durationStr != null) {
                    seconds = Double.parseDouble(durationStr);
                }
            }



            String formatDuration = formatDuration(seconds);
            FileInfo fileInfo = fileHandler.getFileInfo(path);
            VideoFileInfo info = new VideoFileInfo();
            PropertyMapper.mapProperties(fileInfo, info);

            info.setCodec(codec);
            info.setDuration(Duration.ofSeconds((long) seconds));
            info.setFormatDuration(formatDuration);
            return info;
        } catch (Exception e) {
            log.error("获取视频文件信息失败", e);
            return new VideoFileInfo();
        }
    }

    @Override
    @Cacheable(value = "GET-VIDEO-DURATION" , key = "#path")
    public Duration getVideoDuration(String path) {


        try {
            ProcessBuilder pb = new ProcessBuilder(
                    "ffprobe",
                    "-v", "error",
                    "-show_entries", "format=duration",
                    "-of", "default=noprint_wrappers=1:nokey=1",
                    path
            );
            pb.redirectErrorStream(true);
            Process process = pb.start();
            String output = new String(process.getInputStream().readAllBytes()).trim();
            int exitCode = process.waitFor();
            if (exitCode != 0) {
                log.error("ffprobe 获取时长失败，exit code: {}", exitCode);
                return Duration.ZERO;
            }
            double seconds = Double.parseDouble(output);
            return Duration.ofSeconds((long) seconds);
        } catch (Exception e) {
            log.error("获取视频时长失败", e);
            return Duration.ZERO;
        }
    }

    private String formatDuration(double seconds) {
        long totalSeconds = (long) seconds;
        long hours = totalSeconds / 3600;
        long minutes = (totalSeconds % 3600) / 60;
        long secs = totalSeconds % 60;
        return String.format("%02d:%02d:%02d", hours, minutes, secs);
    }

    @Override
    public String getVideoPreview(String path, String outPath, Duration location) {
        try {
            Files.createDirectories(Paths.get(outPath));
            String outputFile = outPath + "/cover.jpg";
            if (Files.exists(Paths.get(outputFile))) {
                return outputFile;
            }
            double seconds = location.toMillis() / 1000.0;
            ProcessBuilder pb = new ProcessBuilder(
                    "ffmpeg", "-ss", String.valueOf(seconds), "-i", path, "-frames:v", "1", outputFile, "-y"
            );
            pb.redirectErrorStream(true);
            pb.inheritIO();
            Process p = pb.start();
            int exitCode = p.waitFor();
            if (exitCode != 0) {
                log.error("ffmpeg获取封面失败, exit code: {}", exitCode);
                return "";
            }
            return outputFile;
        } catch (Exception e) {
            log.error("获取视频预览失败", e);
            return "";
        }
    }

    @Override
    public String getVideoPreview(String path, Duration location) {
        String outPath = projectConfig.getCachePath() + path;
        boolean locked = false;
        try {
            locked = StringLock.tryLock("GET_VIDEO_PREVIEW:" + outPath, 5, TimeUnit.SECONDS);
            path = projectConfig.getRootPath() + path;
            return getVideoPreview(path, outPath, location);
        } catch (InterruptedException e) {
            log.warn("中断线程");
            return "";
        } finally {
            if (locked) {
                StringLock.unlock("GET_VIDEO_PREVIEW:" + outPath);
            }
        }
    }

    @Override
    @Cacheable(value = "GET-VIDEO-FILE-INFOS" ,key = "#path")
    public List<VideoFileInfo> getVideoFileInfos(String path) {

        List<VideoFileInfo> videos = new ArrayList<>();

        for (FileInfo fileInfo : fileHandler.getFiles(path)) {
            if (FileType.isVideo(fileInfo.getFileName())) {
                VideoFileInfo videoFileInfo = getVideoFileInfo(projectConfig.getRootPath() + fileInfo.getFilePath());
                try {
                    PropertyMapper.mapProperties(videoFileInfo, fileInfo);
                    videos.add(videoFileInfo);
                } catch (IllegalAccessException e) {
                    log.error("错误: {}", fileInfo.getFileName(), e);
//                    throw new RuntimeException(e);
                }

            }
        }
        return videos;
    }

/*     ============ 辅助方法 ============          */

    private String[] buildFfmpegCommand(
            String inputPath,
            String hlsPlaylistFilename,
            String hlsSegmentFilename,
            String videoCodec,
            int videoBitrate,
            int audioBitrate,
            String scaleParam
    ) {
        // 动态拼接参数
        if (scaleParam != null) {
            return new String[]{
                    "ffmpeg", "-y",
                    "-i", inputPath,
                    "-c:v", videoCodec,
                    "-b:v", String.valueOf(videoBitrate),
                    "-vf", "scale=" + scaleParam,
                    "-c:a", "aac",
                    "-b:a", String.valueOf(audioBitrate),
                    "-preset", "veryfast",
                    "-f", "hls",
                    "-hls_time", "10",
                    "-hls_list_size", "0",
                    "-hls_segment_filename", hlsSegmentFilename,
                    hlsPlaylistFilename
            };
        } else {
            return new String[]{
                    "ffmpeg", "-y",
                    "-i", inputPath,
                    "-c:v", videoCodec,
                    "-b:v", String.valueOf(videoBitrate),
                    "-c:a", "aac",
                    "-b:a", String.valueOf(audioBitrate),
                    "-preset", "veryfast",
                    "-f", "hls",
                    "-hls_time", "10",
                    "-hls_list_size", "0",
                    "-hls_segment_filename", hlsSegmentFilename,
                    hlsPlaylistFilename
            };
        }
    }

    private String[] buildFfmpegMp4Command(
            String inputPath,
            String outputPath,
            String videoCodec,
            int videoBitrate,
            int audioBitrate,
            String scaleParam
    ) {
        if (scaleParam != null) {
            return new String[]{
                    "ffmpeg", "-y",
                    "-i", inputPath,
                    "-c:v", videoCodec,
                    "-b:v", String.valueOf(videoBitrate),
                    "-vf", "scale=" + scaleParam,
                    "-c:a", "aac",
                    "-b:a", String.valueOf(audioBitrate),
                    "-movflags", "+faststart",
                    outputPath
            };
        } else {
            return new String[]{
                    "ffmpeg", "-y",
                    "-i", inputPath,
                    "-c:v", videoCodec,
                    "-b:v", String.valueOf(videoBitrate),
                    "-c:a", "aac",
                    "-b:a", String.valueOf(audioBitrate),
                    "-movflags", "+faststart",
                    outputPath
            };
        }
    }

    private String getFFmpegCodecName(Codec codec) {
        switch (codec) {
            case H264:
                return "libx264";
            case H265:
                return "libx265";
            case AV1:
                return "libaom-av1";
            case VP9:
                return "libvpx-vp9";
            default:
                return "libx264";
        }
    }

    private String getScaleParam(Quality quality) {
        switch (quality) {
            case P2160: return "3840:2160";
            case P1080: return "1920:1080";
            case P720:  return "1280:720";
            case P480:  return "854:480";
            case P360:  return "640:360";
            default:    return null; // 原始分辨率
        }
    }
}