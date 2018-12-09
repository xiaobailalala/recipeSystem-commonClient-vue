<template>
  <div>
    <div class="productMenu">
      <div class="proLeft">
        <!--一二级食谱分类开始-->
        <div class="proLeftTitle"><b> 食谱分类</b></div>
        <div class="sidenav">
          <ul>
            <li v-for="(item, index) in menuList" :key="index">
              <img src="static/images/recipesImg/proone.gif" alt="">
              <a href="javascript:;" @click="bindMenu(index)" class="sidenava">
                <p>
                  {{item.content }}
                  <i class="iconfont" :class="item.style"></i>
                </p>
              </a>
              <transition name="slide-fade">
                <ol v-if="item.isShow" class="secMenu">
                  <li v-for="(item1, index1) in item.second" data-index="index1" :key="index1">{{item1}}</li>
                </ol>
              </transition>
            </li>
          </ul>
        </div>
        <!--一二级食谱分类结束-->
      </div>

      <div class="proRight">
        <div class="proRightTitle">
          <h2>热门</h2>
          <div class="bread">当前位置： <a href="/" class="crumb">首页</a> &gt; 食谱分类 &gt; 热门</div>
        </div>
        <div class="recContent">

          <!--三级菜单开始-->
          <ul class="thMenu">
            <li>视频菜谱</li>
            <li>苦瓜</li>
            <li>丝瓜</li>
            <li>茭白</li>
            <li>西红柿</li>
            <li>土豆</li>
            <li>茄子</li>
            <li>菠菜</li>
            <li>豆角</li>
          </ul>
          <!--三级菜单结束-->

          <!--菜单内容开始-->
          <ul class="menuContent">
            <li @click="goto('/recipes/recipeDetail')">
              <div>
                <a href="javascript:;" title="产品标题六" class="proImg">
                  <img src="static/images/product/product1.png" alt="产品标题六" class="Img">
                </a>
              </div>
              <p><a href="javascript:;" title="产品标题六" class="pg-color">产品标题六</a></p>
            </li>
            <li>
              <div>
                <a href="javascript:;" title="产品标题六" class="proImg">
                  <img src="static/images/product/product1.png" alt="产品标题六" class="Img">
                </a>
              </div>
              <p><a href="javascript:;" title="产品标题六" class="pg-color">产品标题六</a></p>
            </li>
            <li>
              <div>
                <a href="javascript:;" title="产品标题六" class="proImg">
                  <img src="static/images/product/product1.png" alt="产品标题六" class="Img">
                </a>
              </div>
              <p><a href="javascript:;" title="产品标题六" class="pg-color">产品标题六</a></p>
            </li>
            <li>
              <div>
                <a href="javascript:;" title="产品标题六" class="proImg">
                  <img src="static/images/product/product1.png" alt="产品标题六" class="Img">
                </a>
              </div>
              <p><a href="javascript:;" title="产品标题六" class="pg-color">产品标题六</a></p>
            </li>
            <li>
              <div>
                <a href="javascript:;" title="产品标题六" class="proImg">
                  <img src="static/images/product/product1.png" alt="产品标题六" class="Img">
                </a>
              </div>
              <p><a href="javascript:;" title="产品标题六" class="pg-color">产品标题六</a></p>
            </li>
            <li>
              <div>
                <a href="javascript:;" title="产品标题六" class="proImg">
                  <img src="static/images/product/product1.png" alt="产品标题六" class="Img">
                </a>
              </div>
              <p><a href="javascript:;" title="产品标题六" class="pg-color">产品标题六</a></p>
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

      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {
          content: '热门',
          second: [
            '热门食材',
            '家常菜',
            '下饭菜',
            '快手菜',
            '减肥食谱'
          ],
          isShow: false,
          style: 'icon-right'
        },
        {
          content: '蔬菜',
          second: [
            '时令蔬菜',
            '瓜类',
            '绿叶蔬菜',
            '菌类',
            '根茎蔬菜',
            '豆科'
          ],
          isShow: false,
          style: 'icon-right'
        },
        {
          content: '菜式菜系',
          second: [
            '菜式',
            '中国菜',
            '外国菜'
          ],
          isShow: false,
          style: 'icon-right'
        },
        {
          content: '主食',
          second: [
            '面食',
            '饼',
            '西式主食',
            '粥',
            '米饭'
          ],
          isShow: false,
          style: 'icon-right'
        },
        {
          content: '肉类大全',
          second: [
            '猪肉',
            '鸡肉',
            '牛肉',
            '羊肉',
            '其他'
          ],
          isShow: false,
          style: 'icon-right'
        },
        {
          content: '热门',
          second: [
            '热门食材',
            '家常菜',
            '下饭菜',
            '快手菜',
            '减肥食谱'
          ],
          isShow: false,
          style: 'icon-right'
        },
        {
          content: '蔬菜',
          second: [
            '时令蔬菜',
            '瓜类',
            '绿叶蔬菜',
            '菌类',
            '根茎蔬菜',
            '豆科'
          ],
          isShow: false,
          style: 'icon-right'
        },
        {
          content: '菜式菜系',
          second: [
            '菜式',
            '中国菜',
            '外国菜'
          ],
          isShow: false,
          style: 'icon-right'
        },
        {
          content: '主食',
          second: [
            '面食',
            '饼',
            '西式主食',
            '粥',
            '米饭'
          ],
          isShow: false,
          style: 'icon-right'
        },
        {
          content: '肉类大全',
          second: [
            '猪肉',
            '鸡肉',
            '牛肉',
            '羊肉',
            '其他'
          ],
          isShow: false
        },
        {
          content: '热门',
          second: [
            '热门食材',
            '家常菜',
            '下饭菜',
            '快手菜',
            '减肥食谱'
          ],
          isShow: false,
          style: 'icon-right'
        },
        {
          content: '蔬菜',
          second: [
            '时令蔬菜',
            '瓜类',
            '绿叶蔬菜',
            '菌类',
            '根茎蔬菜',
            '豆科'
          ],
          isShow: false,
          style: 'icon-right'
        },
        {
          content: '菜式菜系',
          second: [
            '菜式',
            '中国菜',
            '外国菜'
          ],
          isShow: false,
          style: 'icon-right'
        },
        {
          content: '主食',
          second: [
            '面食',
            '饼',
            '西式主食',
            '粥',
            '米饭'
          ],
          isShow: false,
          style: 'icon-right'
        },
        {
          content: '肉类大全',
          second: [
            '猪肉',
            '鸡肉',
            '牛肉',
            '羊肉',
            '其他'
          ],
          isShow: false,
          style: 'icon-right'
        }
      ]
    }
  },
  methods: {
    bindMenu (objIndex) {
      const newArr = this.menuList
      newArr.forEach(function (item, index) {
        if (index === objIndex) {
          newArr[index].isShow = !newArr[index].isShow
          newArr[index].style = 'icon-down'
        } else {
          newArr[index].isShow = false
          newArr[index].style = 'icon-right'
        }
      })
    },
    goto (path) {
      let {href} = this.$router.resolve({path})
      window.open(href,'_blank')
    }
  }
}
</script>

