import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VuetifyView from '../views/VuetifyView.vue'
import DataBinding from '../components/CompositionDataBinding.vue'
import CompositionMouse from '../views/CompositionMouse.vue'
//import CustomerView from '../views/CustomerView.vue' //import!!!!잊지말자...

const routes = [
  {
    path: '/compositionMouse',
    name: 'compositionMouse',
    component: CompositionMouse
  },
  {
    path: '/composition',
    name: 'composition',
    component: DataBinding
  },
  {
    path: '/vuetify',
    name: 'vuetify',
    component: () => import(/* webpackChunkName: "vuetify" */ '../views/VuetifyView.vue')
  },
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
    path: '/customer',
    name: 'customer',
    component: () => import(/* webpackChunkName: "customer" */ '../views/CustomerView.vue')
  }, //입장할때 임포트 함수써서 읽어주는걸 추천...아니면 다 불러오니까
  {
    path: '/customerForm',
    name: 'customerForm',
    component: () => import(/* webpackChunkName: "customerForm" */ '../views/CustomerForm.vue')
  },
  {
    path: '/customerInfo',
    name: 'customerInfo',
    component: () => import(/* webpackChunkName: "customerInfo" */ '../views/CustomerInfo.vue')
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
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginForm.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '../views/OrderView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
