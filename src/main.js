import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';
import store from './store';
const app = createApp(App);
app.use(router).use(Vuex).use(store);
app.mount('#app');
