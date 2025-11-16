import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// Импортируем компоненты страниц
import Home from './components/Home.vue';
import Items from './components/Items.vue';
import Weapons from './components/Weapons.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/items', component: Items },
  { path: '/weapons', component: Weapons }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

createApp(App).use(router).mount('#app')