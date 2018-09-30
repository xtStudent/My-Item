import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/index.vue'
import HomeIndex from '@/views/home/index/index.vue'
import HomeLore from '@/views/home/lore/lore.vue'
import HomeProject from '@/views/home/project/project.vue'
import HomeAboutme from '@/views/home/aboutme/aboutme.vue'

import UserLogin from '@/views/user/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/home/index',
      children: [
        {
          path: '/home/index',
          name: 'index',
          component: HomeIndex
        },
        {
          path: '/home/lore',
          name: 'lore',
          component: HomeLore
        },
        {
          path: '/home/project',
          name: 'project',
          component: HomeProject
        },
        {
          path: '/home/aboutme',
          name: 'aboutme',
          component: HomeAboutme
        }
      ]
    },
    {
      path: '/user',
      name: 'login',
      component: UserLogin
    }
  ]
})
