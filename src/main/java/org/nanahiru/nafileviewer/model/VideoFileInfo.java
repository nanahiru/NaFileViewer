package org.nanahiru.nafileviewer.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.Duration;

@Getter
@Setter
public class VideoFileInfo extends FileInfo {
    private Duration duration;
    private String formatDuration;
    private String codec;
}
