package org.nanahiru.nafileviewer.core.resourcehandles;
import lombok.extern.slf4j.Slf4j;
import org.bytedeco.ffmpeg.global.avcodec;
import org.bytedeco.ffmpeg.global.avutil;
import org.bytedeco.javacv.FFmpegFrameGrabber;
import org.bytedeco.javacv.FFmpegFrameRecorder;
import org.bytedeco.javacv.FFmpegLogCallback;
import org.bytedeco.javacv.Frame;
import org.bytedeco.javacv.Java2DFrameConverter;
import org.nanahiru.nafileviewer.config.ProjectConfig;
import org.nanahiru.nafileviewer.core.VideoHandler;
import org.nanahiru.nafileviewer.model.FileInfo;
import org.nanahiru.nafileviewer.model.FileType;
import org.nanahiru.nafileviewer.model.VideoFileInfo;
import org.nanahiru.nafileviewer.util.PropertyMapper;
import org.nanahiru.nafileviewer.util.StringLock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.awt.image.BufferedImage;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Service
@Slf4j
public class JavaCVLocalVideoHandler implements VideoHandler {

    @Autowired
    private ProjectConfig projectConfig;

    static {
        // 初始化FFmpeg日志回调
        FFmpegLogCallback.set();
        // 设置FFmpeg日志级别为错误级别（减少控制台输出）
        avutil.av_log_set_level(avutil.AV_LOG_ERROR);
    }

    // 不同画质对应的目标视频码率（单位：比特/秒）
    private static final Map<Quality, Long> TARGET_VIDEO_BITRATES = new HashMap<>() {{
        put(Quality.P360, 800_000L);   // 360P: 800 kbps
        put(Quality.P480, 1_200_000L);  // 480P: 1.2 Mbps
        put(Quality.P720, 2_500_000L);  // 720P: 2.5 Mbps
        put(Quality.P1080, 5_000_000L); // 1080P: 5 Mbps
        put(Quality.P2160, 15_000_000L); // 4K: 15 Mbps
    }};

    // 目标音频码率（128 kbps）
    private static final int TARGET_AUDIO_BITRATE = 128_000;
    @Autowired
    private LocalFileHandler fileHandler;

