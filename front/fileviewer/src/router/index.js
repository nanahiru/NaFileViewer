import { createWebHistory, createRouter } from 'vue-router'
import { cancelAllRequests } from '@/utils/request.js'

const routes = [
  { path: '/', component:  () => import("@/components/HelloWorld.vue") },
  { path: '/login', component:  () => import("@/views/Login.vue") },
  {
    path: '/files/:paths*',
    name: "FileList",
    component:  () => import("@/views/FileList.vue")
  },
  {
    path: '/player/:paths*',
    name: "Player",
    component:  () => import("@/views/Player.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


router.beforeEach((to, from, next) => {
  cancelAllRequests()
  next()
})

export default router