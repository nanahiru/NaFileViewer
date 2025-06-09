package org.nanahiru.nafileviewer.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
@ConfigurationProperties(prefix = "project")
public class ProjectConfig {

    private String rootPath;
    private String cachePath;
    private String env;

    private Map<String, String> users;

    public ProjectConfig() {

    }

    public String getRootPath() {
        return rootPath;
    }

    public void setRootPath(String rootPath) {
        this.rootPath = rootPath;
    }

    public String getCachePath() {
        return cachePath;
    }
    public void setCachePath(String cachePath) {
        this.cachePath = cachePath;
    }

    public String getEnv() {
        return env;
    }

    public void setEnv(String env) {
        this.env = env;
    }

    public Map<String, String> getUsers() {
        return users;
    }
    public void setUsers(Map<String, String> users) {
        this.users = users;
    }
}
