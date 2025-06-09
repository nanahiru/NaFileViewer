package org.nanahiru.nafileviewer.interceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class ApiPrefixInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String requestURI = request.getRequestURI();
        if (requestURI.startsWith("/api")) {
            String newUri = requestURI.replaceFirst("/api", "");
            request.getRequestDispatcher(newUri).forward(request, response);

        }
        return false; // 拦截请求，不继续执行后续处理
    }
}
