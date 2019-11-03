<template>
  <div>
    <mt-header fixed title="Login View" class="header"></mt-header>
    <mt-field label="用户" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入登录密码" v-model="password" type="password"></mt-field>
    <mt-field label="验证码" class="code">
      <img src="../../assets/images/code.jpg" height="30px" width="100px">
    </mt-field>
    <mt-button type="primary" class="btn-block" @click="login">Login</mt-button>

    <pre>
      {{ $data | json }}
    </pre>
  </div>
</template>
<script>
  // import { Bus, SHOW_LOADING, HIDE_LOADING } from '../../utils/busEvents'
  import Auth from '../../services/auth'

  export default {
    data() {
      return {
        username: null,
        password: null
      }
    },

    methods: {
      login() {
        // `this` points to this Single Page Component
        const vm = this

        // encrypt password
        Auth.doLogin(vm.$data)

        // this.fetch()
        // App.fetch()
        // App.fetch('/api/portal/login/showCheckCode', {
        //   loading: true
        // }).then((res) => {
        //   console.log(res)
        // })
      }
    },

    beforeRouteEnter(to, from, next) {
      console.log(to)
      console.log(from)
      next()
    }
  }
</script>
<style scoped>
  header h1 {
    margin-top:
  }
  .btn-block {
    display: block;
  }
  .mint-header-title {
    margin-top: 15px;
  }
  .code img {
    margin-top: 10px;
  }
</style>