import Vue from 'vue'
import Router from 'vue-router'
import Created from '../pages/Created'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
