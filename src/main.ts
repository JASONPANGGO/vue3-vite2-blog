import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'vite-plugin-vuedoc/style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
