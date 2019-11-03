import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import loginModuleRoutes from './loginModuleRoutes'

const routes = [
  ...loginModuleRoutes

  // default
  // { path: '*', redirect: '/404' }
]

const router = new Router({
  routes
})
export default router