import { fetch, post } from '../utils/request'

exports.install = (Vue) => {
  Vue.prototype.fetch = fetch
  Vue.prototype.save = post
}
