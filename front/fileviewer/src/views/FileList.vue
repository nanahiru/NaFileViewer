<script setup>
import FileViewer from "@components/file/FileViewer.vue";
// import FileViewerItem from "@components/file/FileViewerItem.vue";
import ImagePreview from "@components/ImagePreview.vue";
import Breadcrumb from "@components/Breadcrumb.vue";
import {getFiles} from "@/api/file.js"
import {
  watch,
  ref,
  onMounted,
  onUnmounted,
  defineEmits,
  defineProps,
  toRefs,
  toRef,
  onBeforeMount,
  nextTick
} from 'vue';
import {fileSuffixUtil} from "@/utils/fileSuffixUtil.js";
import {useRoute, useRouter} from 'vue-router'
import {pathToArray, arrayToPath} from "@/utils/path_utils.js";

const route = useRoute()
const router = useRouter()
let files = ref([])
let multiple = ref(false)
let loadingFiles = ref(false)
let breadcrumbItems = ref([{text: 'ROOT', to: '/files'}])

let images = ref([])
let imageInitUrl = ref('')
let showPreview = ref(false)

onBeforeMount(() => {
  loadFiles()
  loadBreadcrumbs()
})

function loadBreadcrumbs() {
  breadcrumbItems.value = [{text: 'ROOT', to: '/files'}]
  for (let i = 0; i < route.params.paths.length; i++) {
    let item = route.params.paths[i]
    let currArr = route.params.paths.slice(0, i + 1)
    let obj = {text: item}
    if (i !== route.params.paths.length - 1) {
      obj.to =  '/files' + arrayToPath(currArr)
    }
    breadcrumbItems.value.push(obj)
  }

}

function loadFiles() {
  loadingFiles.value = true
  files.value = []
  getFiles(arrayToPath(route.params.paths)).then(res => {
    files.value = res
    loadingFiles.value = false

    // 文件加载完成后，检查是否有hash并滚动到对应位置
    nextTick(() => {
      if (route.hash) {
        const fileId = route.hash.substring(1) // 去掉#号
        scrollToFile(fileId)
      }
    })
  })
}

// 滚动到指定文件
function scrollToFile(fileId) {
  const element = document.getElementById(fileId)
  // document.querySelector('.file-viewer li.viewer-item').classList.remove('highlighted-file')
  if (element) {
    element.scrollIntoView({behavior: 'auto', block: 'start'})

    // 添加高亮样式
    element.classList.add('highlighted-file')
    setTimeout(() => {
      element.classList.remove('highlighted-file')
    }, 1000)
  }
}

// 对路径变化的监听
watch(() => route.params.paths, (newPath, oldPath) => {
  if (newPath.length === oldPath.length && newPath.every((val, index) => val === oldPath[index])) {
    showPreview.value = false
  }
  let title = route.params.paths[route.params.paths.length - 1]
  if (title) {
    document.title = title
  } else {
    document.title = 'File Viewer'
  }

  loadFiles()
  loadBreadcrumbs()


})

// 对hash变化的监听
watch(() => route.hash, (newHash, oldHash) => {
  if (newHash) {
    const fileId = newHash.substring(1)
    scrollToFile(fileId)
  }
})

function handleFile(file) {
  let paths = pathToArray(file.filePath)
  window.location.hash = file.fileName // 记录点击的文件名在路径hash里
  if (file.fileType === 'folder') {
    router.push({
      name: "FileList",
      params: {paths},
    })
  } else if (fileSuffixUtil.isVideo(file.fileType)) {
    router.push({
      name: "Player",
      params: {paths: paths},

    })
  } else if (fileSuffixUtil.isImage(file.fileType)) {
    images.value = []
    for (let item of files.value) {
      if (fileSuffixUtil.isImage(item.fileType)) {
        images.value.push({
          thumbnailSrc: import.meta.env.VITE_BASE_URL + '/images/getThumbnail?path=' + item.filePath,
          originalSrc: import.meta.env.VITE_BASE_URL + '/files/getFile?path=' + item.filePath
        })
      }
    }
    imageInitUrl.value = import.meta.env.VITE_BASE_URL + '/files/getFile?path=' + file.filePath
    showPreview.value = true
  } else {
    router.push({
      name: "FileList",
      params: {paths},
    })
  }
}

// 文件选择事件
function chooseFile(files) {
  if (!multiple.value) {
    let file = files[0]
    handleFile(file)

  }
}

function getIcon(file) {
  if (fileSuffixUtil.isImage(file.fileType)) {
    return import.meta.env.VITE_BASE_URL + '/images/getThumbnail?path=' + file.filePath
  }

  if (fileSuffixUtil.isVideo(file.fileType)) {
    return import.meta.env.VITE_BASE_URL + '/videos/getPreview?path=' + file.filePath
  }

  return ""
}

</script>

<template>
  <Breadcrumb :static-items="breadcrumbItems" separator="/"/>
  <FileViewer class="file-viewer" v-loading="loadingFiles"
              file-name="fileName"
              file-type="fileType"
              mime-type="mimeType"
              id-prop="fileName"
              empty="empty"
              :multiple="multiple"
              :files="files"
              :get-icon="getIcon"
              @choose="chooseFile">
  </FileViewer>


  <image-preview v-if="images.length !== 0" v-model="showPreview" :images="images" :initial-url="imageInitUrl"/>
</template>

<style scoped>
.file-viewer {
  min-width: 200px;
  min-height: 200px;
  margin: 0 auto;
}

/* 高亮样式 */
:deep(.highlighted-file) {
  background-color: rgba(64, 158, 255, 0.1);
  outline: 2px solid #409eff;
  transition: all 0.3s ease;
}
</style>