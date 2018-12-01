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
            <form action="">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="请输入手机号">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="请输入密码">
              </div>
              <a href="">忘记密码&nbsp;></a>
              <button class="btn btn-block">登录</button>
            </form>
          </div>
        <!--</section>-->
      </div>

    </div>
</template>

<script>
export default {
  methods: {
    goto (path) {
      this.$router.replace(path)
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
