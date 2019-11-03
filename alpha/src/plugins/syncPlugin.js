import { fetch, save } from '../utils/fetch'

exports.install = Vue => {
  Vue.prototype.fetch = fetch
  Vue.prototype.post = save
}