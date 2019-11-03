<template>
  <div class="container">
    <span v-show="loadingShow" class="loading">LOADING...</span>
    <transition name="fade" mode="out-in">
      <router-view>
        <!-- every routes will render here -->
      </router-view>
    </transition>
  </div>
</template>

<script>
  import { Broadcast as App, SHOW_LOADING, HIDE_LOADING } from '../utils/broadcastEvents'
  export default {
    // `this` point current single page component, meaning App.vue

    // You should init all binding data!
    data() {
      return {
        loadingShow: false,
        message: true
      }
    },

    created() {
      // Register global event
      App.$on(SHOW_LOADING, () => {
        this.$set(this.$data, 'loadingShow', true)
      })
      App.$on(HIDE_LOADING, () => this.$set(this.$data, 'loadingShow', false))

      App.fetch('api/person').then(res => console.log(res))
    }
  }
</script>

<style>
  html, body {
    height: 100%;
  }
  .container {
    height: 100%;
    position: relative;
  }
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    font-size: 20px;
  }
</style>