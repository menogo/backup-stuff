<template>
  <div class="header">
    <mt-header title="固定在顶部"></mt-header>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Header } from 'mint-ui'

  Vue.component(Header.name, Header)

  export default {
    name: 'app-header',
    data() {
      return {
        title: 'Bootstrap'
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>