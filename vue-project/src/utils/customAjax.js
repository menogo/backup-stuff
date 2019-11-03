// extend zepto $.ajaxSettings object
// import $ from 'zepto'

import { Bus as APP, SHOW_LOADING, HIDE_LOADING } from './busEvents'

export default () =>

  $.extend($.ajaxSettings, {
    cache: true,
    timeout: 20000,
    dataType: 'json',
    type: 'POST',
    xhrFields: {
      withCredentials: false
    },
    crossDomain: true,
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  })

  $.ajaxSettings.beforeSend = (xhr, settings) => {
    // alert('start fetching...')
  }

  $.ajaxSettings.error = () => {
    Bus.$emit(HIDE_LOADING)
  }

  $.ajaxSettings.complete = (event) => {
    Bus.$emit(HIDE_LOADING)
  }
}