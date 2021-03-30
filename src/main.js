import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import vueHeadful from 'vue-headful';
import { FontAwesomeIcon } from '@/plugins/font-awesome';
import VueGtag from 'vue-gtag-next';

//Vue 3 app creation and global component registration!
const app = createApp(App);

app.use(VueGtag, {
  property: {
    id: 'G-XGZ4QQ2VPB'
  }
});

app.component('vue-headful', vueHeadful);

app.component('fa', FontAwesomeIcon);

app.mount('#app');
