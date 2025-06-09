package org.nanahiru.nafileviewer.config;

import org.nanahiru.nafileviewer.interceptor.ApiPrefixInterceptor;
import org.nanahiru.nafileviewer.interceptor.BasicAuthInterceptor;
import org.nanahiru.nafileviewer.interceptor.GlobalInterceptor;
import org.nanahiru.nafileviewer.interceptor.HLSPlayInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private ApiPrefixInterceptor apiPrefixInterceptor;

    @Autowired
    private HLSPlayInterceptor hlsPlayInterceptor;

    @Autowired
    private BasicAuthInterceptor basicAuthInterceptor;

    @Autowired
    private GlobalInterceptor globalInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(apiPrefixInterceptor)
                .addPathPatterns("/api/**");

        registry.addInterceptor(hlsPlayInterceptor).addPathPatterns("/videos/play/hls/**");

        registry.addInterceptor(basicAuthInterceptor).addPathPatterns("/**");

        registry.addInterceptor(globalInterceptor).addPathPatterns("/**");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173", "http://192.168.10.33:5173") // 允许域
                .allowedMethods("POST", "GET", "PUT", "OPTIONS", "DELETE") // 允许的方法
                .allowedHeaders("*") // 允许的头部设置
                .exposedHeaders("Authorization")
                .allowCredentials(true) // 是否发送cookie
                .maxAge(3600); // 预检间隔时间
    }


}
