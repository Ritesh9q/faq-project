import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';
import AddFaq from '../components/AddFaq.vue';
const routes = [
    {
        name:'home',
        component:Home,
        path:'/' 
    },
    {
        name:'add',
        component:AddFaq,
        path:'/add'
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
});

export default router; 