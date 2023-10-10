import { createRouter, createWebHistory } from 'vue-router'
import {ROUTERS_PATHS} from '../constants'
import Home from '../pages/Home.vue'
import Cocktail from '../pages/Cocktail.vue'
import CocktailRandom from '../pages/CocktailRandom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTERS_PATHS.HOME,
      name:  ROUTERS_PATHS.HOME,
      component: Home
    },
    {
      path: ROUTERS_PATHS.COCKTAIL,
      name: ROUTERS_PATHS.COCKTAIL,
      component: Cocktail
    },
    {
      path: ROUTERS_PATHS.COCKTAIL_RANDOM,
      name: ROUTERS_PATHS.COCKTAIL_RANDOM,
      component: CocktailRandom
    },
  ]
})

export default router
