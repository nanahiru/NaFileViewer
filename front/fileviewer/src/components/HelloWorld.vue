<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 style="text-align: center"><router-link to="/files">打开文件目录</router-link></h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
