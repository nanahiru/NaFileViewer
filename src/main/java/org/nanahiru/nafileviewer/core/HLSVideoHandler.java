package org.nanahiru.nafileviewer.core;

import java.io.InputStream;

public interface HLSVideoHandler {

    // 立即返回视频的m3u8文件路径，并生成一个转换任务，将视频转换成 hls h264格式，分辨率保持不变，如果码率异常（例如高于当前视频清晰度/质量的正常码率）则降低
    // 以每个segment为单位转换，转换时当前转换的segment需加锁，转换前需判断是否存在，存在则直接跳过
    String getPlaylist(String videoPath);

    // 对指定segment加锁并转换，转换前需判断是否存在，存在则直接返回
    InputStream getSegment(String videoPath, String segmentName);

    // 对指定segment加锁并转换，转换前需判断是否存在，存在则直接返回segment的路径
    String getSegmentPath(String videoPath, String segmentName);

    // 保存位置留空，我自己会去实现。只要保证m3u8和ts在一个文件夹即可


}
