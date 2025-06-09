package org.nanahiru.nafileviewer.model;
import java.nio.file.*;
import java.nio.file.attribute.*;
import java.io.IOException;
import java.util.Date;
import java.security.MessageDigest;
import java.util.Objects;

import lombok.Data;
import lombok.Setter;

import java.util.Date;

@Data
public class FileInfo {

    private String fileName;
    private String fileType;
    private String mimeType;
    private long fileSize;
    private String filePath;
    private String fileHash;
    private Date createdTime;
    private Date modifiedTime;
    private boolean isEmpty;
    private boolean isDirectory;

}
