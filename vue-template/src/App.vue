<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import { MessageBox, Toast, Indicator } from 'mint-ui'
import spinner from './components/commons/FadeLoader'
import {
  Bus,
  SHOW_LOADING,
  HIDE_LOADING,
  REQUEST_ERROR,
  TOAST,
  INDICATOR_SHOW,
  INDICATOR_HIDE
} from './utils/busEvents'

export default {
  data() {
    return {
      requestError: false
    }
  },

  components: {
    spinner
  },

  created() {
    // Register some global events
    Bus.$on(SHOW_LOADING, () => { Indicator.open('加载中...') })
    Bus.$on(HIDE_LOADING, () => { Indicator.close() })
    Bus.$on(REQUEST_ERROR, (errMsg) => { MessageBox.alert(errMsg) })
    Bus.$on(TOAST, (msg) => { Toast(msg) })
    Bus.$on(INDICATOR_SHOW, () => { Indicator.open('加载中...') })
    Bus.$on(INDICATOR_HIDE, () => { Indicator.close() })

    // setTimeout(() => {
    //   Bus.$emit(REQUEST_ERROR, 'fsfs')
    // }, 2000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
