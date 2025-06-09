package org.nanahiru.nafileviewer.core;

import org.nanahiru.nafileviewer.model.FileInfo;

import java.io.InputStream;
import java.util.List;

public interface FileHandler {


    List<FileInfo> getFiles(String path);
    boolean addFile(FileInfo file, byte[] data);
    boolean addFile(FileInfo file, InputStream is);
    boolean moveFile(String oldPath, String newPath);
    boolean deleteFile(String path);
    boolean renameFile(String path, String newName);
    boolean exists(String path);
    FileInfo getFileInfo(String path);
//    List<FileInfo> getFileInfos(String path, FileType type);

}
