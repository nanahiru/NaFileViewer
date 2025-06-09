package org.nanahiru.nafileviewer.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.nanahiru.nafileviewer.annotaion.JSONResponse;


import org.nanahiru.nafileviewer.config.ProjectConfig;
import org.nanahiru.nafileviewer.core.FileHandler;
import org.nanahiru.nafileviewer.core.resourcehandles.StaticResourceHttpRequestHandler;
import org.nanahiru.nafileviewer.model.FileInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/files")
@Slf4j
public class FileController {

    @Autowired
    private FileHandler fileHandle;

    @Autowired
    private ProjectConfig projectConfig;



    @Autowired
    private StaticResourceHttpRequestHandler staticResourceHttpRequestHandler;

    @JSONResponse
    @GetMapping("/list")
    public List<FileInfo> getFiles(@RequestParam String path) {
        log.info("get files from path: {}", path);
        return fileHandle.getFiles(path);

    }

    @GetMapping("/getFile")
    public void getFile(HttpServletRequest request, HttpServletResponse response,@RequestParam String path) throws ServletException, IOException {
        String absPath = projectConfig.getRootPath() + path;
        if (Files.isDirectory(Paths.get(absPath))) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        request.setAttribute(StaticResourceHttpRequestHandler.STATIC_RESOURCE_ATTR_NAME, absPath);
        staticResourceHttpRequestHandler.handleRequest(request, response);
    }



}
