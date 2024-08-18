import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import type { Plugin } from 'vuex'

const app = createApp(App)

app.use(router).use(Vuex as any).use(store)



app.mount('#app')
