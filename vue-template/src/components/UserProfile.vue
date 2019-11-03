<template>
  <div>
    <p>{{ msg }}</p>
    <p>User Profile: {{ this.$route.params.username }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Lorem ipsum dolor sit amet.'
      }
    },

    created() {
      console.log('created')
    }
  }
</script>