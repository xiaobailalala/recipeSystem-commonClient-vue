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
                  {{item.fname }}
                  <i class="iconfont" :class="item.style"></i>
                </p>
              </a>
              <transition name="slide-fade">
                <ol v-if="item.isShow" class="secMenu">
                  <li v-for="(item1, index1) in item.classifyTwos" @click="showThird(index,index1)" data-index="index1" :key="index1">{{item1.fname}}</li>
                </ol>
              </transition>
            </li>
          </ul>
        </div>
        <!--一二级食谱分类结束-->
      </div>

      <div class="proRight">
        <div class="proRightTitle">
          <h2>热门 <span>{{position1}}{{position2}}{{position3}}</span></h2>
          <div class="bread">当前位置： <a href="/" class="crumb">首页</a> &gt; 食谱分类</div>
        </div>
        <div class="recContent">

          <!--三级菜单开始-->
          <ul class="thMenu">
            <li v-for="(item,index) in thirdList" @click="showLast(index)" :key="index">
              {{item.fname}}
            </li>
          </ul>
          <!--三级菜单结束-->

          <!--菜单内容开始-->
          <ul class="menuContent">
            <li @click="goto('/recipes/recipeDetail')" v-for="(item,index) in lastList" :key="index">
              <div>
                <img :src="item.recipe.fcover" alt="产品标题六" class="Img">
              </div>
              <p>{{item.recipe.fname}}</p>
            </li>
            <p v-show="lastList.length===0">试点击上面分类或看看其他分类吧</p>
          </ul>
          <!--菜单内容结束-->

          <!--分页样式-->
          <div v-show="lastList.length!=0" aria-label="Page navigation" class="pageWrapper">
              <ul class="pagination">
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li v-for="index in lastList.length%6"><a href="#">{{index}}</a></li>
                <!--<li><a href="#">2</a></li>-->
                <!--<li><a href="#">3</a></li>-->
                <!--<li><a href="#">4</a></li>-->
                <!--<li><a href="#">5</a></li>-->
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
  import axios from 'axios'
  export default {
    data () {
      return {
        // 一二级菜单
        menuList: [
          {

          }
        ],
        // 三级菜单
        thirdList: '',
        // 四级菜单
        lastList: '',
        // 当前位置
        position1: '热门>',
        position2: '热门食材',
        position3: '',
        // 该分类是否有食谱
        lastListLength: '',
        noRecipe: ''
      }
    },
    mounted: function() {
      let _this = this
      // 获取一二级菜单
      axios.get(process.env.API_ROOT+'/vue/cla/getAllInfo')
      .then(function (res) {
        console.log(res)
        // 加入字段
        res.data.data.forEach(item => {
          item.style = 'icon-right'
          item.isShow = false
        })
        _this.menuList = res.data.data
        // 获取三级菜单
        _this.thirdList = _this.menuList[0].classifyTwos[0].classifies

        // 根据二级获取四级菜单（食谱封面名称
        axios.get(process.env.API_ROOT+'/vue/recipe/getRecipeInfoByClaId',{
          params: {
            twoId: _this.menuList[0].classifyTwos[0].fid,
            threeId: 0
          }
        })
          .then(function (res) {
            // 获取食谱详情对应的数组
            _this.lastList = res.data.data.counts
            // 更改图片路径
            _this.lastList.forEach(item => {
              item.recipe.fcover = process.env.RES_PATH + item.recipe.fcover
            })
          })
          .catch(function(err) {
            console.log(err)
          })
      })
      .catch(function(err) {
        console.log(err)
      })
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
      },
      showThird (index,index1) {
        let lis = this
        lis.position2 = lis.menuList[index].classifyTwos[index1].fname
        // 获取食谱封面名称
        axios.get(process.env.API_ROOT+'/vue/recipe/getRecipeInfoByClaId',{
          params: {
            twoId: lis.menuList[index].classifyTwos[index1].fid,
            threeId: 0
          }
        })
          .then(function (res) {
            lis.lastList = res.data.data.counts
            lis.lastList.forEach(item => {
              item.recipe.fcover = process.env.RES_PATH + item.recipe.fcover
            })
            console.log(lis.lastList)
          })
          .catch(function(err) {
            console.log(err)
          })
        lis.thirdList = lis.menuList[index].classifyTwos[index1].classifies
      },
      showLast (index) {
        let lis = this
        lis.position3 = '>' + lis.thirdList[index].fname
        // 获取食谱封面名称
        axios.get(process.env.API_ROOT+'/vue/recipe/getRecipeInfoByClaId',{
          params: {
            twoId: 0,
            threeId: lis.thirdList[index].fid
          }
        })
          .then(function (res) {
            lis.lastList = res.data.data.counts
            lis.lastList.forEach(item => {
              item.recipe.fcover = process.env.RES_PATH + item.recipe.fcover
            })
            console.log(lis.lastList)
          })
          .catch(function(err) {
            console.log(err)
          })
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
    transition: all 0.5s ease;
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
  .proRightTitle > h2>span {
    font-size: 16px;
    font-weight: unset;
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
    margin: 10px 20px;
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
    justify-content: flex-start;
    vertical-align: center;
    flex-wrap: wrap;
  }
  .menuContent> p {
    font-size: 20px;
    width: 100%;
    text-align: center;
    height: 250px;
    line-height: 250px;
    color: #666;
  }
  .menuContent > li {
    height: 200px;
    width: 33%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
  .menuContent>li>p {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    font: 14px/40px "microsoft yahei";
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
  }
  .menuContent > li > div {
    margin: 3px auto;
    position: relative;
    width: 90%;
    height: 158px;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
  }
  .Img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }

  .pageWrapper {
    width: 100%;
    text-align: center;
  }
</style>
