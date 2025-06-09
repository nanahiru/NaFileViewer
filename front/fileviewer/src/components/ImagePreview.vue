<template>
  <div v-if="visible" class="image-preview-container" ref="containerRef">
    <div @click.stop="close" class="top-close-btn">关闭</div>
    <div class="main-image-wrapper" ref="mainImageWrapper" :style="wrapperStyle">
      <img
          ref="mainImageRef"
          :src="currentImage.originalSrc || currentImage.src"
          :style="imageStyle"
          @dblclick="handleDoubleClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @wheel.prevent="handleWheel"
          @load="handleImageLoad"
          @error="handleImageError"
          @mousedown="handleMouseDown"
      />
      <div class="loading-indicator" v-if="loading">加载中...</div>
      <div class="error-indicator" v-if="imageError">图片加载失败</div>
    </div>

    <div @click.stop="resetHideTimer" v-if="showControls" class="image-preview-bottom-container">
      <div class="control-buttons">
        <button @click="prevImage">&lt;</button>
        <button @click="rotate(-90)">左旋转</button>
        <button @click="rotate(90)">右旋转</button>
        <button @click="resetTransform">重置</button>
        <button @click="nextImage"> &gt; </button>
<!--        <button @click="toggleControls">隐藏控制栏</button>-->

<!--        <button @click="close">关闭</button>-->
      </div>

      <div class="thumbnail-scroll-container">
        <div class="thumbnail-container" ref="thumbnailContainer">
          <div
              v-for="(img, index) in normalizedImages"
              :key="index"
              class="thumbnail-item"
              :class="{ active: currentIndex === index }"
              @click.stop="changeImage(index)"
          >
            <img
                :src="img.thumbnailSrc || img.src"
                :data-index="index"
                loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  initialUrl: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

// 状态管理
const visible = ref(props.modelValue)
const currentIndex = ref(props.initialIndex)
const scale = ref(1)
const rotation = ref(0)
const position = ref({ x: 0, y: 0 })
const loading = ref(false)
const imageError = ref(false)
const containerRef = ref(null)
const mainImageRef = ref(null)
const mainImageWrapper = ref(null)
const thumbnailContainer = ref(null)
const containerSize = ref({ width: 0, height: 0 })
const imageNaturalSize = ref({ width: 0, height: 0 })
const imageDisplaySize = ref({ width: 0, height: 0 })
const showControls = ref(true)
const hideTimer = ref(null)
const HIDE_DELAY = 3000 // 3秒后隐藏控件

// 手势交互状态
const interaction = ref({
  mode: null,
  startX: 0,
  startY: 0,
  startDistance: 0,
  startScale: 1,
  startPosition: { x: 0, y: 0 },
  lastTouchTime: 0,
  isSwiping: false,
  centerPoint: { x: 0, y: 0 }
})

// 滑动速度控制
const touchVelocity = ref(0)
const lastTouchMoveTime = ref(0)
const lastTouchMoveX = ref(0)
const swipeThreshold = 50
const maxSwipeVelocity = 0.5

// 计算属性
const wrapperStyle = computed(() => ({
  width: `${containerSize.value.width}px`,
  height: `${containerSize.value.height - 160}px`
}))


const minScale = computed(() => {
  if (!mainImageRef.value || !mainImageWrapper.value) return 1

  const containerWidth = mainImageWrapper.value.clientWidth
  const containerHeight = mainImageWrapper.value.clientHeight - 160
  const imgWidth = imageNaturalSize.value.width
  const imgHeight = imageNaturalSize.value.height

  const widthRatio = containerWidth / imgWidth
  const heightRatio = containerHeight / imgHeight

  return Math.max(Math.min(widthRatio, heightRatio), 0.5)
})

const normalizedImages = computed(() => {
  return props.images.map(img => {
    if (typeof img === 'string') {
      return { src: img, thumbnailSrc: img }
    }
    return { ...img, thumbnailSrc: img.thumbnailSrc || img.src }
  })
})

const currentImage = computed(() => {
  return normalizedImages.value[currentIndex.value] || {}
})

const imageStyle = computed(() => ({
  transform: `scale(${scale.value}) rotate(${rotation.value}deg) translate(${position.value.x}px, ${position.value.y}px)`,
  transition: interaction.value.mode === 'drag' ? 'none' : 'transform 0.2s ease-out'
}))

/*const visibleThumbnails = computed(() => {
  const start = Math.max(0, currentIndex.value - 10)
  const end = Math.min(normalizedImages.value.length, currentIndex.value + 11)
  return normalizedImages.value.slice(start, end).map((img, index) => ({
    ...img,
    originalIndex: start + index
  }))
})*/

