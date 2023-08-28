import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import store from './store';
import Home from "./components/Home.vue";
import Page from "./components/Page.vue";
import App from './App.vue';
import './index.css';


const routes = [
    { path: '/', component: Home },
    { path: '/:station', component: Page }
];

const router = createRouter({
    history: createWebHistory('/MRTPFF/'),
    routes: routes,
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
