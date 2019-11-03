import $ from 'jquery'
import { Broadcast as APP, SHOW_LOADING, HIDE_LOADING } from './broadcastEvents'

export const fetch = (url, options = {}) => {
  options.type = 'GET'

  options.loading && APP.$emit(SHOW_LOADING)

  url = 'http://127.0.0.1:3000/' + url
  return new Promise((reslove, reject) => {
    $.ajax({
      url: url || '',
      type: options.type,
      data: options.data || {},
      success: res => reslove(res),
      error: err => reject(err)
    })
  }) // end Promise()
}

export const save = (url, options = {}) => {

  options.loading && APP.$emit(SHOW_LOADING)

  return new Promise((reslove, reject) => {
    $.ajax({
      url: url || '',
      data: options.data || {},
      success: res => reslove(res),
      error: err => reject(err)
    })
  }) // end Promise()
}