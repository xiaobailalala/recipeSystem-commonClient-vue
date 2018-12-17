<template>
    <div>
      <header>
        <div class="return">
          <a href="javascript:;" data-toggle="tooltip" data-placement="right" title="点我返回首页">
            <img src="static/images/headerTop/logo.png" alt="logo" @click="goto('/homepage')">
          </a>
          <i class="iconfont icon-return" @click="goto('/homepage')"></i>
        </div>
      </header>
      <div class="login">
        <!--<img src="static/images/register/bg12.png" alt="logo">-->
        <!--<section>-->
          <img src="static/images/loginImg/loginImg.png" alt="logo">
          <div class="logContent">
            <h2>登录
              <span @click="goto('/register')">去注册></span>
            </h2>
            <form>
              <div class="form-group">
                <input type="text" v-model="loginPhone" class="form-control" placeholder="请输入手机号">
              </div>
              <div class="form-group">
                <input type="password" v-model="loginPwd" class="form-control" placeholder="请输入密码">
              </div>
              <a href="">忘记密码&nbsp;></a>
              <button type="button" class="btn btn-block" @click="login">登录</button>
            </form>
          </div>
        <!--</section>-->
      </div>

    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        loginPhone: '',
        loginPwd: ''
      }
    },
    methods: {
      goto (path) {
        this.$router.replace(path)
      },
      login () {
        let lis = this
        var params = new URLSearchParams()
        params.append('fAccount', lis.loginPhone)
        params.append('fPassword', lis.loginPwd)
        // 登录
        axios({
          method: 'POST',
          url: process.env.API_ROOT + '/vue/commonUser/userLogin',
          data: params,
          headers: {

          }
        })
          .then(res => {
            console.log(res)
            if(res.data.code === 501){
              this.$swal({
                text: '用户不存在，是否注册？',
                // type: 'warning',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消'
              }).then((res) => {
                if (res.value) {
                  this.$router.replace('/register')
                }
              })
            }
            else if(res.data.code === 502){
              this.$swal({
                type: 'error',
                showCancelButton: false,
                text: '密码错误!',
                confirmButtonText: '确定'
              })
            }
            else {
              localStorage.setItem('token', res.data.data)
              lis.$store.commit('changeLogin', '100')     //登录后改变登录状态 isLogin = 100;
              var params1 = new URLSearchParams()
              params1.append('token', localStorage.getItem('token'))
              // 获取个人信息
              axios({
                method: 'POST',
                url: process.env.API_ROOT + '/vue/commonUser/getUserInfoByToken',
                data: params1,
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              })
                .then(res => {
                  // 根据token获取个人信息
                  if (res.data.data.fcover) {
                    res.data.data.fcover = process.env.RES_PATH + res.data.data.fcover
                  }
                  else {
                    if (res.data.data.fsex == '男') {
                      res.data.data.fcover = 'static/images/headerTop/man.png'
                    }
                    else {
                      res.data.data.fcover = 'static/images/headerTop/woman.png'
                    }
                  }
                  // console.log('存进来时'+res.data.data.fusername)
                  lis.$store.commit('personalInfo', res.data.data)
                  let redirect = decodeURIComponent(lis.$route.query.redirect || '/')
                  if(redirect === '/register') {
                    this.$router.push('/homepage')
                  }
                  lis.$router.push({
                    path: redirect
                  })
                })
                .catch(err => {
                  console.log('出错1'+err)
                })
              // this.$router.push('home')
            }
          })
          .catch(err => {
            console.log('出错2'+err)
          })
      }
    }
  }
</script>

<style scoped>
  header {
    width: 100%;
    background-color: white;
  }
  .return {
    width: 920px;
    height: 94px;
    margin: 0px auto;
    background-color: white;
  }
  .return>a{
    display: inline-block;
    height: 100%;
  }
  .return>a>img {
    width: 250px;
  }
  .return>i {
    float: right;
    font-size: 45px;
    cursor: pointer;
    margin-right: 20px;
    margin-top: -25px;
    position: relative;
    top: 50%;
  }
  .login {
    width: 920px;
    margin: 30px auto 0px;
  }
  .login:before,
  .login:after {
    content: '';
    display: table;
    clear: both;
  }

  .login>img {
    /*width: 100%;*/
    height: 100%;
    /*position: absolute;*/
    /*float: left;*/
    /*top: 0px;*/
    /*z-index: -1;*/
    overflow: hidden;
    /*object-fit: cover;*/
    /*filter: blur(1px);*/
  }
  /*section {*/
    /*width: 900px;*/
    /*margin: 30px auto;*/
    /*min-height: 358px;*/
    /*position: relative;*/
    /*left: -30px;*/
  /*}*/
  /*section>img {*/
    /*position: absolute;*/
    /*bottom: 0px;*/
  /*}*/
  .logContent {
    width: 380px;
    height: 358px;
    background-color: white;
    float: right;
  }
  .logContent>h2 {
    font-size: 18px;
    line-height: 56px;
    padding: 0px 30px;
    border-bottom: 1px solid #eeeeed;
  }
  .logContent>h2>span {
    float: right;
    font-size: 16px;
    color: #EC7309;
    cursor: pointer;
  }
  .logContent>form {
    padding: 50px;
  }
  .form-group {
    margin-bottom: 30px;
  }
  .logContent>form>a {
    font-size: 15px;
    display: inline-block;
    margin-bottom: 30px;
    color: #000;
  }
  .btn {
    background-color: #EC7309;
    color: white;
    font-size: 16px;
  }
</style>
