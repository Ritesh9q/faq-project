import { createApp } from 'vue'
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/style.css'; 
import store from './store/index'; 


const app = createApp(App); 
app.use(store);
app.mount('#app');


