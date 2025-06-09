package org.nanahiru.nafileviewer.annotaion;

import org.nanahiru.nafileviewer.model.JSONResult;
import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.lang.NonNullApi;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

import java.util.List;

/**
 * created by Liu GQ
 * 2024/2/14 18:19
 * description:
 **/
@ControllerAdvice
public class JSONResponseBodyAdvice implements ResponseBodyAdvice<Object> {
    @Override
    public boolean supports(MethodParameter returnType, Class<? extends HttpMessageConverter<?>> converterType) {
        return null != returnType.getMethodAnnotation(JSONResponse.class);

    }

    @Override
    public Object beforeBodyWrite(Object body, MethodParameter returnType, MediaType selectedContentType,
                                  Class<? extends HttpMessageConverter<?>> selectedConverterType, ServerHttpRequest request, ServerHttpResponse response) {
        if (body == null) return null;

        JSONResult<Object> jsonResult = new JSONResult<>();
        if (body instanceof JSONResult) {
            return body;
        }

        jsonResult.setData(body);
//        if (body instanceof List) {
//            List<Object> list = (List<Object>) body;
//            jsonResult.setList(list);
//
//        } else {
//
//        }
        return jsonResult;

    }
}
