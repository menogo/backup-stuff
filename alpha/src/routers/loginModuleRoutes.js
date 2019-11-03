const TestView = resolve => require(['../views/test/TestView.vue'], resolve)
const routes = [
  { path: '/test', name: 'test', component: TestView }
]
export default routes