<script setup>
import {fileSuffixUtil} from "@/utils/fileSuffixUtil.js"
import { watch, ref, onMounted, onUnmounted, toRefs, toRef } from 'vue';

const props = defineProps({
  selected: {
    type: Boolean,
    default: false
  },
  // file: Object,
  fileType: {
    type: String,
    required: true,
  },
  mimeType: String,
  fileName: {
    required: true,
    type: String
  },
  icon: String,
  empty: {
    type: Boolean,
    default: false
  }
});



function getIcon() {
  if (props.icon !== undefined && props.icon !== '') return props.icon
  if (props.fileType === "folder") {
    if (props.empty) {
      return "/icons/folder_empty.png"
    }
    return "/icons/folder.png"
  }

  if (props.mimeType != null && props.mimeType.startsWith('video')) {
    return "/icons/video.png"
  }

  if (fileSuffixUtil.isVideo(props.fileType)) {
    return "/icons/video.png"
  }

  if (fileSuffixUtil.isImage(props.fileType)) {
    return "/icons/image.png"
  }

  if (fileSuffixUtil.isPackage(props.fileType)) {
    return "/icons/package.png"
  }
  return "/icons/unknown.png"
}

</script>

<template>
  <li @click="" class="viewer-item" :class="{'selected': props.selected}" >
    <img  class="item-icon" :src="getIcon()"  />
    <p class="file-name">{{fileName}}</p>
  </li>
</template>

<style scoped>
.viewer-item {
  padding: 10px;
  width: 80px;
  min-height: 80px;
  position: relative;
  border: 1px solid transparent;
}
.viewer-item.selected {
  border: 1px solid #5fb0ff;
  background-color: rgba(95, 176, 255, 0.32);
}
.item-icon {
  width: 80px;
  height: 80px;}

.file-name {
  font-size: 12px;
  margin: 0;
  width: 100%;
  text-align: center;
  overflow-wrap: break-word;
}
</style>