package org.nanahiru.nafileviewer.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/error")
public class FErrorController implements ErrorController {


    @RequestMapping("")
    public String notFound(HttpServletRequest request, HttpServletResponse response) {
        Integer statusCode = response.getStatus();
        if (statusCode == 404) {
            response.setStatus(HttpServletResponse.SC_OK);
            return "forward:/index.html";
        }
        return null;
    }




}
