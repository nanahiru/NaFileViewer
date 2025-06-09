package org.nanahiru.nafileviewer.interceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.nanahiru.nafileviewer.config.ProjectConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import java.io.IOException;
import java.util.Base64;
import java.util.Map;

@Component
public class BasicAuthInterceptor implements HandlerInterceptor {




    private static final String AUTH_HEADER = "Authorization";
    private static final String BASIC_PREFIX = "Basic ";

    @Autowired
    private ProjectConfig projectConfig;


    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if ("dev".equals(projectConfig.getEnv())) {
            return true;
        }
        String authHeader = request.getHeader(AUTH_HEADER);

        if (authHeader == null || !authHeader.startsWith(BASIC_PREFIX)) {
            sendUnauthorized(response, "No Basic Auth header found");
            return false;
        }

        // 解码Basic认证信息
        String base64Credentials = authHeader.substring(BASIC_PREFIX.length());
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(decodedBytes);

        // 格式应该是 username:password
        String[] values = credentials.split(":", 2);
        if (values.length != 2) {
            sendUnauthorized(response, "Invalid Basic Auth format");
            return false;
        }

        String username = values[0];
        String password = values[1];

        // 第一次初始化用户名密码

        String propPassword = projectConfig.getUsers().get(username);

        // 验证用户名密码是否正确
        if (password != null && password.equals(propPassword)) {
            return true;
        }

        sendUnauthorized(response, "Invalid credentials");
        return false;
    }

    private void sendUnauthorized(HttpServletResponse response, String message) throws IOException {
        response.setHeader("WWW-Authenticate", "Basic realm=\"Access to the site\"");
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, message);
    }
}