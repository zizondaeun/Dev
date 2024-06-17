import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/board',
    name: 'board',
    component: () => import(/* webpackChunkName: "board" */ '../views/BoardView.vue')
  },
  {
    path: '/boardForm',
    name: 'boardForm',
    component: () => import(/* webpackChunkName: "boardForm" */ '../views/BoardForm.vue')
  },
  {
    path: '/boardInfo',
    name: 'boardInfo',
    component: () => import(/* webpackChunkName: "boardInfo" */ '../views/BoardInfo.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