// 初始化隐藏计时器
const startHideTimer = () => {
  clearTimeout(hideTimer.value)
  hideTimer.value = setTimeout(() => {
    showControls.value = false
  }, HIDE_DELAY)
}

// 重置隐藏计时器
const resetHideTimer = () => {
  showControls.value = true
  startHideTimer()
}

// 手动切换控件显示状态
const toggleControls = () => {
  showControls.value = !showControls.value
  if (showControls.value) {
    startHideTimer()
  }
}



// 核心功能方法
const initContainerSize = () => {
  if (containerRef.value) {
    containerSize.value = {
      width: containerRef.value.clientWidth,
      height: containerRef.value.clientHeight
    }
  }
}

const limitPosition = () => {
  if (!mainImageRef.value || !mainImageWrapper.value) return

  const wrapper = mainImageWrapper.value
  const currentScale = scale.value

  const displayWidth = imageNaturalSize.value.width * currentScale
  const displayHeight = imageNaturalSize.value.height * currentScale

  const maxX = Math.max(0, (displayWidth - wrapper.clientWidth) / 2)
  const maxY = Math.max(0, (displayHeight - wrapper.clientHeight) / 2)

  position.value = {
    x: Math.max(-maxX, Math.min(maxX, position.value.x)),
    y: Math.max(-maxY, Math.min(maxY, position.value.y))
  }

  scale.value = Math.max(minScale.value, Math.min(5, scale.value))
}

const resetTransform = () => {
  scale.value = Math.max(minScale.value, 1)
  rotation.value = 0
  position.value = { x: 0, y: 0 }

  if (isMobile() && mainImageRef.value) {
    const img = mainImageRef.value
    const aspectRatio = img.naturalHeight / img.naturalWidth
    const screenWidth = containerSize.value.width
    const screenHeight = containerSize.value.height - 160

    if (screenWidth * aspectRatio > screenHeight) {
      img.style.height = `${screenHeight}px`
      img.style.width = `${screenHeight / aspectRatio}px`
    } else {
      img.style.width = `${screenWidth}px`
      img.style.height = `${screenWidth * aspectRatio}px`
    }
  }

  nextTick(() => limitPosition())
}

// 图片交互方法
const handleImageLoad = () => {
  loading.value = false
  imageError.value = false

  if (mainImageRef.value) {
    imageNaturalSize.value = {
      width: mainImageRef.value.naturalWidth,
      height: mainImageRef.value.naturalHeight
    }

    scale.value = Math.max(minScale.value, 1)

    if (isMobile()) {
      const img = mainImageRef.value
      const aspectRatio = img.naturalHeight / img.naturalWidth
      const containerWidth = containerSize.value.width
      const containerHeight = containerSize.value.height - 160

      if (containerWidth * aspectRatio > containerHeight) {
        img.style.height = `${containerHeight}px`
        img.style.width = `${containerHeight / aspectRatio}px`
      } else {
        img.style.width = `${containerWidth}px`
        img.style.height = `${containerWidth * aspectRatio}px`
      }
    }
  }

  resetTransform()
}

const handleImageError = () => {
  loading.value = false
  imageError.value = true
}

// 鼠标交互
const handleMouseDown = (e) => {
  if (e.button !== 0) return

  e.preventDefault()

  interaction.value = {
    mode: 'drag',
    startX: e.clientX,
    startY: e.clientY,
    startPosition: { ...position.value },
    startScale: scale.value,
    isSwiping: true
  }

  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  document.addEventListener('mouseleave', handleMouseUp)
}

const handleMouseMove = (e) => {
  if (interaction.value.mode !== 'drag') return

  const dx = e.clientX - interaction.value.startX
  const dy = e.clientY - interaction.value.startY

  position.value = {
    x: interaction.value.startPosition.x + dx,
    y: interaction.value.startPosition.y + dy
  }

  limitPosition()
}

const handleMouseUp = () => {
  if (interaction.value.mode !== 'drag') return

  interaction.value.mode = null
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
  document.removeEventListener('mouseleave', handleMouseUp)

  limitPosition()
}

// 触摸交互
const handleTouchStart = (e) => {
  if (e.touches.length === 1) {
    interaction.value = {
      mode: 'switch',
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
      startPosition: { ...position.value },
      startScale: scale.value,
      lastTouchTime: Date.now(),
      isSwiping: false
    }
    touchVelocity.value = 0
    lastTouchMoveTime.value = Date.now()
    lastTouchMoveX.value = e.touches[0].clientX
  } else if (e.touches.length === 2) {
    const touch1 = e.touches[0]
    const touch2 = e.touches[1]

    interaction.value = {
      mode: 'zoom',
      startDistance: getDistance(touch1.clientX, touch1.clientY, touch2.clientX, touch2.clientY),
      startScale: scale.value,
      startPosition: { ...position.value },
      centerPoint: getCenterPoint(touch1.clientX, touch1.clientY, touch2.clientX, touch2.clientY)
    }
  }
}

