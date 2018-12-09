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
      path: '/notecreated',
      component: NoteCreated,
      meta: {
        showFooter: true
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
        showFooter: true
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
        showFooter: true
      }
    },
    {
      path: '/recipes/recipeDetail/subProduction',
      component: SubProduction,
      meta: {
        showFooter: true
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
      path: '/foodwrite',
      component: FoodWrite,
      meta: {
        showFooter: true
      }
    }
  ]
})
