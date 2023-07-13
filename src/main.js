import { createApp } from 'vue'
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router/index';
import store from './store/index';
import './assets/style.css';

const app = createApp(App); 
app.use(store);
app.use(router);
app.mount('#app');


