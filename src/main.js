// 入口JS
import Vue from 'vue'
import App from './App'
import router from './router'
import tagCloud from 'v-tag-cloud'
import VueSweetalert2 from './plugins/vue-sweetalert2'
import store from './store'


Vue.use(tagCloud)
Vue.use(VueSweetalert2)

/* eslint-disable no-new */
let vue = new Vue({
  el: '#app',
  render: h => h(App),
  router, // $router $route
  store
})

router.beforeEach((to, from, next) => {
  console.log(vue.$store.state.personalInfo)
  console.log(123)
  if (to.matched.some(record => record.meta.auth)) { // 判断该路由是否需要登录权限
    if (localStorage.getItem('token')) { // 判断当前的token是否存在
      next();
    }
    else {
      // localStorage.setItem('data', 0)
      // console.log(this.$store.personalInfo)
      vue.$swal({
        title: '温馨提示',
        type: 'warning',
        text: '您没有登录,请立即登录',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then((res) => {
        if (res.value) {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
        }
      });
    }
  }
  else {
    next();
  }
});
