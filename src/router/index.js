import Vue from 'vue'
import Router from 'vue-router'

import NoteCreated from '../pages/NoteCreated/NoteCreated'
import Food from '../pages/Food/Food'
import HomePage from '../pages/HomePage/HomePage'
import Login from '../pages/Login/Login'
import Note from '../pages/Note/Note'
import Recipes from '../pages/Recipes/Recipes'
import Register from '../pages/Register/Register'
import Selected from '../pages/Selected/Selected'
import Shop from '../pages/Shop/Shop'
import FoodWrite from '../pages/FoodWrite/FoodWrite'
import RecipeDetail from '../pages/RecipeDetail/RecipeDetail'
import SubProduction from '../pages/RecipeDetail/subProduction'
import NodeDetail from '../pages/NodeDetail/NodeDetail'
import ShopDetail from '../pages/ShopDetail/ShopDetail'
import Personal from '../pages/Personal/Personal'
import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      component: HomePage,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      auth: true,
    },
    {
      path: '/notecreated',
      component: NoteCreated,
      meta: {
        showFooter: true,
        auth: true
      }
    },
    {
      path: '/food',
      component: Food,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/note',
      component: Note,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/note/nodeDetail',
      component: NodeDetail,
      meta: {
        showFooter: true,
        auth: true
      }
    },
    {
      path: '/recipes',
      component: Recipes,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/recipes/recipeDetail',
      component: RecipeDetail,
      meta: {
        showFooter: true,
        auth: true
      }
    },
    {
      path: '/recipes/recipeDetail/subProduction',
      component: SubProduction,
      meta: {
        showFooter: true,
        auth: true
      }
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/selected',
      component: Selected,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shop',
      component: Shop,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shop/shopDetail',
      component: ShopDetail,
      meta: {
        showFooter: true,
        auth: true
      }
    },
    {
      path: '/foodwrite',
      component: FoodWrite,
      meta: {
        showFooter: true,
        auth: true
      }
    }
  ]
})


router.beforeEach((to,from,next) => {
  if(to.matched.some( m => m.meta.auth)){
    // 对路由进行验证
    console.log(store.state.isLogin)
    if(store.state.isLogin=='100') { // 已经登陆
      next()     // 正常跳转到你设置好的页面
    }else{
      // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next({path:'/login',query:{ Rurl: to.fullPath} })
    }
  }else{
    next()
  }
})
