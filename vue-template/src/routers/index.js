import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../services/auth'

Vue.use(VueRouter)

// 定义'路由组件'（移到单独文件，再引进来）
// 引入路由组件(router component)
// const Foo = {
//   template: '<div>foo</div>',
// }

// don't use lazy load
// const FooView = require('../views/FooView.vue')

// lazy loading
const FooView = r => require.ensure([], () => r(require('../views/FooView.vue')), 'group-foo')
const UserProfileView = r => require.ensure([], () => r(require('../components/UserProfile.vue')), 'group-user')
const FetchDataView = r => require.ensure([], () => r(require('../views/fetchData.vue')), 'group-user')
const e404View = r => require.ensure([], () => r(require('../components/commons/404.vue')), 'group-common')
const HelloView = r => require.ensure([], () => r(require('../components/Hello.vue')), 'group-common')
const loginView = r => require.ensure([], () => r(require('../views/login/loginView.vue')), 'group-common')
const dashboardView = r => require.ensure([], () => r(require('../views/acount/dashboardView.vue')), 'group-common')

// 定义'路由表'
const routes = [
  { path: '/', name: 'home', component: HelloView },
  { path: '/login', name: 'login', component: loginView },
  { path: '/dashboard', name: 'dashboard', component: dashboardView, meta: { requiresAuth: true } },
  { path: '/foo', name: 'foo', component: FooView, meta: { requiresAuth: true } },
  { path: '/user/:username', component: UserProfileView },
  { path: '/fetch', component: FetchDataView },
  { path: '/404', name: '404', component: e404View },
  { path: '*', redirect: { name: '404' } }
]

// 创建路由实例，并且传入路由表
const router = new VueRouter({
  routes
})

// Handle auth
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

console.log(router.beforeRouteEnter)

export default router
