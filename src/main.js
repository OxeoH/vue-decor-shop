import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const shopApp = createApp(App)

shopApp.use(store).use(router).mount('#app')
