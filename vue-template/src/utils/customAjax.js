import $ from 'jquery'
import { Bus, HIDE_LOADING, REQUEST_ERROR } from './busEvents'
// import auth from '../services/auth'

export default () => {
  $.extend($.ajaxSettings, {
    cache: true,
    timeout: 20000,
    dataType: 'json',
    type: 'POST',
    xhrFields: { withCredentials: false },
    crossDomain: true,
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    // contentType: 'application/json; charset=UTF-8'
  })

  $.ajaxSettings.beforeSend = () => {
    // 某些请求需要附加 tokens

    // xhr, settings
    // alert('start fetching...')
    // console.log(settings)
  }

  $.ajaxSettings.error = () => {
    Bus.$emit(HIDE_LOADING)
  }

  $.ajaxSettings.complete = (xhr, statusText) => {
    const status = xhr.status
    const res = xhr.responseJSON
    const code = res.code
    // const code = ''
    let errorMsg = ''

    // code = 405
    if (status === 405) errorMsg = '接口请求方法使用有误'
    if (status === 200 && code === '400') errorMsg = res.message
    if (status === 200 && code === '402') errorMsg = '用户已在别处重新登录，强制下线！'
    if (status === 200 && code === '002') errorMsg = '参数错误！'
    if (statusText === 'timeout') errorMsg = '请求超时，请重试'
    if (statusText === 'parseerror') errorMsg = '网络连接失败，请坚持你的网络设置'

    try {
      if (errorMsg) {
        Bus.$emit(REQUEST_ERROR, errorMsg)
      }
    } catch (e) {
      console.log(e)
    }

    // if request no success or responseJSON.code equal to [400, 100, 402]
    // clear client side authorization, redirect to login page
    // || [400, 100, 402].indexOf(+xhr.responseJSON.code) !== -1

    // handle session timeout
    // if (statusText === 'success' || [400, 100, 402].indexOf(code) !== -1) {
      // let msg = '登录超时，请重新登录'
      // if (+res.code === 402) msg = '用户已在别处重新登录，强制下线！'

      // 弹窗提示，清除前端登录态
      // not impelement yet
      // console.log(errorMsg)

    //   auth.clearAuthorize()
    //   App.$router.push('login')
    // }

    // handle response timeout => statusText = 'timeout'
    // handle response parseerror => statusText = 'parseerror'
    // handle response offline => statusText = 'offline'
    // console.log('-------')
    // console.log(xhr)
    // console.log(statusText)
    setTimeout(() => {
      Bus.$emit(HIDE_LOADING)
    }, 2000)
  }
}
