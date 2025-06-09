package org.nanahiru.nafileviewer.core.resourcehandles;

import lombok.extern.slf4j.Slf4j;

import org.nanahiru.nafileviewer.config.ProjectConfig;
import org.nanahiru.nafileviewer.core.FileHandler;
import org.nanahiru.nafileviewer.model.FileInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

import static java.nio.file.Files.walk;

@Service
@Slf4j
public class LocalFileHandler implements FileHandler {

//    private static final String ROOT_PATH = "d:/";
    private final Path ROOT;
    private ProjectConfig projectConfig;

    @Autowired
    public LocalFileHandler(ProjectConfig projectConfig) {

        this.projectConfig = projectConfig;
        this.ROOT = Paths.get(this.projectConfig.getRootPath()).toAbsolutePath().normalize();
    }

    // 将相对路径转换为绝对路径
    private Path resolvePath(String relativePath) {
        if (relativePath == null || relativePath.isEmpty() || "/".equals(relativePath)) {
            return ROOT;
        }
        // 确保路径以/开头
        String normalizedPath = relativePath.startsWith("/") ? relativePath : "/" + relativePath;
        return ROOT.resolve(normalizedPath.substring(1)).normalize();
    }

    // 将绝对路径转换为相对路径
    private String toRelativePath(Path absolutePath) {
        Path normalizedPath = absolutePath.normalize();
        if (normalizedPath.startsWith(ROOT)) {
            return "/" + ROOT.relativize(normalizedPath).toString().replace('\\', '/');
        }
        throw new IllegalArgumentException("路径不在根目录下: " + absolutePath);
    }

    @Override
    @Cacheable(value = "GET-FILES" ,key = "#relativePath")
    public List<FileInfo> getFiles(String relativePath) {
        Path dirPath = resolvePath(relativePath);
        if (!Files.exists(dirPath)) {
            return List.of();
        }

        List<FileInfo> fileInfos = new ArrayList<>();
        List<FileInfo> dirInfos = new ArrayList<>();

        try (DirectoryStream<Path> stream = Files.newDirectoryStream(dirPath)) {
            for (Path filePath : stream) {
                if (filePath.endsWith("Config.Msi")) continue;
                try {
                    FileInfo info = extractFileInfo(filePath);
                    if (info.isDirectory()) {
                        dirInfos.add(info);
                    } else {
                        fileInfos.add(info);
                    }
                } catch (AccessDeniedException e) {
                    log.error("拒绝访问: {}", filePath);
                } catch (IOException e) {
                    log.error("文件信息获取失败: {}", filePath, e);
                }
            }
        } catch (IOException e) {
            log.error("目录读取失败: {}", relativePath, e);
        }

        dirInfos.addAll(fileInfos);
        return dirInfos;
    }

    @Override
    public boolean addFile(FileInfo file, byte[] data) {
        if (file == null || data == null) {
            log.error("参数不能为null");
            return false;
        }

        Path targetPath = resolvePath(file.getFilePath());

        try {
            // 确保父目录存在
            Files.createDirectories(targetPath.getParent());

            // 写入文件内容
            Files.write(targetPath, data,
                    StandardOpenOption.CREATE,
                    StandardOpenOption.TRUNCATE_EXISTING);

            return true;
        } catch (IOException e) {
            log.error("文件创建失败: {}", file.getFilePath(), e);

            // 如果写入失败，尝试删除可能已创建的部分文件
            try {
                Files.deleteIfExists(targetPath);
            } catch (IOException ex) {
                log.error("清理失败文件失败: {}", targetPath, ex);
            }
            return false;
        }
    }

    @Override
    public boolean addFile(FileInfo file, InputStream is) {
        if (file == null || is == null) {
            log.error("参数不能为null");
            return false;
        }

        Path targetPath = resolvePath(file.getFilePath());

        try {
            Files.createDirectories(targetPath.getParent());

            try (OutputStream os = Files.newOutputStream(targetPath,
                    StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING)) {
                byte[] buffer = new byte[8192];
                int bytesRead;
                while ((bytesRead = is.read(buffer)) != -1) {
                    os.write(buffer, 0, bytesRead);
                }
            }
            return true;
        } catch (IOException e) {
            log.error("文件创建失败: {}", file.getFilePath(), e);
            try {
                Files.deleteIfExists(targetPath);
            } catch (IOException ex) {
                log.error("清理失败文件失败: {}", targetPath, ex);
            }
            return false;
        } finally {
            try {
                is.close();
            } catch (IOException e) {
                log.error("关闭输入流失败", e);
            }
        }
    }

