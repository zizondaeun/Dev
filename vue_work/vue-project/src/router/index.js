import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import NestedView from '../views/NestedComponent.vue'
import EmpFormView from '../views/EmpForm.vue'
import EmpUpdateFormView from '../views/EmpUpdateForm.vue'

const routes = [  //routes배열에 등록된 라우트들
  {
    path: '/empUpdateForm',
    component: EmpUpdateFormView
  },
  {
    path: '/empForm',
    component: EmpFormView
  },
  {
    path: '/nested',
    component: NestedView
  },
  {
    path: '/emp',
    component: () => import(/* webpackChunkName: "emp", webpackPrefetch: true */'../views/EmpView.vue')
  },
  {
    path: '/user',
    component: UserView
  },
  {
    path: '/', //브라우저에 접속하는 url 주소 정의
    name: 'home',
    component: HomeView //지정된 path로 들어왔을때 보여줄 vue컴포넌트, 앞으로 구현할 vue파일을 연결하고 해당파일을 실행시킴
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') //필요한것만 켜는거(vue.config.js)
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
