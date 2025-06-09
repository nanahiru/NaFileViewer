package org.nanahiru.nafileviewer.controller;

import cn.hutool.core.net.url.UrlPath;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.nanahiru.nafileviewer.annotaion.JSONResponse;
import org.nanahiru.nafileviewer.config.ProjectConfig;
import org.nanahiru.nafileviewer.core.VideoHandler;
import org.nanahiru.nafileviewer.core.resourcehandles.StaticResourceHttpRequestHandler;
import org.nanahiru.nafileviewer.model.VideoFileInfo;
import org.nanahiru.nafileviewer.util.UrlPathEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.List;

@Controller
@RequestMapping("/videos")
public class VideoController {

    @Autowired
    private StaticResourceHttpRequestHandler staticResourceHttpRequestHandler;

//    @Qualifier("javaCVLocalVideoHandler")
    @Qualifier("FFmpegCommandVideoHandler")
    @Autowired
    private VideoHandler videoHandler;




    @GetMapping("/getPreview")
    public void getPreview(HttpServletRequest request, HttpServletResponse response, @RequestParam String path) throws ServletException, IOException {

        String absPath = videoHandler.getVideoPreview(path, Duration.ofSeconds(2L));
        request.setAttribute(StaticResourceHttpRequestHandler.STATIC_RESOURCE_ATTR_NAME, absPath);
        staticResourceHttpRequestHandler.handleRequest(request, response);
    }

    @GetMapping("/convertToHLS")
    public void hlsPlay(HttpServletRequest request, HttpServletResponse response, @RequestParam String path) throws IOException, InterruptedException {
        videoHandler.asyncConvertToHLS(path, VideoHandler.Codec.H264, VideoHandler.Quality.Original);
        response.sendRedirect(UrlPathEncoder.encodeUrlPath("/videos/play/hls" + path + "/index.m3u8"));

    }

    @JSONResponse
    @GetMapping("/getVideos")
    public List<VideoFileInfo> getVideos(String path)  {
        return videoHandler.getVideoFileInfos(path);
    }





}
