package org.nanahiru.nafileviewer.annotaion;

import org.springframework.web.bind.annotation.ResponseBody;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
@ResponseBody
public @interface JSONResponse {
//    boolean returnMsg() default false;

    @Deprecated
    String failMessage() default "FAILED";
    @Deprecated
    String successMessage() default "SUCCESS";
    @Deprecated
    int successCode() default 200;
    @Deprecated
    int failCode() default 500;

}
