import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import register from '@/components/register'
import login from '@/components/login'
import dashboard from '@/components/dashboard'
import addItem from '@/components/addItem'
import displayItem from '@/components/displayItem'
import useToken from '@/components/test'

// use router
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },

    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/addItem',
      name: 'addItem',
      component: addItem
    },
    {
      path: '/listItem',
      name: 'listItem',
      component: displayItem
    },
    {
      path: '/useToken',
      name: 'useToken',
      component: useToken
    }
  ]
})
