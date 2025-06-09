<template>
  <nav aria-label="breadcrumb" class="breadcrumb-nav">
    <ol class="breadcrumb-list">
      <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">
        <template v-if="item.to">
          <router-link :to="item.to" class="breadcrumb-link">
            {{ item.text }}
          </router-link>
        </template>
        <template v-else>
          <span class="breadcrumb-text">{{ item.text }}</span>
        </template>
        <span v-if="index < items.length - 1" class="breadcrumb-separator">
          {{ separator }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  // 自定义分隔符，默认为 >
  separator: {
    type: String,
    default: '>'
  },
  // 可选的静态面包屑项
  staticItems: {
    type: Array,
    default: () => []
  }
})

const route = useRoute()

// 从路由生成面包屑项
const routeItems = computed(() => {
  return route.matched
      .filter(item => item.meta && item.meta.breadcrumb)
      .map(item => ({
        text: item.meta.breadcrumb,
        to: item.path
      }))
})

// 合并静态和动态路由项
const items = computed(() => {
  return [...props.staticItems, ...routeItems.value]
})
</script>

<style scoped>
.breadcrumb-nav {
  padding: 0.75rem 0;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-link {
  color: #3498db;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: #2980b9;
  text-decoration: underline;
}

.breadcrumb-text {
  color: #7f8c8d;
}

.breadcrumb-separator {
  margin: 0 0.5rem;
  color: #95a5a6;
}
</style>