package org.nanahiru.nafileviewer.model;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public enum FileType {
    // 枚举值
    IMAGE(new HashSet<>(Arrays.asList("jpg", "jpeg", "png", "gif", "bmp", "webp", "tiff", "svg", "ico", "psd", "raw"))),
    VIDEO(new HashSet<>(Arrays.asList(
            // 常见视频格式
            "mp4", "avi", "mov", "wmv", "flv", "mkv", "webm", "mpeg", "mpg",
            // 专业视频格式
            "m4v", "3gp", "3g2", "f4v", "m2ts", "mts", "ts", "vob",
            // 苹果相关格式
            "qt", "mxf",
            // 索尼相关格式
            "m2t", "m2v",
            // 其他格式
            "divx", "xvid", "asf", "rm", "rmvb", "ogv", "swf", "drc",
            // 摄像机格式
            "mod", "tod", "mxf",
            // 高清视频格式
            "h264", "h265", "hevc", "vp8", "vp9",
            // 编辑格式
            "prores", "dnxhd", "cineform"
    ))),
    TEXT(new HashSet<>(Arrays.asList("txt", "csv", "json", "xml", "html", "htm", "css", "js", "md", "log", "ini", "cfg", "conf", "properties"))),
    WORLD(new HashSet<>(Arrays.asList("doc", "docx", "odt", "rtf", "pages", "wpd", "wps"))),
    EXCEL(new HashSet<>(Arrays.asList("xls", "xlsx", "ods", "csv", "numbers", "tsv"))),
    BINARY(new HashSet<>()); // 二进制文件没有特定扩展名

    private final Set<String> extensions;

    // 构造函数
    FileType(Set<String> extensions) {
        this.extensions = extensions;
    }

    // 获取文件扩展名
    private static String getFileExtension(String fileName) {
        if (fileName == null || fileName.lastIndexOf('.') == -1) {
            return "";
        }
        return fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
    }

    // 根据文件名获取文件类型
    public static FileType getFileType(String fileName) {
        String extension = getFileExtension(fileName);

        for (FileType type : values()) {
            if (type.extensions.contains(extension)) {
                return type;
            }
        }

        return BINARY; // 默认返回二进制类型
    }

    // 判断是否是图片文件
    public static boolean isImage(String fileName) {
        return IMAGE.equals(getFileType(fileName));
    }

    // 判断是否是视频文件
    public static boolean isVideo(String fileName) {
        return VIDEO.equals(getFileType(fileName));
    }

    // 判断是否是文本文件
    public static boolean isText(String fileName) {
        return TEXT.equals(getFileType(fileName));
    }

    // 判断是否是Word文档
    public static boolean isWorld(String fileName) {
        return WORLD.equals(getFileType(fileName));
    }

    // 判断是否是Excel文件
    public static boolean isExcel(String fileName) {
        return EXCEL.equals(getFileType(fileName));
    }

    // 判断是否是二进制文件
    public static boolean isBinary(String fileName) {
        return BINARY.equals(getFileType(fileName));
    }

    // 获取该类型的所有扩展名
    public Set<String> getExtensions() {
        return new HashSet<>(extensions); // 返回副本以保证不可变性
    }

    // 添加新的扩展名
    public void addExtension(String extension) {
        if (extension != null && !extension.isEmpty()) {
            extensions.add(extension.toLowerCase());
        }
    }
}