<template>
  <header>
    <!--头部-->
    <div id="headerLogo">
      <!--顶部logo-->
      <a href="javascript:;" data-toggle="tooltip" data-placement="right" title="膳房膳食">
        <img src="./images/logo.png" alt="logo">
      </a>
      <!--顶部登录注册-->
      <div id="logOrReg">
        <span><a href="">登录</a></span>
        <span><a href="">注册</a></span>
        <span><a href="">下载客户端</a></span>
      </div>
    </div>
    <div class="clear"></div>
    <!--菜单-->
    <div id="headerMenu">
      <div id="menu">
        <ul>
          <li>
            <i class="iconfont icon-home"></i>
            <a href="#">首页</a>
          </li>
          <li>
            <a href="#">食谱分类</a>
          </li>
          <li>
            <a href="#">时令食材</a>
          </li>
          <li>
            <a href="#">精选</a>
          </li>
          <li>
            <a href="#">写食派</a>
          </li>
          <li>
            <a href="#">商铺</a>
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
                <a href=""><i class="iconfont icon-spoonknife"></i>食谱创作</a>
              </li>
              <li>
                <a href=""><i class="iconfont icon-note"></i>美食随笔</a>
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
export default {}
</script>
