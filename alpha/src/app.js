/**
 * App entry point
 */
import Vue from 'vue'
import App from './views/App.vue'
import router from './routers'

// AJAX
import Ajax from './utils/customAjax'
Ajax()

import syncPlugin from './plugins/syncPlugin'
Vue.use(syncPlugin)

import sessionStorage from './plugins/sessionStoragePlugin'
Vue.use(sessionStorage)

import localStorage from './plugins/localStoragePlugin'
Vue.use(localStorage)

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// expose to global
window.App = app