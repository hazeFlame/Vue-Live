import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Bilibili from '@/components/Livepage/bilibili'
import Douyu from '@/components/Livepage/douyu'
import Xiongmao from '@/components/Livepage/xiongmao'
import Zhanqi from '@/components/Livepage/zhanqi'
import Longzhu from '@/components/Livepage/longzhu'
import Huya from '@/components/Livepage/huya'
import Quanmin from '@/components/Livepage/quanmin'
import UserPage from '@/components/UserPage/UserPage'
import Website from '@/components/Website/website'
import Channel from '@/components/Channel/channel'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'bilibili',
          name:'bilibili',
          component:Bilibili,
        },
        {
          path:'douyu',
          name:'douyu',
          component:Douyu,
        },
        {
          path:'panda',
          name:'panda',
          component:Xiongmao,
        },
        {
          path:'zhanqi',
          name:'zhanqi',
          component:Zhanqi,
        },
        {
          path:'longzhu',
          name:'longzhu',
          component:Longzhu,
        },
        {
          path:'huya',
          name:'huya',
          component:Huya,
        },
        {
          path:'quanmin',
          name:'quanmin',
          component:Quanmin,
        },
        {
          path:'/:name/:id',
          name:'user',
          component: UserPage
        },
        {
          path:'/website/',
          name:'website',
          component: Website
        },
        {
          path:'/website/channel/:id',
          name:'channel',
          component: Channel
        }
      ]
    },
  ]
})
