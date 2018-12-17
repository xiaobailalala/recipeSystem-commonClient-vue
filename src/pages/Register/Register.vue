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
    <section class="login">
      <img src="static/images/register/bg.png" alt="logo">
      <div class="logContent">
        <h2>新用户注册
          <span @click="goto('/login')">已有账号，直接登录&nbsp;></span>
        </h2>
        <form action="">
          <div class="form-group">
            <input type="text" class="form-control" v-model="tel" placeholder="请输入手机号">
            <span v-show="telErr">请输入正确的手机号</span>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" v-model="verCode" placeholder="请输入验证码">
            <button type="button" class="btn getBtn" v-show="!show">{{count}}</button>
            <button type="button" class="btn getBtn" @click="countDown" v-show="show">获取验证码</button>
            <span v-show="codeErr" class="btn-block">验证码不正确</span>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="请输入密码" v-model="pwd1">
            <span v-show="pwdNull"  class="btn-block">密码不能为空</span>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="确认密码" v-model="pwd2">
            <span v-show="pwdErr"  class="btn-block">两次密码不匹配</span>
          </div>
          <button class="loginBtn btn btn-block" @click="register">登录</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
  data () {
    return {
      tel: '',
      telErr: false,
      count: '',
      timer: null,
      show: true,
      verCode: '',
      code: '',
      codeErr: false,
      pwd1: '',
      pwdNull: false,
      pwd2: '',
      pwdErr: false
    }
  },
  watch: {
    tel(val) {
      if(!(/^1[34578]\d{9}$/.test(val))){
        this.telErr = true
      }
      else {
        this.telErr = false
      }
    },
    pwd1(val) {
      if(!val){
        this.pwdNull = true
      }
      else{
        this.pwdNull = false
      }
    }
  },
  methods: {
    goto (path) {
      this.$router.replace(path)
    },
    countDown () {
      if(this.tel === ''){
        this.$swal({
          type: 'error',
          showCancelButton: false,
          text: '请输入手机号!',
          confirmButtonText: '确定'
        })
      }
      if(this.telErr){
        this.$swal({
          type: 'error',
          showCancelButton: false,
          text: '请输入正确的手机号!',
          confirmButtonText: '确定'
        })
      }
      else {
        let params = new URLSearchParams()
        params.append('num', this.tel)
        axios({
          method: 'POST',
          url: process.env.API_ROOT+'/mob/common/getCode',
          data: params,
          header: this.header
        })
          .then(res => {
            console.log(res)
            this.code = res.data.code
          })
          .catch(err => {
            console.log(err)
          })
        let TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT+'s';
          this.show = false;
          this.timer = setInterval(() => {
            if (TIME_COUNT > 0 && TIME_COUNT <= 60) {
              TIME_COUNT--
              this.count = TIME_COUNT +'s'
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      }
    },
    register () {
      if(this.verCode !== this.code) {
        this.verCode = ''
        this.code = ''
        this.codeErr = true
      }
      if(this.pwd1 !== this.pwd2){
        this.pwd2 = ''
        this.pwdErr = true
      }
      else if(!this.telErr&&!this.codeErr&&!this.pwdNull&&!this.pwdErr) {
        let params = new URLSearchParams()
        params.append('fAccount', this.tel)
        params.append('fPassword', this.pwd1)
        // 登录
        axios({
          method: 'POST',
          url: process.env.API_ROOT + '/vue/commonUser/userReg',
          data: params,
          header: this.header
        })
          .then(res => {
          console.log(res)
          if(res.data.code === 402){
            this.$swal({
              text: '用户已存在，是否登录？',
              // type: 'warning',
              showCancelButton: true,
              confirmButtonText: '确定',
              cancelButtonText: '取消'
            }).then((res) => {
              if (res.value) {
                this.$router.replace('/login')
              }
            })
          }
          else {
            this.$router.replace('/login')
          }
        })
          .catch(err => {
            console.log('出错'+err)
          })
      }
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
  section {
    width: 920px;
    /*background-color: silver;*/
    min-height: 300px;
    margin: 0 auto;
    padding-top: 30px;
  }
  section:before,
  section:after {
    content: '';
    display: table;
    clear: both;
  }
  section>img {
    width: 460px;
    overflow: hidden;
    object-fit: cover;
    padding-top: 20px;
  }
  .logContent {
    /*opacity: 0.85;*/
    box-shadow: 0px 0px 10px white;
    width: 420px;
    background-color: white;
    float: right;
    /*margin: 20px;*/
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
    padding: 35px 60px;
  }
  .form-group {
    height: 60px;
    margin-bottom: 10px;
  }
  .form-group > span {
    color: red;
    font-size: 14px;
    display: inline-block;
    padding: 5px 0px;
  }
  .logContent>form>a {
    font-size: 15px;
    display: inline-block;
    margin-bottom: 30px;
    color: #000;
  }
  .loginBtn {
    background-color: #EC7309;
    color: white;
    font-size: 16px;
  }
  .form-group:nth-of-type(2)>input {
    color: #979797;
    width: 66%;
    vertical-align: top;
    display: inline-block;
  }
  .getBtn {
    background-color: #EC7309;
    color: white;
    width: 30%;
    height: 35px;
    float: right;
  }
</style>
