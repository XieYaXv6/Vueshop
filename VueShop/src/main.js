// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'  //不需要引入 只需要加载mockserver模块即可
import './filters'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'

// 注册全局组件标签
Vue.component(Button.name, Button)  // <mt-button>

Vue.use(VueLazyload, {
  loading
  })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
