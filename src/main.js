import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueX from 'vuex';
import storeConfigs from './store';
import Antd from 'ant-design-vue';

import './assets/css/main.css';
import './assets/sass/main.scss';
import 'ant-design-vue/dist/antd.css';
import 'vue3-carousel/dist/carousel.css'

const app = createApp(App)

const store = new VueX.Store(storeConfigs)

app.use(router)
app.use(store)
app.use(Antd)

app.mount('#app')
