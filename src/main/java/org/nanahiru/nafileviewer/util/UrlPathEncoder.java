package org.nanahiru.nafileviewer.util;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

public class UrlPathEncoder {

    /**
     * 对URL路径的每一层级进行URL编码
     * @param path 原始路径，如 "/path/中文目录/子目录"
     * @return 编码后的路径，如 "/path/%E4%B8%AD%E6%96%87%E7%9B%AE%E5%BD%95/%E5%AD%90%E7%9B%AE%E5%BD%95"
     * @throws UnsupportedEncodingException 如果指定的编码不被支持
     */
    public static String encodeUrlPath(String path) throws UnsupportedEncodingException {
        if (path == null || path.isEmpty()) {
            return path;
        }

        // 分割路径为各个部分
        String[] parts = path.split("/");
        StringBuilder encodedPath = new StringBuilder();

        for (int i = 0; i < parts.length; i++) {
            if (!parts[i].isEmpty()) {
                // 对每一部分进行编码
                encodedPath.append("/").append(URLEncoder.encode(parts[i], "UTF-8"));
            }
        }

        // 处理以/结尾的情况
        if (path.endsWith("/")) {
            encodedPath.append("/");
        }

        // 处理根路径情况
        if (path.startsWith("/") && encodedPath.length() == 0) {
            return "/";
        }

        return encodedPath.toString();
    }

    /**
     * 对URL路径和查询参数分别进行编码
     * @param url 完整的URL，可以包含查询参数
     * @return 编码后的完整URL
     * @throws UnsupportedEncodingException 如果指定的编码不被支持
     */
    public static String encodeFullUrl(String url) throws UnsupportedEncodingException {
        if (url == null || url.isEmpty()) {
            return url;
        }

        // 分离路径和查询参数
        String[] urlParts = url.split("\\?", 2);
        String path = urlParts[0];
        String query = urlParts.length > 1 ? urlParts[1] : null;

        // 编码路径部分
        String encodedPath = encodeUrlPath(path);

        // 如果有查询参数，编码查询参数
        if (query != null) {
            String[] params = query.split("&");
            StringBuilder encodedQuery = new StringBuilder();

            for (String param : params) {
                String[] keyValue = param.split("=", 2);
                if (encodedQuery.length() > 0) {
                    encodedQuery.append("&");
                }
                encodedQuery.append(URLEncoder.encode(keyValue[0], "UTF-8"));
                if (keyValue.length > 1) {
                    encodedQuery.append("=").append(URLEncoder.encode(keyValue[1], "UTF-8"));
                }
            }

            return encodedPath + "?" + encodedQuery.toString();
        }

        return encodedPath;
    }


}