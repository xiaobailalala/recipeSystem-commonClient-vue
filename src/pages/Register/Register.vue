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
            <input type="text" class="form-control" placeholder="请输入手机号">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="请输入昵称">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="请输入密码">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="确认密码">
          </div>
          <button class="btn btn-block">登录</button>
        </form>
      </div>
    </section>
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
