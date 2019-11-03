<template>
  <transition name="slide">
  <div class="post">
    <h2>Single Page Component</h2>
    <p>{{ name }}</p>
  </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
        post: null,
        error: null,
        name: ''
      }
    },

    beforeRouteEnter(to, from, next) {
      console.log(to)
      console.log(from)
      next()
    },

    created() {
      this.fetchData()
    },

    watch: {
      // 如果路由有变化，会再次执行该方法
      $route: 'fetchData'
    },

    methods: {
      fetchData() {
        this.loading = true

        App.fetch('/api/margins/qryMarginsCommercialList').then((res) => {
          console.log(res)
        })
        // You ajax call
        // this.fetch('/api/users/google').then((res) => {
        //   this.name = res.name
        //   console.log(res)
        // })
      }
    }
  }
</script>