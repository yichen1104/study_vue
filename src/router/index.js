import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import study1 from '../components/study1.vue'
import study1_1  from '../components/study1-1.vue'
import study2 from '../components/study2.vue'
import study2_2 from '../components/study2-1.vue'
import study3 from '../components/study3.vue'
Vue.use(VueRouter)

export default new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes:[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/study1',
    name: 'study1',
    component: study1
  },{
    path: '/study1-1',
    name: 'study1-1',
    component: study1_1
  },
  {
    path: '/study2',
    name: 'study2',
    component: study2
  },
  {
    path: '/study2-1',
    name: 'study2-1',
    component: study2_2
  },
  {
    path: '/study3',
    name: 'study3',
    component: study3
  }
]
})

