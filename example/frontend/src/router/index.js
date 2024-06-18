import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/board',
    name: 'board',
    component: () => import(/* webpackChunkName: "board" */ '../views/BoardView.vue')
  },
  {
    path: '/boardInfo',
    name: 'boardInfo',
    component: () => import(/* webpackChunkName: "boardInfo" */ '../views/BoardInfo.vue')
  },
  {
    path: '/boardForm',
    name: 'boardForm',
    component: () => import(/* webpackChunkName: "boardForm" */ '../views/BoardForm.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
