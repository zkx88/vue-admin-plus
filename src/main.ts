import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from '@/store'
import router from './router'
import registerGlobComp from '@/components'
import 'virtual:svg-icons-register'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

// 加载异步路由
import '@/router/initDynamicRouter'

const app = createApp(App)

app.use(pinia)
app.use(router)
// 全局组件
app.use(registerGlobComp)
app.use(ElementPlus)

app.mount('#app')
