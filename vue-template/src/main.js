import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './App'
import router from './routers'
import ajax from './utils/customAjax'
import requestPlugin from './plugins/requestPlugin'

ajax()
Vue.use(requestPlugin)
Vue.use(MintUI)

// simulate JWTs
window.localStorage.setItem('authorization', true)

/* eslint-disable no-new */
const instance = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

window.App = instance