    /**
     * 将视频转换为HLS格式
     * @param inputPath 输入文件路径
     * @param outputPath 输出目录路径
     * @param codec 视频编码格式
     * @param quality 视频质量
     */
    @Override
    public void convertToHLS(String inputPath, String outputPath, Codec codec, Quality quality) {
        FFmpegFrameGrabber grabber = null;  // 视频抓取器
        FFmpegFrameRecorder recorder = null; // 视频录制器

        String hlsSegmentFilename = outputPath + "/segment_%03d.ts";  // 分片文件名模式
        String hlsPlaylistFilename = outputPath + "/index.m3u8";   // 主播放列表文件
        if (Files.exists(Paths.get(hlsPlaylistFilename))) {
            return;
        }
        log.info("HLS: {} {} {}", inputPath, codec, quality);
        try {
            grabber = new FFmpegFrameGrabber(inputPath);
            grabber.start();
            // 获取原始视频信息
            int originalWidth = grabber.getImageWidth();
            int originalHeight = grabber.getImageHeight();
            int originalVideoBitrate = grabber.getVideoBitrate();
            double frameRate = grabber.getFrameRate();
            int audioChannels = grabber.getAudioChannels();
            int audioSampleRate = grabber.getSampleRate();

            // 计算目标分辨率（原始质量保持原分辨率）
            int[] targetResolution = calculateTargetResolution(originalWidth, originalHeight, quality);
            int targetWidth = targetResolution[0];
            int targetHeight = targetResolution[1];

            // 计算目标码率（关键修改点）
            long targetVideoBitrate;
            if (quality == Quality.Original) {
                // 获取该分辨率的正常码率范围
                long recommendedBitrate = getDefaultBitrateForResolution(originalWidth, originalHeight);
                // 如果原始码率有效且高于推荐值，则使用推荐值，否则使用原始码率
                targetVideoBitrate = (originalVideoBitrate > 0 && originalVideoBitrate > recommendedBitrate)
                        ? recommendedBitrate
                        : (originalVideoBitrate > 0 ? originalVideoBitrate : recommendedBitrate);
            } else {
                // 非原始质量使用预设码率
                targetVideoBitrate = TARGET_VIDEO_BITRATES.getOrDefault(quality, 2_500_000L);
            }

            // HLS相关设置
            // 创建输出目录（如果不存在）
            Files.createDirectories(Paths.get(outputPath));

            // 初始化视频录制器
            recorder = new FFmpegFrameRecorder(hlsPlaylistFilename, targetWidth, targetHeight);
            recorder.setFormat("hls");                       // 设置输出格式为HLS
            recorder.setOption("hls_time", "10");            // 每个分片10秒
            recorder.setOption("hls_list_size", "0");        // 播放列表不限长度
            recorder.setOption("hls_segment_filename", hlsSegmentFilename); // 设置分片文件名
            recorder.setVideoCodec(getFFmpegCodec(codec));   // 设置视频编码器
            recorder.setVideoBitrate((int) targetVideoBitrate); // 设置视频码率
            recorder.setFrameRate(frameRate);                 // 设置帧率
            recorder.setPixelFormat(avutil.AV_PIX_FMT_YUV420P); // 设置像素格式
            recorder.setAudioCodec(avcodec.AV_CODEC_ID_AAC); // 设置音频编码为AAC
            recorder.setAudioBitrate(TARGET_AUDIO_BITRATE);  // 设置音频码率
            recorder.setAudioChannels(audioChannels);        // 设置音频通道数
            recorder.setSampleRate(audioSampleRate);         // 设置音频采样率

            log.info("开始解码: {}", inputPath);
            recorder.start();  // 开始录制

            // 逐帧处理视频
            Frame frame;
            while ((frame = grabber.grabFrame()) != null) {
                if (frame.image != null) {  // 视频帧
                    recorder.record(frame);
                }
                if (frame.samples != null) { // 音频帧
                    recorder.record(frame);
                }
            }

        } catch (Exception e) {
            log.error("JAVACV解码失败", e);
        } finally {
            // 确保资源被释放
            try {
                if (recorder != null) {
                    recorder.close();
                }
                if (grabber != null) {
                    grabber.close();
                }
            } catch (Exception e) {
                // 忽略关闭时的异常
            }
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


    /**
     * 将视频转换为MP4格式
     * @param inputPath 输入文件路径
     * @param outputPath 输出文件路径
     * @param codec 视频编码格式
     * @param quality 视频质量
     */
    @Override
    public void convertToMP4(String inputPath, String outputPath, Codec codec, Quality quality) {
        FFmpegFrameGrabber grabber = null;
        FFmpegFrameRecorder recorder = null;

        try {
            grabber = new FFmpegFrameGrabber(inputPath);
            grabber.start();

            // 获取原始视频信息
            int originalWidth = grabber.getImageWidth();
            int originalHeight = grabber.getImageHeight();
            int originalVideoBitrate = grabber.getVideoBitrate();
            double frameRate = grabber.getFrameRate();
            int audioChannels = grabber.getAudioChannels();
            int audioSampleRate = grabber.getSampleRate();

            // 计算目标分辨率
            int[] targetResolution = calculateTargetResolution(originalWidth, originalHeight, quality);
            int targetWidth = targetResolution[0];
            int targetHeight = targetResolution[1];

            // 计算目标码率
            long targetVideoBitrate;
            if (quality == Quality.Original) {
                long recommendedBitrate = getDefaultBitrateForResolution(originalWidth, originalHeight);
                targetVideoBitrate = (originalVideoBitrate > 0 && originalVideoBitrate > recommendedBitrate)
                        ? recommendedBitrate
                        : (originalVideoBitrate > 0 ? originalVideoBitrate : recommendedBitrate);
            } else {
                targetVideoBitrate = TARGET_VIDEO_BITRATES.getOrDefault(quality, 2_500_000L);
            }

            // 初始化MP4录制器
            recorder = new FFmpegFrameRecorder(outputPath, targetWidth, targetHeight);
            recorder.setFormat("mp4");                      // 设置输出格式为MP4
            recorder.setVideoCodec(getFFmpegCodec(codec));   // 设置视频编码器
            recorder.setVideoBitrate((int) targetVideoBitrate); // 设置视频码率
            recorder.setFrameRate(frameRate);                 // 设置帧率
            recorder.setPixelFormat(avutil.AV_PIX_FMT_YUV420P); // 设置像素格式
            recorder.setAudioCodec(avcodec.AV_CODEC_ID_AAC); // 设置音频编码为AAC
            recorder.setAudioBitrate(TARGET_AUDIO_BITRATE);  // 设置音频码率
            recorder.setAudioChannels(audioChannels);        // 设置音频通道数
            recorder.setSampleRate(audioSampleRate);         // 设置音频采样率
            recorder.setVideoOption("preset", "slow");       // 使用慢速预设（更好的压缩）
            recorder.setVideoOption("crf", "23");            // 质量因子（18-28，越小质量越好）

            recorder.start();

            // 逐帧处理视频
            Frame frame;
            while ((frame = grabber.grabFrame()) != null) {
                if (frame.image != null) {
                    recorder.record(frame);
                }
                if (frame.samples != null) {
                    recorder.record(frame);
                }
            }

        } catch (Exception e) {
            throw new RuntimeException("转换视频到MP4格式失败", e);
        } finally {
            try {
                if (recorder != null) {
                    recorder.close();
                }
                if (grabber != null) {
                    grabber.close();
                }
            } catch (Exception e) {
                // 忽略关闭时的异常
            }
        }
    }

    /**
     * 获取视频文件信息
     * @param path 文件路径
     * @return 视频文件信息对象
     */
    @Override
    public VideoFileInfo getVideoFileInfo(String path) {
        FFmpegFrameGrabber grabber = null;
        try {
            grabber = new FFmpegFrameGrabber(path);
            grabber.start();



            // 设置基本文件信息
            FileInfo fileInfo = fileHandler.getFileInfo(path);
            VideoFileInfo info = new VideoFileInfo();
            PropertyMapper.mapProperties(fileInfo, info);

            // 设置视频特定信息
            info.setDuration(Duration.ofMillis((grabber.getLengthInTime() / 1000))); // 视频时长
            info.setFormatDuration(formatDuration((double) grabber.getLengthInTime() / 1_000_000)); // 格式化后的时长
            info.setCodec(avcodec.avcodec_get_name(grabber.getVideoCodec()).toString()); // 视频编码格式

            return info;
        } catch (Exception e) {
            throw new RuntimeException("获取视频文件信息失败", e);
        } finally {
            try {
                if (grabber != null) {
                    grabber.close();
                }
            } catch (Exception e) {
                // 忽略关闭时的异常
            }
        }
    }

    /**
     * 获取视频时长
     * @param path 文件路径
     * @return 视频时长
     */
    @Override
    public Duration getVideoDuration(String path) {
        FFmpegFrameGrabber grabber = null;
        try {
            grabber = new FFmpegFrameGrabber(path);
            grabber.start();
            // 将微秒转换为毫秒后创建Duration对象
            return Duration.ofMillis((long) (grabber.getLengthInTime() / 1000));
        } catch (Exception e) {
            log.error("javacv 获取时长失败", e);
            return Duration.ZERO;
        } finally {
            try {
                if (grabber != null) {
                    grabber.close();
                }
            } catch (Exception e) {
                // 忽略关闭时的异常
            }
        }
    }

    /**
     * 获取视频预览图
     * @param path 视频文件路径
     * @param location 预览时间位置
     * @return 预览图文件路径
     */
    @Override
    public String getVideoPreview(String path, String outPath, Duration location) {
        FFmpegFrameGrabber grabber = null;
        try {
            File outFile = new File(outPath + "/cover.jpg");
            if (outFile.exists() && outFile.isFile()) {
                return outPath + "/cover.jpg";
            }
            grabber = new FFmpegFrameGrabber(path);
            grabber.start();

            // 定位到指定时间点（转换为微秒）
            long timestamp = location.toMillis() * 1000;
            grabber.setVideoTimestamp(timestamp);

            // 抓取视频帧
            Frame frame = grabber.grabImage();
            if (frame == null) {
                log.error("无法在指定位置获取视频帧: location: {}", location.toMillis());
            }

            // 将帧转换为BufferedImage
            Java2DFrameConverter converter = new Java2DFrameConverter();
            BufferedImage image = converter.getBufferedImage(frame);

//            // 保存为临时JPEG文件
//            File tempFile = File.createTempFile("preview_", ".jpg");

            Path dir = Paths.get(outPath);
            if (!Files.exists(dir)) {
                Files.createDirectories(dir);
            }
            javax.imageio.ImageIO.write(image, "jpg", outFile);

            return outFile.getAbsolutePath();
        } catch (Exception e) {
            log.error("生成视频预览失败", e);
            return "";
        } finally {
            try {
                if (grabber != null) {
                    grabber.close();
                }
            } catch (Exception e) {
                // 忽略关闭时的异常
            }
        }
    }

    @Override
    public String getVideoPreview(String path, Duration location) {
        String outPath = projectConfig.getCachePath() + path;
        boolean locked = false;
        try {
            locked = StringLock.tryLock(outPath, 5, TimeUnit.SECONDS);
            path = projectConfig.getRootPath() + path;
            return getVideoPreview(path, outPath, location);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        } finally {
            if (locked) StringLock.unlock(outPath);
        }

    }

    @Override
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

    // ============== 辅助方法 ==============

    /**
     * 计算目标分辨率
     * @param originalWidth 原始宽度
     * @param originalHeight 原始高度
     * @param quality 目标质量
     * @return [目标宽度, 目标高度]
     */
    private int[] calculateTargetResolution(int originalWidth, int originalHeight, Quality quality) {
        // 如果是原始质量，直接返回原始分辨率
        if (quality == Quality.Original) {
            return new int[]{originalWidth, originalHeight};
        }

        // 根据质量等级确定目标高度
        int targetHeight;
        switch (quality) {
            case P2160:
                targetHeight = 2160; // 4K
                break;
            case P1080:
                targetHeight = 1080; // 全高清
                break;
            case P720:
                targetHeight = 720;  // 高清
                break;
            case P480:
                targetHeight = 480;  // 标清
                break;
            case P360:
                targetHeight = 360; // 低清
                break;
            default:
                targetHeight = originalHeight; // 默认使用原始高度
        }

        // 根据原始宽高比计算目标宽度
        double aspectRatio = (double) originalWidth / originalHeight;
        int targetWidth = (int) Math.round(targetHeight * aspectRatio);

        // 确保宽度是偶数（编码器要求）
        targetWidth = targetWidth % 2 == 0 ? targetWidth : targetWidth - 1;

        return new int[]{targetWidth, targetHeight};
    }

    /**
     * 获取FFmpeg对应的编码器ID
     * @param codec 编码格式枚举
     * @return FFmpeg编码器ID
     */
    private int getFFmpegCodec(Codec codec) {
        switch (codec) {
            case H264:
                return avcodec.AV_CODEC_ID_H264;  // H.264编码
            case H265:
                return avcodec.AV_CODEC_ID_H265;  // H.265/HEVC编码
            case AV1:
                return avcodec.AV_CODEC_ID_AV1;   // AV1编码
            case VP9:
                return avcodec.AV_CODEC_ID_VP9;   // VP9编码
            default:
                return avcodec.AV_CODEC_ID_H264;  // 默认使用H.264
        }
    }

    /**
     * 根据分辨率获取默认码率
     * @param width 视频宽度
     * @param height 视频高度
     * @return 推荐码率（比特/秒）
     */
    private long getDefaultBitrateForResolution(int width, int height) {
        // 根据分辨率返回推荐的最大正常码率
        if (height >= 2160) return 20_000_000L; // 4K: 20 Mbps (原15→20)
        if (height >= 1080) return 8_000_000L;  // 1080P: 8 Mbps (原5→8)
        if (height >= 720) return 4_000_000L;   // 720P: 4 Mbps (原2.5→4)
        if (height >= 480) return 2_000_000L;   // 480P: 2 Mbps (原1.2→2)
        return 1_000_000L;                      // 更低分辨率: 1 Mbps (原0.8→1)
    }

    /**
     * 格式化时长（秒→HH:MM:SS）
     * @param seconds 秒数
     * @return 格式化后的时间字符串
     */
    private String formatDuration(double seconds) {
        long totalSeconds = (long) seconds;
        long hours = totalSeconds / 3600;
        long minutes = (totalSeconds % 3600) / 60;
        long secs = totalSeconds % 60;
        return String.format("%02d:%02d:%02d", hours, minutes, secs);
    }
}