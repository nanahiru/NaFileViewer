package org.nanahiru.nafileviewer.interceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.nanahiru.nafileviewer.config.ProjectConfig;
import org.nanahiru.nafileviewer.core.resourcehandles.StaticResourceHttpRequestHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Component
public class HLSPlayInterceptor implements HandlerInterceptor {

    @Autowired
    private StaticResourceHttpRequestHandler staticResourceHttpRequestHandler;

    @Autowired
    private ProjectConfig projectConfig;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String requestURI = request.getRequestURI();
        if (!requestURI.startsWith("/videos/play/hls/")) return true;


        String videoURI = requestURI.replaceFirst("/videos/play/hls/", "");

        String indexPath = projectConfig.getCachePath() + "/" + URLDecoder.decode(videoURI, StandardCharsets.UTF_8);
        request.setAttribute(StaticResourceHttpRequestHandler.STATIC_RESOURCE_ATTR_NAME, indexPath);
        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Expires", "0");
        try {
            staticResourceHttpRequestHandler.handleRequest(request, response);
        } catch (FileNotFoundException e) {
            response.setContentType("application/vnd.apple.mpegurl");
//            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
//            response.setCharacterEncoding("UTF-8");
            PrintWriter out = response.getWriter();
            out.println("#EXTM3U");
            out.println("#EXT-X-VERSION:3");
            out.println("#EXT-X-TARGETDURATION:2");
            out.println("#EXT-X-MEDIA-SEQUENCE:0");
            out.println("#EXT-X-PLAYLIST-TYPE:LIVE ");
            out.flush();
            out.close();
        }
        return false; // 拦截请求，不继续执行后续处理
    }
}
