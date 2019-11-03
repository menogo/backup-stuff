import $ from 'jquery'
import { Broadcast as APP, SHOW_LOADING, HIDE_LOADING } from './broadcastEvents'

export default () => {

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
    APP.$emit(HIDE_LOADING)
  }

  $.ajaxSettings.complete = (event) => {
    // alert('complete')
    // alert('hide loading...')
    APP.$emit(HIDE_LOADING)
  }
}