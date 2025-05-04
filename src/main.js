import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Bioflor GME';
    next();
})

createApp(App).use(router).mount('#app')
