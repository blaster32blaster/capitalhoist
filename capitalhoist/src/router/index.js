import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Inspection from '@/components/Inspection'
import Repair from '@/components/Repair'
import Training from '@/components/Training'
import Associates from '@/components/Associates'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/inspection',
      name: 'Inspection',
      component: Inspection
    },
    {
      path: '/repair',
      name: 'Repair',
      component: Repair
    },
    {
      path: '/training',
      name: 'Training',
      component: Training
    },
    {
      path: '/associates',
      name: 'Associates',
      component: Associates
    }
  ]
})
