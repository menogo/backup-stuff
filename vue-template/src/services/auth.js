// 处理登录、登出状态

// 用户请求登录，如果成功在本地缓存存放一个字段来标识已登录
// 情况1：当用户已登录，再访问非登录页面回到需要登录的页面（去本地标识登录字段）
// 情况2：用户长时间不操作（session timeout）,进入页面时候会请求后端API，返回不成功时候
// 清空本地登录状态，redirect to login page
import { fetch, post } from '../utils/request'
import encrypt from '../utils/encrypt'
import storage from '../utils/storage'

console.log(storage)

const isLoggedIn = () => JSON.parse(window.localStorage.getItem('authorization'))

const clearAuthorize = () => {
  storage.localStorage.remove('authorization')
}

// 请求 sessionID, 当浏览器禁用 cookie 的时候用到
const _fetchJSessionId = () => {
  fetch('/api/portal/register/jSessoinId').then((res) => {
    console.log(res)
  })
}

// 请求服务端 timestamp, SM2 加密时候需要
const _getTime = () => {
  fetch('/api/portal/getTime').then((res) => {
    storage.localStorage.set('timestamp', res.object)
  })
}

const doLogin = (body) => {
  _fetchJSessionId()

  _getTime()

  // encrypt password RSA, SM2
  body.password = encrypt.rsa(body.password)

  post('/api/portal/toaLogin', {
    loading: true,
    data: body
  }).then((res) => {
    console.log(res)
  })
}


const Auth = {
  isLoggedIn,
  clearAuthorize,
  doLogin
}

module.exports = Auth
