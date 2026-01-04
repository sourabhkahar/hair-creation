import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import dayjs from 'dayjs';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faThumbsUp, faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'swiper/css';
import 'swiper/css/bundle';
// import 'swiper/css/pagination';


/* add icons to the library */
library.add(faUserSecret, faThumbsUp, faFacebook, faTwitter, faInstagram, faChevronDown, faChevronLeft, faChevronRight )
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.config.globalProperties.$dayjs = dayjs
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(Vue3Toastify, {
  autoClose: 3000,
});
app.mount('#app')