const handleTouchMove = (e) => {
  if (interaction.value.mode === 'switch' && e.touches.length === 1) {
    const touch = e.touches[0]
    const dx = touch.clientX - interaction.value.startX
    const dy = touch.clientY - interaction.value.startY

    const now = Date.now()
    const deltaTime = now - lastTouchMoveTime.value
    const deltaX = touch.clientX - lastTouchMoveX.value

    if (deltaTime > 0) {
      touchVelocity.value = deltaX / deltaTime
    }

    lastTouchMoveTime.value = now
    lastTouchMoveX.value = touch.clientX

    if (!interaction.value.isSwiping && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
      interaction.value.isSwiping = true
    }

    if (interaction.value.isSwiping) {
      if (scale.value === 1) {
        position.value = {
          x: interaction.value.startPosition.x + dx,
          y: interaction.value.startPosition.y + dy
        }
      } else {
        position.value = {
          x: interaction.value.startPosition.x + dx,
          y: interaction.value.startPosition.y + dy
        }
        limitPosition()
      }
    }

    e.preventDefault()
  } else if (interaction.value.mode === 'zoom' && e.touches.length === 2) {
    const touch1 = e.touches[0]
    const touch2 = e.touches[1]
    const currentDistance = getDistance(touch1.clientX, touch1.clientY, touch2.clientX, touch2.clientY)

    const newScale = Math.max(minScale.value, Math.min(5,
        interaction.value.startScale * (currentDistance / interaction.value.startDistance)
    ))

    const currentCenter = getCenterPoint(touch1.clientX, touch1.clientY, touch2.clientX, touch2.clientY)
    const centerOffsetX = currentCenter.x - interaction.value.centerPoint.x
    const centerOffsetY = currentCenter.y - interaction.value.centerPoint.y

    position.value = {
      x: interaction.value.startPosition.x + centerOffsetX,
      y: interaction.value.startPosition.y + centerOffsetY
    }

    scale.value = newScale
    limitPosition()
    e.preventDefault()
  }
}

const handleTouchEnd = (e) => {
  if (interaction.value.mode === 'switch' && interaction.value.isSwiping) {
    if (scale.value === 1) {
      const dx = e.changedTouches[0].clientX - interaction.value.startX
      const timeDelta = Date.now() - interaction.value.lastTouchTime

      const velocity = Math.min(maxSwipeVelocity, Math.max(-maxSwipeVelocity, touchVelocity.value))
      const effectiveDx = dx + velocity * 100

      if (Math.abs(effectiveDx) > swipeThreshold || Math.abs(velocity) > 0.2) {
        if (effectiveDx > 0) {
          changeImage(currentIndex.value - 1)
        } else {
          changeImage(currentIndex.value + 1)
        }
      }
    }

    if (scale.value === 1) {
      resetTransform()
    }
  } else if (interaction.value.mode === 'zoom') {
    limitPosition()
  }

  interaction.value.mode = null
}

// 其他交互方法
const handleWheel = (e) => {
  if (!mainImageRef.value) return

  e.preventDefault()
  const delta = e.deltaY > 0 ? -0.1 : 0.1

  const newScale = Math.max(minScale.value, Math.min(5, scale.value + delta))

  const rect = mainImageRef.value.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top
  const imgCenterX = rect.width / 2
  const imgCenterY = rect.height / 2
  const offsetX = mouseX - imgCenterX
  const offsetY = mouseY - imgCenterY

  position.value = {
    x: position.value.x - offsetX * (newScale - scale.value) / scale.value,
    y: position.value.y - offsetY * (newScale - scale.value) / scale.value
  }

  scale.value = newScale
  limitPosition()
}

const handleDoubleClick = (e) => {
  if (scale.value === 1) {
    const rect = mainImageRef.value.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const offsetX = e.offsetX - centerX
    const offsetY = e.offsetY - centerY

    scale.value = 2
    position.value = {
      x: -offsetX,
      y: -offsetY
    }

    limitPosition()
  } else {
    resetTransform()
  }
}

