<template>
  <div>
    <div class="product sub_pro"> <div class="product01">
      <!--产品分类开始-->
      <div class="product07"><b> 产品中心</b></div>
      <div class="sidenav">
        <ul>
          <li><a href="/home/Article/lists.html?tid=36" title="川菜" class="sidenava ">
            <p>川菜</p>
          </a></li>
          <li><a href="/home/Article/lists.html?tid=37" title="粤菜" class="sidenava ">
            <p>粤菜</p>
          </a></li>
          <li><a href="/home/Article/lists.html?tid=38" title="卤菜" class="sidenava ">
            <p>卤菜</p>
          </a></li>
          <li><a href="/home/Article/lists.html?tid=39" title="闽菜" class="sidenava ">
            <p>闽菜</p>
          </a></li>
          <li><a href="/home/Article/lists.html?tid=44" title="湘菜" class="sidenava ">
            <p>湘菜</p>
          </a></li>
          <li><a href="/home/Article/lists.html?tid=45" title="琼菜" class="sidenava ">
            <p>琼菜</p>
          </a></li>
        </ul>
      </div>

      <!--产品分类结束-->
    </div>

      <div class="product02">
        <div class="content_com_title">
          <h2>产品中心</h2>
          <div class="bread">当前位置： <a href="/" class="crumb">首页</a> &gt; 产品中心</div>
        </div>
        <!--产品列表开始-->
        <div class="content">
          <ul class="product3">
            <li>
              <div>
                <a href="javascript:;" title="产品标题六">
                  <img src="./images/product/product1.png" alt="产品标题六" class="Img">
                </a>
              </div>
              <p><a href="javascript:;" title="产品标题六" class="pg-color">产品标题六</a></p>
            </li>
            <li>
              <div>
                <a href="javascript:;" title="产品标题六">
                  <img src="./images/product/product1.png" alt="产品标题六">
                </a>
              </div>
              <p><a href="javascript:;" title="产品标题六" class="pg-color">产品标题六</a></p>
            </li>
            <li>
              <div>
                <a href="javascript:;" title="产品标题六">
                  <img src="./images/product/product1.png" alt="产品标题六">
                </a>
              </div>
              <p><a href="javascript:;" title="产品标题六" class="pg-color">产品标题六</a></p>
            </li>
            <li>
              <div>
                <a href="javascript:;" title="产品标题六">
                  <img src="./images/product/product1.png" alt="产品标题六">
                </a>
              </div>
              <p><a href="javascript:;" title="产品标题六" class="pg-color">产品标题六</a></p>
            </li>
            <li>
              <div>
                <a href="javascript:;" title="产品标题六">
                  <img src="./images/product/product1.png" alt="产品标题六">
                </a>
              </div>
              <p><a href="javascript:;" title="产品标题六" class="pg-color">产品标题六</a></p>
            </li>
            <li>
              <div>
                <a href="javascript:;" title="产品标题六">
                  <img src="./images/product/product1.png" alt="产品标题六">
                </a>
              </div>
              <p><a href="javascript:;" title="产品标题六" class="pg-color">产品标题六</a></p>
            </li>
          </ul>
          <!--分页样式-->
          <div class="pagination-wrapper">
            <div class="pagination">  <li><a>共1页&nbsp;6条</a></li> </div>
          </div>
        </div>
        <!--产品列表结束-->
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .product {
    width: 1004px;
    position: relative;
    margin: 30px auto 0px;
  }
  .product01 {
    float: left;
    width: 200px;
    padding-bottom: 20px;
    border: 1px solid #ebebeb;
    background: #fff;
    margin-bottom: 30px;
  }
  .product07 {
    padding-top: 30px;
    height: 86px;
    font-size: 30px;
    line-height: 1;
    color: #262626;
    text-align: center;
    margin: 0 20px 0 25px;
    width: 155px;
    border-bottom: 1px solid #dbdbdb;
  }
  .product07 b {
    font-weight: normal;
  }
  .sidenav {
    padding-top: 17px;
    padding-bottom: 10px;
    width: 155px;
    margin: 0px 20px 0px 25px;
  }
  .sidenav ul li {
    min-height: 48px;
    display: block;
    line-height: 48px;
    font-size: 16px;
    padding-left: 33px;
    width: 122px;
    border-bottom: 1px dashed rgb(213, 213, 213);
    background: url(./images/proone.gif) 20px center no-repeat;
  }
  .product02 {
    float: right;
    width: 791px;
    min-height: 633px;
    border: 1px solid #ebebeb;
    background: #fff;
    padding: 0 38px 15px 32px;
  }
  .content_com_title {
    border-bottom: 1px solid #dbdbdb;
    position: relative;
    margin-bottom: 15px;
    width: 100%;
    padding-top: 30px;
    height: 86px;
  }
  .content_com_title h2 {
    float: left;
    font-size: 30px;
    line-height: 1;
    color: #262626;
  }
  .bread {
    float: right;
    line-height: 12px;
    font-size: 12px;
    color: #575757;
    padding-top: 15px;
  }
  .bread a {
    color: #575757;
  }
  .content {
    min-height: 672px;
    font-size: 14px;
  }
  .product3, .product8 li {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .product02 .product3 li {
    height: 190px;
  }
  .product3 li {
    width: 30%;
    padding: 1% 1.5% 0.5%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
</style>
