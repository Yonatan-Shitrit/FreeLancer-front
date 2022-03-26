import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/styles.scss'
import VueAgile from 'vue-agile'


const app = createApp(App)
app.use(VueAgile)
app.use(router)
app.use(store)
app.mount('#app')
