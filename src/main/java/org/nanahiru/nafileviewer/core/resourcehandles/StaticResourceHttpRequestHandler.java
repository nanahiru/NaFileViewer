package org.nanahiru.nafileviewer.core.resourcehandles;

import jakarta.servlet.http.HttpServletRequest;
import org.nanahiru.nafileviewer.config.ProjectConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.resource.ResourceHttpRequestHandler;

import java.io.IOException;

@Component
public class StaticResourceHttpRequestHandler extends ResourceHttpRequestHandler {

    public static final String STATIC_RESOURCE_ATTR_NAME = "STATIC_RESOURCE_ATTR";
    @Override
    protected Resource getResource(HttpServletRequest request) throws IOException {
        String filePath = request.getAttribute(STATIC_RESOURCE_ATTR_NAME).toString();
        return new FileSystemResource(filePath);
    }
}
