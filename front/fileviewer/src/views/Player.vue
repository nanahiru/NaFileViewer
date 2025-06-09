<script setup>
import Hls from "hls.js";
import DPlayer from 'dplayer';
import {pathToArray, arrayToPath} from "@/utils/path_utils.js";
import {useRoute, useRouter} from 'vue-router'
import {onMounted, ref, watch} from "vue";
import {getVideos} from "@/api/video.js";

const route = useRoute()
const router = useRouter()
let playerRef = ref(null)
const fileName = ref('')

// 模拟视频列表数据（带预览图）
const videoList = ref([])

onMounted(() => {
  loadVideo()
  loadVideoList()
})

function loadVideo() {
  fileName.value = route.params.paths[route.params.paths.length - 1]
  const dp = new DPlayer({
    container: playerRef.value,
    video: {
      url: import.meta.env.VITE_BASE_URL + '/videos/convertToHLS?path=' + arrayToPath(route.params.paths),
      pic: import.meta.env.VITE_BASE_URL + '/videos/getPreview?path=' + arrayToPath(route.params.paths),
      type: 'customHls',
      customType: {
        customHls: function (video, player) {
          const hls = new Hls({
            manifestLoadingMaxRetry: 20,  // 最大重试次数
            manifestLoadingRetryDelay: 2000, // 重试间隔（毫秒）
            lowLatencyMode: true,
          });
          hls.loadSource(video.src);
          hls.attachMedia(video);
          // player.play()
        },
      },
    },
  });
}

function loadVideoList() {
  videoList.value = []
  let currPath = arrayToPath(route.params.paths.slice(0, -1))
  let currFile = arrayToPath(route.params.paths)
  getVideos(currPath).then(data => {
    if (data.length === 0) return
    for (let video of data) {
      video.title = video.fileName
      video.duration = video.formatDuration
      video.selected = currFile === video.filePath
      video.preview = import.meta.env.VITE_BASE_URL + '/videos/getPreview?path=' + video.filePath
    }
    videoList.value =data
  })
}
// 点击切换视频
function selectVideo(video) {
  console.log(video)
  router.push({
    name: "Player",
    params: {paths: pathToArray(video.filePath)},

  })
}

watch(() => route.params.paths, (newPath, oldPath) => {
  if ( newPath.length === oldPath.length && newPath.every((val, index) => val === oldPath[index])) {
    return
  }
  loadVideo()
  loadVideoList()


})
</script>

<template>
  <div class="video-container">
    <div class="player-section">
      <h1 class="video-title">{{ fileName }}</h1>
      <div id="player" ref="playerRef" class="video-player"></div>
    </div>

    <div class="video-list-section">
      <h2 class="list-title">视频列表</h2>
      <ul class="video-list">
        <li
            v-for="video in videoList"
            :key="video.fileName"
            :class="['video-item', { active: video.selected }]"
            @click="selectVideo(video)"
        >
          <div class="video-thumbnail">
            <img :src="video.preview" :alt="video.title">
            <span class="duration-badge">{{ video.duration }}</span>
          </div>
          <div class="video-info">
            <span class="video-name">{{ video.title }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.video-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
}

.player-section {
  flex: 2;
  min-width: 0;
  width: 100%;
}

.video-list-section {
  flex: 1;
  min-width: 0;
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 15px;
  box-sizing: border-box;
}

.video-title {
  margin-bottom: 15px;
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
}

.list-title {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #555;
}

.video-player {
  width: 100%;
  aspect-ratio: 16/9;
  background-color: #000;
  border-radius: 8px;
}

.video-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.video-item {
  display: flex;
  gap: 12px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  background-color: white;
}

.video-item:hover {
  background-color: #f0f0f0;
}

.video-item.active {
  background-color: #e0f0ff;
  border: 1px solid #1890ff;
}

.video-thumbnail {
  position: relative;
  width: 120px;
  height: 68px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.duration-badge {
  position: absolute;
  right: 4px;
  bottom: 4px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
}

.video-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.video-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .video-container {
    flex-direction: column;
    padding: 0;
    max-width: 100%;
  }

  .player-section {
    padding: 0px;
    width: 100%;
  }

  .video-list-section {
    width: 100%;
    border-radius: 0;
    padding: 15px;
  }

  .video-list {
    gap: 15px;
  }

  .video-item {
    padding: 10px;
  }

  .video-thumbnail {
    width: 150px;
    height: 85px;
  }
}
</style>