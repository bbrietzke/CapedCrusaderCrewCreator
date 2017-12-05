import Vue from 'vue'
import Router from 'vue-router'
import BuildCrew from '@/components/BuildCrew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: BuildCrew
    },
    {
      path: '/build',
      name: 'buildCrew',
      component: BuildCrew
    }
  ]
})