<style scoped>

  .productMenu {
    width: 1000px;
    position: relative;
    margin: 50px auto;
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
    min-height: 795px;
  }

  .proLeftTitle {
    padding-top: 25px;
    height: 82px;
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
    position: relative;
    border-bottom: 1px dashed rgb(213, 213, 213);
    /*background: url("../../../static/images/recipesImg/proone.gif") 20px 12px no-repeat;*/
  }
  .sidenav>ul>li>img {
    position: absolute;
    left: 10px;
    top: 13px;
  }
  .sidenava > p {
    display: block;
    overflow: hidden;
    color: #262626;
    width: 155px;
    height: 100%;
    cursor: pointer;
    transition: all .3s ease-in-out 0s;
  }

  .sidenava > p:hover {
    color: #795a43;
  }

  .sidenava i {
    /*width: 20px;*/
    /*height: 20px;*/
    /*display: inline-block;*/
    float: right;
    /*margin-top: 11px;*/
    /*border: 1px solid #e4b9b9;*/
  }

  .secMenu {
    padding-left: 20px;
    padding-bottom: 10px;
  }

  .secMenu > li {
    height: 35px;
    font-size: 14px;
    list-style: disc;
    cursor: pointer;
    font-size: 14px;
    width: 120px;
  }

  .secMenu > li:hover {
    color: #F08E02;
    transition: all 0.2s linear;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .proRight {
    float: right;
    width: 730px;
    min-height: 633px;
    border: 1px solid #ebebeb;
    background: #fff;
    padding: 0 38px 15px 32px;
  }

  .proRightTitle {
    padding-top: 25px;
    border-bottom: 1px solid #dbdbdb;
    position: relative;
    margin-bottom: 20px;
    width: 100%;
    height: 86px;
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
    min-height: 672px;
    font-size: 14px;
  }

  .thMenu {
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    vertical-align: center;
    padding: 10px;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }
  .thMenu > li {
    font-size: 18px;
    padding: 5px 10px;
    margin: 20px;
    cursor: pointer;
    display: inline-block;
    border: 1px dashed #795a43;
  }

  .menuContent {
    width: 100%;
    height: auto;
    padding: 0px 10px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    vertical-align: center;
    flex-wrap: wrap;
  }

  .menuContent > li {
    height: 200px;
    width: 30%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
  }

  .menuContent > li > div {
    margin: 3px auto;
    position: relative;
    margin: 0 auto;
    width: 96.6%;
    text-align: center;
    vertical-align: middle;
  }

  .proImg {
    width: 208px;
    height: 156px;
    overflow: hidden;
    display: inline-block;
  }

  .pg-color {
    width: 88%;
    margin: 0 auto;
    text-align: center;
    font: 14px/40px "microsoft yahei";
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .pageWrapper {
    width: 100%;
    text-align: center;
  }
</style>
