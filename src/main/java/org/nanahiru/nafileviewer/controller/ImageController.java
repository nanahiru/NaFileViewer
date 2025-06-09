package org.nanahiru.nafileviewer.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.nanahiru.nafileviewer.config.ProjectConfig;
import org.nanahiru.nafileviewer.core.ImageHandler;
import org.nanahiru.nafileviewer.core.resourcehandles.StaticResourceHttpRequestHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Controller
@RequestMapping("/images")
public class ImageController {

    @Autowired
    private ImageHandler imageHandle;

    @Autowired
    private ProjectConfig projectConfig;

    @Autowired
    private StaticResourceHttpRequestHandler staticResourceHttpRequestHandler;

    @GetMapping("/getThumbnail")
    public void getThumbnail(HttpServletRequest request, HttpServletResponse response, @RequestParam String path) throws ServletException, IOException {
        String absPath = imageHandle.getThumbnail(path);
        if (Files.isDirectory(Paths.get(absPath))) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        request.setAttribute(StaticResourceHttpRequestHandler.STATIC_RESOURCE_ATTR_NAME, absPath);
        staticResourceHttpRequestHandler.handleRequest(request, response);
    }

}
