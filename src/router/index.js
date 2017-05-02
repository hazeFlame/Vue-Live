import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Vuex from '@/components/vuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/a',
      name: 'vuex',
      component: Vuex
    }
  ]
})
