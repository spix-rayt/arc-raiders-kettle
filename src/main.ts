import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import { createHead } from '@unhead/vue/client'

import About from './components/About.vue';
import Items from './components/Items.vue';
import Weapons from './components/Weapons.vue';
import EquipmentConstructor from './components/EquipmentConstructor.vue'
import StashCraftSpaceValue from './components/VueCraftSpaceSavingScore.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/items',
    name: 'items',
    component: Items
  },
  {
    path: '/weapons',
    name: 'weapons',
    component: Weapons
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: EquipmentConstructor
  },
  {
    path: '/craft-space-saving-score',
    name: 'craft-space-saving-score',
    component: StashCraftSpaceValue
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const head = createHead()
const app = createApp(App)

app.use(head)
app.use(router)
app.mount('#app')