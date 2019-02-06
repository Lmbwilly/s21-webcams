import Vue from 'vue'
import Router from 'vue-router'
import Webcam from './views/Webcam'
import About from './views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Webcam',
      component: Webcam
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
