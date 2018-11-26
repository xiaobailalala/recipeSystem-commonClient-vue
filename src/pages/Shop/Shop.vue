<!--suppress ALL -->
<template>
  <div>
    <div class="productMenu">
      <div class="proLeft">
        <!--商品分类开始-->
        <div class="proLeftTitle"><b> 商品分类</b></div>
        <div class="sidenav">
          <ul v-for="(arr,index) in arrs" :key="index">
            <li @click="changeArr(index)"><img src="static/images/recipesImg/proone.gif" alt="">{{arr.title}}</li>
          </ul>
        </div>
        <!--商品分类结束-->
      </div>

      <div class="proRight">
        <div class="proRightTitle">
          <h2>厨具</h2>
          <div class="bread">当前位置： <a href="/" class="crumb">首页</a> &gt; 商铺 &gt; 厨具</div>
        </div>
        <div class="recContent">

          <!--菜单内容开始-->
          <ul class="recommend">
            <li v-for="(infor,index) in empty" :key="index">
              <a href="javascript:;" class="recomSize">
                <img :src="infor.img" alt="" class="Img">
              </a>
              <a class="colorChange">{{infor.title}}</a>
              <p class="price">￥{{infor.price}}</p>
              <p>月销{{infor.sale}}件 <span>包邮</span></p>
            </li>
          </ul>
          <!--菜单内容结束-->

          <!--分页样式-->
          <div aria-label="Page navigation" class="pageWrapper">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arrs: [
        {
          title: '厨具'
        },
        {
          title: '蔬菜'
        },
        {
          title: '肉类'
        },
        {
          title: '水果'
        },
        {
          title: '调味品'
        },
        {
          title: '厨房配件'
        },
        {
          title: '厨房电器'
        },
        {
          title: '餐具'
        },
        {
          title: '清洁用品'
        }
      ],
      arrContent: [
        {
          content: [
            {
              img: 'static/images/shopimg/shopimg1.png',
              title: '厨具1',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg1.png',
              title: '厨具2',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg1.png',
              title: '厨具3',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg1.png',
              title: '厨具4',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg1.png',
              title: '厨具5',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg1.png',
              title: '厨具6',
              price: '99.00',
              sale: '1000'
            }]
        },
        {
          content: [
            {
              img: 'static/images/shopimg/shopimg2.png',
              title: '蔬菜1',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg2.png',
              title: '蔬菜2',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg2.png',
              title: '蔬菜3',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg2.png',
              title: '蔬菜4',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg2.png',
              title: '蔬菜5',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg2.png',
              title: '蔬菜6',
              price: '99.00',
              sale: '1000'
            }
          ]
        },
        {
          content: [
            {
              img: 'static/images/shopimg/shopimg3.png',
              title: '肉类1',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg3.png',
              title: '肉类2',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg3.png',
              title: '肉类3',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg3.png',
              title: '肉类4',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg3.png',
              title: '肉类5',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg3.png',
              title: '肉类6',
              price: '99.00',
              sale: '1000'
            }
          ]
        },
        {
          content: [
            {
              img: 'static/images/shopimg/shopimg4.png',
              title: '水果1',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg4.png',
              title: '水果2',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg4.png',
              title: '水果3',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg4.png',
              title: '水果4',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg4.png',
              title: '水果5',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg4.png',
              title: '水果6',
              price: '99.00',
              sale: '1000'
            }
          ]
        },
        {
          content: [
            {
              img: 'static/images/shopimg/shopimg5.png',
              title: '调味品1',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg5.png',
              title: '调味品2',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg5.png',
              title: '调味品3',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg5.png',
              title: '调味品4',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg5.png',
              title: '调味品5',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg5.png',
              title: '调味品6',
              price: '99.00',
              sale: '1000'
            }
          ]
        },
        {
          content: [
            {
              img: 'static/images/shopimg/shopimg6.png',
              title: '厨房配件1',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg6.png',
              title: '厨房配件2',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg6.png',
              title: '厨房配件3',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg6.png',
              title: '厨房配件4',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg6.png',
              title: '厨房配件5',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg6.png',
              title: '厨房配件6',
              price: '99.00',
              sale: '1000'
            }
          ]
        },
        {
          content: [
            {
              img: 'static/images/shopimg/shopimg7.png',
              title: '厨房电器1',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg7.png',
              title: '厨房电器2',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg7.png',
              title: '厨房电器3',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg7.png',
              title: '厨房电器4',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg7.png',
              title: '厨房电器5',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg7.png',
              title: '厨房电器6',
              price: '99.00',
              sale: '1000'
            }
          ]
        },
        {
          content: [
            {
              img: 'static/images/shopimg/shopimg8.png',
              title: '餐具1',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg8.png',
              title: '餐具2',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg8.png',
              title: '餐具3',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg8.png',
              title: '餐具4',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg8.png',
              title: '餐具5',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg8.png',
              title: '餐具6',
              price: '99.00',
              sale: '1000'
            }
          ]
        },
        {
          content: [
            {
              img: 'static/images/shopimg/shopimg9.png',
              title: '清洁用品1',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg9.png',
              title: '清洁用品2',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg9.png',
              title: '清洁用品3',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg9.png',
              title: '清洁用品4',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg9.png',
              title: '清洁用品5',
              price: '99.00',
              sale: '1000'
            },
            {
              img: 'static/images/shopimg/shopimg9.png',
              title: '清洁用品6',
              price: '99.00',
              sale: '1000'
            }
          ]
        }
      ],
      empty: ''
    }
  },
  mounted () {
    this.empty = this.arrContent[0].content
    console.log(this.empty)
  },
  methods: {
    changeArr (index) {
      this.empty = this.arrContent[index].content
    }
  }
}
</script>

