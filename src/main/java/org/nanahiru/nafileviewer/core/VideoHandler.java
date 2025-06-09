package org.nanahiru.nafileviewer.core;

import org.nanahiru.nafileviewer.model.VideoFileInfo;

import java.time.Duration;
import java.util.List;

public interface VideoHandler {

    enum Codec {
        H264,H265,AV1,VP9
    }

    enum Quality {
        Original,P2160,P1080,P720,P480,P360
    }

    void convertToHLS(String inputPath, String outputPath, Codec codec, Quality quality);

    void convertToHLS(String inputPath, Codec codec, Quality quality);

    void asyncConvertToHLS(String inputPath, String outputPath, Codec codec, Quality quality);

    void asyncConvertToHLS(String inputPath, Codec codec, Quality quality);

    void convertToMP4(String inputPath, String outputPath, Codec codec, Quality quality);

    VideoFileInfo getVideoFileInfo(String path);

    Duration getVideoDuration(String path);

    String getVideoPreview(String path, String outPath, Duration location);
    String getVideoPreview(String path, Duration location);

    List<VideoFileInfo> getVideoFileInfos(String path);
}
