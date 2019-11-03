// Broadcast Events, Custom Events, Global Events
import Vue from 'vue'

export const Bus = new Vue({})

export const SHOW_LOADING = 'spinnerShow'
export const HIDE_LOADING = 'spinnerHide'
export const AUTHENTICATION = true
export const LOGOUT = 'logout'
export const REQUEST_ERROR = 'requestError'
export const TOAST = 'toast'
export const INDICATOR_SHOW = 'indicatorShow'
export const INDICATOR_HIDE = 'indicatorHide'