<style scoped>
  .productMenu {
    width: 1000px;
    position: relative;
    margin: 30px auto;
    min-height: 300px;
  }
  .productMenu:before,
  .productMenu:after {
    content: "";
    display: table;
    clear: both;
  }
  .proLeft {
    float: left;
    width: 250px;
    padding-bottom: 20px;
    border: 1px solid #ebebeb;
    background-color: #fff;
    min-height: 600px;
  }

  .proLeftTitle {
    padding-top: 20px;
    height: 75px;
    font-size: 26px;
    line-height: 1;
    color: #262626;
    text-align: center;
    margin: 0 20px 0 25px;
    width: 200px;
    border-bottom: 1px solid #dbdbdb;
  }

  .sidenav {
    padding-top: 17px;
    padding-bottom: 10px;
    width: 200px;
    margin: 0px 20px 0px 25px;
  }

  .sidenav > ul > li {
    min-height: 42px;
    display: block;
    line-height: 42px;
    font-size: 17px;
    padding-left: 33px;
    width: 200px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    border-bottom: 1px dashed rgb(213, 213, 213);
  }
  .sidenav>ul>li>img {
    position: absolute;
    left: 10px;
    top: 13px;
  }
  .sidenav > ul >li:hover  {
    color: #F08E02;
  }

  .proRight {
    float: right;
    width: 730px;
    min-height: 600px;
    border: 1px solid #ebebeb;
    background: #fff;
    padding: 0 38px 15px 32px;
  }

  .proRightTitle {
    padding-top: 20px;
    border-bottom: 1px solid #dbdbdb;
    position: relative;
    width: 100%;
    height: 75px;
  }

  .proRightTitle > h2 {
    float: left;
    font-size: 30px;
    line-height: 1;
    color: #262626;
  }

  .bread {
    float: right;
    line-height: 12px;
    font-size: 16px;
    color: #575757;
    padding-top: 15px;
  }

  .bread > a {
    color: #575757;
  }

  .recContent {
    min-height: 400px;
    font-size: 14px;
  }

  /*图片自动裁剪*/
  .Img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }
  /*推荐内容*/
  .recommend {
    width: 100%;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    vertical-align: center;
    flex-wrap: wrap;
  }
  .recommend>li {
    width: 200px;
    height: 280px;
    float: left;
    overflow: hidden;
  }
  .recomSize {
    width: 100%;
    height: 200px;
    display: inline-block;
    overflow: hidden;
  }
  /*图片放大*/
  .recommend>li>a>img {
    width: 100%;
    height: 200px;
    transition: all 0.4s linear;
  }
  .recommend>li>a>img:hover {
    transform: scale(1.1);
  }
  .recommend>li>* {
    line-height: 1.5;
    padding: 0px 10px;
  }
  .recommend>li>a:first-child {
    padding: 0px;
  }
  .recommend>li>a:last-of-type {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .recommend>li>p {
    color: gray;
    font-size: 13px;
    clear: both;

  }
  .recommend>li>p>span {
    padding: 0px 15px;
  }
  /*颜色渐变橙*/
  .colorChange {
    color: black;
    transition: all 0.2s linear;
  }
  #foodRecommend .colorChange:hover,.colorChange:hover {
    color: #F08E02;
  }
  .price {
    font-size: 17px!important;
    color: red !important;
  }

  .pageWrapper {
    width: 100%;
    text-align: center;
  }
</style>
