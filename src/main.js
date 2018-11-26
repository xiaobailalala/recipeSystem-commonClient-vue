// 入口JS
import Vue from 'vue'
import App from './App'
import router from './router'
import tagCloud from 'v-tag-cloud'
import VueSweetalert2 from './plugins/vue-sweetalert2'

Vue.use(tagCloud)
Vue.use(VueSweetalert2)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router // $router $route
})