    @Override
    public boolean moveFile(String oldRelativePath, String newRelativePath) {
        Path source = resolvePath(oldRelativePath);
        Path target = resolvePath(newRelativePath);

        try {
            Files.move(source, target, StandardCopyOption.REPLACE_EXISTING);
            return true;
        } catch (IOException e) {
            log.error("文件移动失败: {} -> {}", oldRelativePath, newRelativePath, e);
            return false;
        }
    }

    @Override
    public boolean deleteFile(String relativePath) {
        Path filePath = resolvePath(relativePath);
        try {
            if (Files.isDirectory(filePath)) {
                deleteDirectory(filePath);
            } else {
                Files.delete(filePath);
            }
            return true;
        } catch (IOException e) {
            log.error("文件删除失败: {}", relativePath, e);
            return false;
        }
    }

    private void deleteDirectory(Path path) throws IOException {
        if (Files.exists(path)) {
            walk(path)
                    .sorted((p1, p2) -> -p1.compareTo(p2))
                    .forEach(p -> {
                        try {
                            Files.delete(p);
                        } catch (IOException e) {
                            log.error("文件删除失败: {}", p, e);
                        }
                    });
        }
    }

    @Override
    public boolean renameFile(String relativePath, String newName) {
        Path oldPath = resolvePath(relativePath);
        Path newPath = oldPath.resolveSibling(newName);

        try {
            Files.move(oldPath, newPath);
            return true;
        } catch (IOException e) {
            log.error("文件重命名失败: {} -> {}", relativePath, newName, e);
            return false;
        }
    }

    @Override
    public boolean exists(String relativePath) {
        return Files.exists(resolvePath(relativePath));
    }

    @Override
    public FileInfo getFileInfo(String path) {
        ;
        try {
            return extractFileInfo(resolvePath(path));
        } catch (IOException e) {
            log.error("文件信息提取失败: {}", path, e);
            return new FileInfo();
        }
    }



    public FileInfo extractFileInfo(Path absolutePath) throws IOException {
        FileInfo fileInfo = new FileInfo();

        // 设置相对路径
        fileInfo.setFilePath(toRelativePath(absolutePath));
        fileInfo.setFileName(absolutePath.getFileName().toString());

        BasicFileAttributes attrs = Files.readAttributes(absolutePath, BasicFileAttributes.class);

        boolean isDirectory = attrs.isDirectory();
        fileInfo.setDirectory(isDirectory);

        if (isDirectory) {
            fileInfo.setFileType("folder");
            fileInfo.setMimeType("inode/directory");
            fileInfo.setFileSize(0);
            fileInfo.setFileHash("");
            fileInfo.setEmpty(isDirectoryEmpty(absolutePath));
        } else {
            fileInfo.setFileSize(attrs.size());
            fileInfo.setEmpty(attrs.size() == 0);

            String fileName = absolutePath.getFileName().toString();
            int dotIndex = fileName.lastIndexOf('.');
            fileInfo.setFileType(dotIndex > 0 ? fileName.substring(dotIndex + 1) : "");

            String contentType = Files.probeContentType(absolutePath);
            fileInfo.setMimeType(Objects.toString(contentType, "unknown"));

            if (attrs.size() > 0) {
                fileInfo.setFileHash(calculateFileHash(absolutePath));
            } else {
                fileInfo.setFileHash("");
            }
        }

        fileInfo.setCreatedTime(new Date(attrs.creationTime().toMillis()));
        fileInfo.setModifiedTime(new Date(attrs.lastModifiedTime().toMillis()));

        return fileInfo;
    }

    private boolean isDirectoryEmpty(Path path) throws IOException {
        if (!Files.isDirectory(path)) {
            return false;
        }
        try (DirectoryStream<Path> directory = Files.newDirectoryStream(path)) {
            return !directory.iterator().hasNext();
        }
    }

    private String calculateFileHash(Path filePath) {
        try {
            if (Files.size(filePath) > 10 * 1024 * 1024) {
                return "too_large_to_compute";
            }
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hashBytes = digest.digest(Files.readAllBytes(filePath));
            StringBuilder sb = new StringBuilder();
            for (byte b : hashBytes) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (Exception e) {
            log.error("哈希计算失败: {}", filePath, e);
            return "hash_computation_error";
        }
    }
}