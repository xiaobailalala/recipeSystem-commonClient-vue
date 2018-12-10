<template>
    <div class="shopDetail">
      <!--图片放大-->
      <div class="box">
        <div class="tb-booth tb-pic tb-s310">
          <a :href="firstImg">
            <img :src="firstImg"
                 alt="食物" :rel="firstImg" class="jqzoom"/>
          </a>
        </div>
        <ul class="tb-thumb">
          <li class="tb-selected" v-for="(item,index) in imgs" :key="index">
            <div class="tb-pic tb-s40">
              <a href="#">
                <img :src="item.img"
                     :mid="item.img"
                     :big="item.img">
              </a>
            </div>
          </li>

        </ul>
      </div>
      <!--放大结束-->

      <div>
        <h3>大西冷1000g*2四斤牛腩肉新鲜包邮冷冻进口谷饲牛整块牛肉粒生鲜</h3>
        <span>￥119.80</span> <span></span>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        imgs: [
          {
            img:'static/images/shopDetail/01.jpg'
          },
          {
            img:'static/images/shopDetail/02.jpg'
          },
          {
            img:'static/images/shopDetail/03.jpg'
          },
          {
            img:'static/images/shopDetail/04.jpg'
          },
          {
            img:'static/images/shopDetail/05.jpg'
          }
        ],
        firstImg: 'static/images/shopDetail/01.jpg'
      }
    },
    mounted: function () {
      $(document).ready(function () {
        $('.jqzoom').imagezoom()
        $('.tb-thumb li a').click(function () {
          $(this).parents('li').addClass('tb-selected').siblings().removeClass('tb-selected')
          $('.jqzoom').attr('src', $(this).find('img').attr('mid'))
          $('.jqzoom').attr('rel', $(this).find('img').attr('big'))
        })

      })
    }
  }
</script>

<style>
  .shopDetail {
    width: 1000px;
    margin: 30px auto;
    background-color: #fff;
    padding: 30px;
  }
  .box {
    width: 311px;
  }
  .tb-pic a {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  .tb-pic a img {
    vertical-align: middle;
  }
  .tb-thumb {
    overflow: hidden;
    padding: 10px;
    border: 1px solid #ccc;
  }
  .tb-thumb li {
    background: none repeat scroll 0 0 transparent;
    float: left;
    height: 42px;
    margin: 0 15px 0 0px;
    overflow: hidden;
    padding: 1px;
  }
  .tb-thumb li:last-of-type {
    margin-right: 0px;
  }
  .tb-s310, .tb-s310 a {
    height: 310px;
    width: 310px;
  }
  .tb-s310, .tb-s310 img {
    max-height: 310px;
    max-width: 310px;
  }
  .tb-s40, .tb-s40 a {
    height: 40px;
    width: 40px;
  }
  .tb-booth {
    border: 1px solid #CDCDCD;
    position: relative;
    z-index: 1;
  }
  .tb-thumb .tb-selected {
    background: none repeat scroll 0 0 #C30008;
    height: 40px;
    padding: 2px;
  }
  .tb-thumb .tb-selected div {
    background-color: #FFFFFF;
    border: medium none;
  }
  .tb-thumb li div {
    border: 1px solid #CDCDCD;
  }
  .tb-thumb img {
    width: 100%;
    height: 100%;
  }
  div.zoomDiv {
    z-index: 999;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 200px;
    height: 200px;
    background: #ffffff;
    border: 1px solid #CCCCCC;
    display: none;
    text-align: center;
    overflow: hidden;
  }
  div.zoomMask {
    position: absolute;
    background: url("../../../static/images/shopDetail/mask.png") repeat scroll 0 0 transparent;
    cursor: move;
    z-index: 1;
  }
</style>
