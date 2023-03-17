import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from "@/components/UI/index"

const shopApp = createApp(App)

shopApp.use(store).use(router)

components.forEach(item => shopApp.component(item.name, item))



shopApp.mount('#app')
