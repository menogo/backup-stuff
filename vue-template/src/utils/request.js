import $ from 'jquery'
import { Bus, SHOW_LOADING } from './busEvents'
import api from '../config/urls'

const env = window.location.search.split('=')[1]

export const fetch = (url, options = {}) => {
  options.type = 'GET'

  if (options.loading) {
    Bus.$emit(SHOW_LOADING)
  }

  // url = api + url.slice(5)
  if (env !== 'dev') {
    url = api + url.slice(5)
  }

  // if (process.env.NODE_ENV === 'development') {
  //   console.log('dd')
  // } else {
  //   url = api + url.slice(5)
  // }

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

export const post = (url, options = {}) => {
  if (options.loading) {
    Bus.$emit(SHOW_LOADING)
  }

  // if (process.env.NODE_ENV !== 'development') {
  //   url = api + url.slice(5)
  // }

  if (env !== 'dev') {
    url = api + url.slice(5)
  }

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
