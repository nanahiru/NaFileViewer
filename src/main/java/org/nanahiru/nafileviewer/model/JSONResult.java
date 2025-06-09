package org.nanahiru.nafileviewer.model;
import cn.hutool.json.JSONUtil;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.util.List;

@Getter
@Setter
public class JSONResult<T> {

    private int code;
    private String msg;
    private T data;
    private List<T> list;

    public JSONResult() {
        code = 200;
        msg = "SUCCESS";
    }

    public JSONResult(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public JSONResult(Integer code, String msg, T data) {
        this(code, msg);
        this.data = data;
    }

    public static JSONResult<Object> failed(String msg) {
       return new JSONResult<>().response(500, msg);
    }
    public static JSONResult<Object> failed(Integer code, String msg) {
        return new JSONResult<>(code, msg);
    }

    public static JSONResult<Object> success(String msg) {
        return JSONResult.success(msg, null);
    }

    public static JSONResult<Object> response(HttpStatus status) {
        return new JSONResult<>(status.value(), status.getReasonPhrase());
    }

    public static JSONResult<Object> response(HttpStatus status, String msg) {
        return new JSONResult<>(status.value(), msg);
    }

    public static JSONResult<Object> success(String msg, Object data) {
        return new JSONResult<>().response(200, msg, data);
    }

    public JSONResult<T> response(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
        return this;
    }

    public JSONResult<T> response(Integer code, String msg,T data) {
       response(code, msg);
        this.data = data;
        return this;
    }

    public JSONResult<T> response(Integer code, String msg,List<T> list) {
        response(code, msg);
        this.list = list;
        return this;
    }


    public String formatToJSONString() {
        return JSONUtil.toJsonStr(this);
    }


}
