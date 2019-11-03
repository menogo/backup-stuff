<template>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure praesentium placeat reiciendis dolores quibusdam eligendi, vero perferendis, perspiciatis iste mollitia aliquid sapiente, ducimus amet qui, saepe tempore ex vitae ipsum!</p>

    <p>{{ message }}</p>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        message: 'data from server'
      }
    }
  }
</script>