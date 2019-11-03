
内容绑定 -> {{ message }}
属性绑定 -> v-bind:attr="message"

DOM元素显示和隐藏 -> v-if="true/false"
               -> v-show="true/false"

循环某个队列 -> v-for="item in items"

事件绑定 -> v-on="eventCallback"
...
methods: {
    eventCallback() {}
}