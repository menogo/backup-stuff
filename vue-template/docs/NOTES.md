[vue-webpack template](https://vuejs-templates.github.io/webpack/)

### Stylesheets
**All stylesheets using `stylus` Pre-Processors**
使用前需要安装依赖包
```
npm install stylus stylus-loader --save-dev
```

#### 第三方引入的CSS，例如：bootstrap.css
这类的CSS丢进`/static`目录里面，然后在`index.html`里用`<style>`引用。
可以省掉没必要的build time，和更好的browser caching

### 整站使用的CSS（Standalone CSS），例如 base.css
这类的CSS丢进`/src/assets/css/`目录里，然后在`App.vue`里用`<style>`引用。
例如：
```html
<style src="./assets/stylus/base.styl" lang="stylus"></style>
```

### Single Page Component里使用的CSS
在该component里的`<style>`加上`lang="stylus"`attribute。
```html
<style scoped lang="stylus">
body
  font-size: 18px

h1,
h2
  padding: 0
  margin: 0
</style>
```

组件（`*.vue`）里的
- `<template></template>`通过`vue-html-loader`来解析(parsed)
- `<style></style>`通过`css-loader`来解析(parsed)
- 像`logo.png`这类非JS文件，需要通过`url-loader`，`file-loader`来处理(process)
**Webpack 会把这些当做`Module`**

### `/static` VS. `/src/assets`
`/static` -- not processed by Webpack
You must reference these files using absolute paths

`/src/assets` -- processed by Webpack


### 在`Vue instance properties`不能使用`Arrow Function`

```js
var vm = new Vue({
    data: {
        message: 'hard code'
    },
    created: () => {
        console.log(this) // 'this' point to window object
    },

    mounted: function() {
        console.log(this) // 'this' point to Vue instance(vm)
    }
})

```

### lifecycle
```
        new Vue({})
    ->  beforeCreated -- 开始创建实例之前
        把data里面的property变成getter、setter(Observer Data)
        (通过 Object.defineProperty() 把data object里的所有properties转换成getters/setters, getters/setters对用户是不可见的)
        初始化事件(init events)
    ->  created -- 实例创建完了
        解析模板：
            - 是否有 'el' option? 
                -Y- 是否有 'template' option? -Y- 把template编译进render function
                                             -N- 
                -N- 当执行`vm.$mount(el)`的时候，询问是否有 'template' option - Y
```


### `beforeDestroy`, `destroy` 需要手动执行 `vm.$destroy()` 才会触发