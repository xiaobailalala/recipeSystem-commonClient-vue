<template>
  <header>
    <!--头部-->
    <div id="headerLogo">
      <!--顶部logo-->
      <a href="javascript:;" data-toggle="tooltip" data-placement="right" title="膳房膳食">
        <img src="static/images/headerTop/logo.png" alt="logo">
      </a>
      <!--顶部登录注册-->
      <div id="logOrReg">
        <span><a href="javascript:;" @click="goto('/login')">登录</a></span>
        <span><a href="javascript:;" @click="goto('/register')">注册</a></span>
      </div>
    </div>
    <div class="clear"></div>
    <!--菜单-->
    <div id="headerMenu">
      <div id="menu">
        <ul>
          <li>
            <i class="iconfont icon-home"></i>
            <a a href="javascript:;" @click="goto('/homepage')">首页</a>
          </li>
          <li>
            <a href="javascript:;" @click="goto('/recipes')">食谱分类</a>
          </li>
          <li>
            <a href="javascript:;" @click="goto('/food')">时令食材</a>
          </li>
          <li>
            <a href="javascript:;" @click="goto('/selected')">精选</a>
          </li>
          <li>
            <a href="javascript:;" @click="goto('/note')">写食派</a>
          </li>
          <li>
            <a href="javascript:;" @click="goto('/shop')">商铺</a>
          </li>
        </ul>
        <div id="searchAndPublic">
          <input type="search" name="search" placeholder="搜索食谱/食材/用户" class="search_input">
          <i class="iconfont icon-sousuo"></i>
          <!--<input type="submit" name="submit" class="search_submit">-->
          <span id="dropDownMenu">
            <i class="iconfont icon-add"></i>
            <ul>
              <li>
                <a href="javascript:;" @click="goto('/foodwrite')"><i class="iconfont icon-spoonknife"></i>食谱创作</a>
              </li>
              <li>
                <a href="javascript:;" @click="goto('/notecreated')"><i class="iconfont icon-note"></i>美食随笔</a>
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </header>
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
