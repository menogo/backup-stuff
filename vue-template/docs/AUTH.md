访问所有需要认证的URL都调用 auth.loggeedIn()
如果已登录直接进入
如果未登录跳转登录页面，回跳地址到当前页面
例如：
```js
    const router = new VueRouter({
      routes: [
        {
          path: '/foo',
          component: Foo,
          children: [
            {
              path: 'bar',
              component: Bar,
              // a meta field
              meta: { requiresAuth: true }
            }
          ]
        }
      ]
    })
    

    router.beforeEach((to, from, next) => {
      if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!auth.loggedIn()) {
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        } else {
          next()
        }
      } else {
        next() // 确保一定要调用 next()
      }
    })

```

### cookies based vs tokens based
cookies（前后端都得同时保持一个会话状态）
 - 后端setcookies()
 - 后续的请求会浏览器会自动把cookes带上
 - 登出的时候前后端都得清空这个'回话'（clear cookies）

tokens（只需要放在前端，传给后端再decode）
 - 后端返回之后，前端存在本地（localStorage, sessionStorage, cookies）
 - 可以通过设置 Authorization header -> `Bearer {JWT}`，后续的请求中会自动带上
 - 可以通过放在 `POST` 请求的body里传给后端
 - 可以通过query string的形式传给后端
 - 登出的时候只需要在前端清空 token
  
 - JWTs size(当你加入其它信息的时候，size会增大，尽管最小的size都会比cookie大)，注意每个请求都需要带上token
 - 前端把token存在哪里？通常情况下会存放在浏览器的localStorage，很多时候都管用的！但是localStorage会受到domain的限制，它不像cookies，subdomain可以访问domain的cookies，localStorage，subdomain不能访问domain的localStorage，对于其它的domain，cookies, localStorage都访问不了。
 - 所以，你就会想把token放到cookies里，但是cookies最大值只能放4kb，当你token带有更多claims的时候就无法满足，当然你可以把token放到sessionStorage里，但是用户关闭浏览器的时候就没有了！（其它的动作和localStorage一样）

另一个考虑的因素是 XSS and XSRF Protection
- Cross Site Scripting，你需要对用户输入信息做处理！很多framework都会带上这种功能，或者使用caja插件
- Cross Site Request Forgery，如果你使用JWTs并且把它放在localStorage的时候可以不用担心，但是如果你把token放在cookies的时候就需要做处理！（理解XSRF，自行google）
- 所以很多时候，建议你把token放到localStorage里面

### Tokens Are Signed, Not Encrypted
token包括三部分 `header.payload.signature`
**只做sign签名，但没有做加密，所以不可以把敏感信息放在JTW**

例如：
```js
{
  "sub": "1234567890",
  "name": "Ado Kukic",
  "admin": true
}
```
我们选择 `HMACSHA256 algorithm` 来做签名，得到：
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbyBLdWtpYyIsImFkbWluIjp0cnVlLCJpYXQiOjE0NjQyOTc4ODV9.Y47kJvnHzU9qeJIN48_bVna6O0EDFiMiQ9LpNVDFymM
```
你把结果拿到像jwt.io来做decode是可以解出来的！

如果你想把敏感信息放在token，可以使用JWE(JSON Web Encryption)

https://auth0.com/blog/cookies-vs-tokens-definitive-guide/


