<script setup>
import { fileSuffixUtil } from "@/utils/fileSuffixUtil.js";
import { ref } from 'vue';

const emit = defineEmits(['choose'])
const props = defineProps({
  multiple: {
    type: Boolean,
    default: false
  },
  files: {
    type: Array,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  },
  empty: String,
  getIcon: Function,
  idProp: String
});

// 点击文件项事件
function select(file) {

  // 非多选时返回当前点击的文件
  if (!props.multiple) {
    emit("choose", [file])
    return
  }

  file.selected = ! file.selected

  // 多选时返回选中的文件列表
  let selectedFiles = []
  for (let item of props.files) {
    if (item.selected) {
      selectedFiles.push(item)
    }
  }

  emit('choose', selectedFiles)
}

// 存储已加载的自定义图标状态
const iconStates = ref({});

// 获取默认图标
function getDefaultIcon(file) {
  if (file[props.fileType] === "folder") {
    if (!props.empty) return "/icons/folder.png";
    return file[props.empty] ? "/icons/folder_empty.png" : "/icons/folder.png";
  }
  if (file[props.mimeType]?.startsWith('video') || fileSuffixUtil.isVideo(file[props.fileType])) {
    return "/icons/video.png";
  }
  if (fileSuffixUtil.isImage(file[props.fileType])) {
    return "/icons/image.png";
  }
  if (fileSuffixUtil.isPackage(file[props.fileType])) {
    return "/icons/package.png";
  }
  return "/icons/unknown.png";
}

// 初始化图标加载状态
function initIconLoading(file) {
  const fileId = file.id || file[props.fileName];

  if (iconStates.value[fileId] === undefined) {
    iconStates.value[fileId] = {
      defaultIcon: getDefaultIcon(file),
      customIcon: null,
      loading: false,
      loaded: false
    };

    // 自动开始加载自定义图标
    if (typeof props.getIcon === 'function') {
      const iconUrl = props.getIcon(file);
      if (typeof iconUrl === 'string' && iconUrl.trim() !== '') {
        iconStates.value[fileId].loading = true;
        const img = new Image();
        img.onload = () => {
          iconStates.value[fileId] = {
            ...iconStates.value[fileId],
            customIcon: iconUrl,
            loading: false,
            loaded: true
          };
        };
        img.onerror = () => {
          iconStates.value[fileId].loading = false;
        };
        img.src = iconUrl;
      }
    }
  }

  return iconStates.value[fileId];
}
</script>

<template>
  <ul class="file-viewer">
    <li
        :id="file[props.idProp]"
        @click="select(file)"
        v-for="file in files"
        class="viewer-item"
        :class="{ 'selected': file.selected }"
    >
      <div class="icon-container">
        <!-- 主图标（自定义或默认） -->
        <img
            class="main-icon"
            :src="initIconLoading(file).customIcon || initIconLoading(file).defaultIcon"
        />

        <!-- 当有自定义图标时显示缩小的默认图标 -->
        <img
            v-if="initIconLoading(file).customIcon"
            class="small-default-icon"
            :src="initIconLoading(file).defaultIcon"
        />
      </div>
      <p class="file-name">{{ file[fileName] }}</p>
    </li>
  </ul>
</template>

<style scoped>
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.file-viewer {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 10px;
  justify-content: space-between;
}

.viewer-item {
  padding: 10px;
  width: 80px;
  min-height: 80px;
  position: relative;
  border: 1px solid transparent;
  cursor: pointer;
}

.viewer-item.selected {
  border: 1px solid #5fb0ff;
  background-color: rgba(95, 176, 255, 0.32);
}

.icon-container {
  position: relative;
  width: 80px;
  height: 80px;
}

.main-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.small-default-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  object-fit: contain;
  border-radius: 2px;
  background: white;
  padding: 1px;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
}

.file-name {
  font-size: 12px;
  margin: 5px 0 0;
  width: 100%;
  text-align: center;
  overflow-wrap: break-word;
}
</style>