package org.nanahiru.nafileviewer.core.resourcehandles;

import lombok.extern.slf4j.Slf4j;
import org.bytedeco.javacpp.BytePointer;
import org.bytedeco.javacpp.IntPointer;
import org.bytedeco.opencv.global.opencv_core;
import org.bytedeco.opencv.global.opencv_imgcodecs;
import org.bytedeco.opencv.global.opencv_imgproc;
import org.bytedeco.opencv.opencv_core.Mat;
import org.bytedeco.opencv.opencv_core.Size;
import org.nanahiru.nafileviewer.config.ProjectConfig;
import org.nanahiru.nafileviewer.core.ImageHandler;
import org.nanahiru.nafileviewer.util.StringLock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.concurrent.TimeUnit;

@Service
@Slf4j
public class LocalImageHandler implements ImageHandler {
    private static final String FILE_SEPARATOR = File.separator;
    private static final int PREVIEW_WIDTH = 100;
    private static final String PREVIEW_FORMAT = ".jpg";
    private static final int JPEG_QUALITY = 85;

    @Autowired
    private ProjectConfig projectConfig;

    static {
        org.bytedeco.javacpp.Loader.load(opencv_core.class);
        org.bytedeco.javacpp.Loader.load(opencv_imgcodecs.class);
        org.bytedeco.javacpp.Loader.load(opencv_imgproc.class);
    }

    @Override
    public String getThumbnail(String path) {
        if (path == null || path.trim().isEmpty()) {
            throw new IllegalArgumentException("路径不能为空");
        }

        try {
            boolean acquired = StringLock.tryLock(path, 10, TimeUnit.SECONDS);
            if (!acquired) {
                throw new RuntimeException("锁获取失败");
            }
            // 构造输入输出路径
            String imagePath = new File(projectConfig.getRootPath(), path).getAbsolutePath();
            String outPath = new File(projectConfig.getCachePath(), path).getAbsolutePath();

            File outFile = new File(outPath);
            // 如果缩略图已存在，直接返回路径
            if (outFile.exists()) {
                return outPath;
            }

            // 确保输出目录存在
            File parentDir = outFile.getParentFile();
            if (!parentDir.exists() && !parentDir.mkdirs()) {
                log.warn("目录创建失败: {}", parentDir.getAbsolutePath());
//                    throw new RuntimeException("无法创建输出目录: " + parentDir.getAbsolutePath());
            }

            // 读取原始图像文件字节
            byte[] imageBytes;
            try {
                imageBytes = Files.readAllBytes(Paths.get(imagePath));
            } catch (IOException e) {
                throw new RuntimeException("无法读取图像文件: " + imagePath, e);
            }

            // 从内存字节解码图像
            try (Mat image = opencv_imgcodecs.imdecode(new Mat(imageBytes), opencv_imgcodecs.IMREAD_UNCHANGED)) {
                if (image == null || image.empty()) {
                    throw new RuntimeException("无法解码图像: " + imagePath);
                }

                // 处理图像并返回结果路径
                log.info(imagePath + "  --preview-->  " + outPath);
                return processImage(image, outPath);
            }
        } catch (Exception e) {
            log.error("缩略图生成失败: {}", path, e);
            throw new RuntimeException(e);
        } finally {
            StringLock.unlock(path);
        }
    }

    private String processImage(Mat image, String outPath) {
        // 计算缩放比例，保持宽高比
        int originalWidth = image.cols();
        int originalHeight = image.rows();
        int targetWidth = PREVIEW_WIDTH;
        int targetHeight = (int) Math.round((double) originalHeight * targetWidth / originalWidth);

        // 创建缩放后的图像
        try (Mat resizedImage = new Mat()) {
            opencv_imgproc.resize(
                    image,
                    resizedImage,
                    new Size(targetWidth, targetHeight),
                    0, 0,
                    opencv_imgproc.INTER_AREA
            );

            File outFile = new File(outPath);
            if (!outFile.exists()) {
                // 准备编码参数
                IntPointer params = new IntPointer(2);
                params.put(0, opencv_imgcodecs.IMWRITE_JPEG_QUALITY);
                params.put(1, JPEG_QUALITY);

                // 准备输出缓冲区
                BytePointer buf = new BytePointer();

                // 编码图像到内存
                if (!opencv_imgcodecs.imencode(".jpg", resizedImage, buf, params)) {
                    throw new RuntimeException("无法编码缩略图");
                }

                // 获取编码后的字节数组
                byte[] imageBuffer = new byte[(int) buf.limit()];
                buf.get(imageBuffer);

                // 将字节数组写入文件
                try {
                    Files.write(outFile.toPath(), imageBuffer);
                } catch (IOException e) {
                    // 尝试使用临时文件作为中间步骤
                    try {
                        File tempFile = File.createTempFile("preview", PREVIEW_FORMAT);
                        Files.write(tempFile.toPath(), imageBuffer);
                        Files.move(tempFile.toPath(), outFile.toPath(),
                                StandardCopyOption.REPLACE_EXISTING);
                    } catch (IOException ex) {
                        throw new RuntimeException("无法保存缩略图: " + outPath, ex);
                    }
                } finally {
                    // 释放BytePointer资源
                    buf.close();
                    params.close();
                }
            }
        }
        return outPath;
    }
}