// 其他功能方法
const changeImage = (index) => {
  resetHideTimer()
  index = Math.max(0, Math.min(normalizedImages.value.length - 1, index))

  if (index !== currentIndex.value) {
    loading.value = true
    imageError.value = false
    currentIndex.value = index

    resetTransform()

    nextTick(() => {
      const activeThumb = thumbnailContainer.value?.querySelector('.thumbnail-item.active')
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
      }
    })
  }
}

const rotate = (degrees) => {
  rotation.value += degrees
  nextTick(() => limitPosition())
}

const close = () => {
  visible.value = false
  emit('update:modelValue', false)
  emit('close')
}

// 辅助函数
const getDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

const getCenterPoint = (x1, y1, x2, y2) => {
  return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 }
}

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// 生命周期
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('resize', handleResize)
  document.addEventListener("click", toggleControls)
  startHideTimer()
  if (visible.value) {
    loading.value = true
    initContainerSize()
    initCurrentIndex()
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', toggleControls)

  clearTimeout(hideTimer.value)
})

const handleResize = () => {
  initContainerSize()
  if (mainImageRef.value) {
    imageDisplaySize.value = {
      width: mainImageRef.value.offsetWidth,
      height: mainImageRef.value.offsetHeight
    }

    if (scale.value === 1) {
      resetTransform()
    } else {
      limitPosition()
    }
  }
}

const handleKeyDown = (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      changeImage(currentIndex.value - 1)
      break
    case 'ArrowRight':
      changeImage(currentIndex.value + 1)
      break
    case 'Escape':
      close()
      break
    case '+':
      scale.value = Math.min(5, scale.value + 0.1)
      limitPosition()
      break
    case '-':
      scale.value = Math.max(minScale.value, scale.value - 0.1)
      limitPosition()
      break
    case 'r':
      rotate(90)
      break
    case 'R':
      rotate(-90)
      break
    case '0':
      resetTransform()
      break
  }
}

// 监听器
watch(() => props.modelValue, (val) => {
  visible.value = val
  if (val) {
    startHideTimer()
    loading.value = true
    initCurrentIndex()
    initContainerSize()
    resetTransform()

    nextTick(() => {
      const activeThumb = thumbnailContainer.value?.querySelector('.thumbnail-item.active')
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
      }
    })
  }
})

const initCurrentIndex = () => {
  if (props.initialUrl) {
    const index = normalizedImages.value.findIndex(img =>
        (img.originalSrc && img.originalSrc === props.initialUrl) ||
        (img.src && img.src === props.initialUrl)
    )
    currentIndex.value = index >= 0 ? index : props.initialIndex
  } else {
    currentIndex.value = props.initialIndex
  }
}

const prevImage = () => {
  if (currentIndex.value > 0) {
    changeImage(currentIndex.value - 1)
  }
}

const nextImage = () => {
  if (currentIndex.value < normalizedImages.value.length - 1) {
    changeImage(currentIndex.value + 1)
  }
}

</script>

<style scoped>
.image-preview-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  touch-action: none;
  overflow: hidden;
}

.main-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  flex-grow: 1;
}

.main-image-wrapper img {
  object-fit: contain;
  transform-origin: center center;
  cursor: grab;
  will-change: transform;
  user-select: none;
  -webkit-user-drag: none;
  max-width: 100%;
  max-height: 100%;
}

.main-image-wrapper img:active {
  cursor: grabbing;
}

.loading-indicator,
.error-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.2rem;
  user-select: none;
}

.error-indicator {
  color: #ff5252;
}

.image-preview-bottom-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px 0;
}

.control-buttons {
  margin: 10px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.control-buttons button {
  padding: 8px 16px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.top-close-btn {
  padding: 5px 13px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 6500;
  font-size: 12px;
}

.control-buttons button:hover {
  background-color: #555;
}

.thumbnail-scroll-container {
  width: 100%;
  overflow-x: auto;
  padding: 10px 0;
  margin-bottom: 10px;
}

.thumbnail-scroll-container::-webkit-scrollbar {
  height: 6px;
}

.thumbnail-scroll-container::-webkit-scrollbar-thumb {
  background-color: #666;
  border-radius: 3px;
}

.thumbnail-container {
  display: flex;
  padding: 0 10px;
  width: max-content;
}

.thumbnail-item {
  flex: 0 0 auto;
  width: 80px;
  height: 80px;
  margin: 0 5px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.thumbnail-item.active {
  opacity: 1;
  border: 2px solid #fff;
}

.thumbnail-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .thumbnail-item {
    width: 60px;
    height: 60px;
  }

  .control-buttons button {
    padding: 6px 12px;
    font-size: 0.9rem;
  }

  .image-preview-bottom-container {
    padding: 5px 0;
  }
}
</style>