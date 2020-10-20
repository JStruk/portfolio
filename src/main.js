import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import vueHeadful from 'vue-headful';

//Vue 3 app creation and global component registration!
const app = createApp(App);

app.component('vue-headful', vueHeadful);

app.mount('#app');
