import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Images from '@/components/images'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/images',
      name: 'Images',
      component: Images
    }
  ]
})
