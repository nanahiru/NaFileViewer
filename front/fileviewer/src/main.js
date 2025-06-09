import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from "@/store/index.js";
import loadingDirective from "@/directives/loading_icon.js"
const app = createApp(App)
app.use(router)
app.use(store)
app.directive("loading", loadingDirective)
app.mount('#app')
