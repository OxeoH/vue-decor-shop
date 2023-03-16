import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/pages/MainPage'
import AboutPage from '@/pages/AboutPage'
import CatalogPage from '@/pages/CatalogPage'
import CartPage from '@/pages/CartPage'


const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogPage
  },
  {
    path: '/',
    name: 'about',
    component: AboutPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
