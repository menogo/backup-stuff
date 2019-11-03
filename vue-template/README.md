# vue-template

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


AJAX 
```js
Api.fetchProducts().then(handleSuccess, handleError)
```

Auth
- jwt
- session

Router protection

Bus
- 定义一个custom event，当 触发某些动作（需要登录），访问某些URL（需要登录）的时候来$emit() 这个事件！
- 触发某些动作（需要登录）-> 在callback里面$emit
- 访问某些路由的时候（根据meta: {requiresAuth: true}）进入路由之前$emit
- JTWs - 从localStorage里面取
- cookies - 从cookies里面取


### 
```
    npm run dev -> development mode accessing mock data
    npm run testing -> development mode accessing testing API data
    npm run production -> development mode accessing production API data (not yet)

    npm run build -> build for production
```

### 路由切换体验
所有路由跳转前先获取data再做跳转
在component里使用 beforeRouteEnter(to, from, next)
获取data过程中加indicator(loading)
注意case: 直通某个页面的时候（不存在A->B)的情况怎么办?


### services
存在各个模块的一些共同功能，比如购买基金签约、风险测评、产品购买动作、
