<template>
  <div>
    <div class="foodRotate">
      <!--旋转体开始-->
      <tag-cloud :data="hotTag" :config="configTag" @clickTag="clickTagItem" id="rotate"></tag-cloud>
      <!--旋转体结束-->

      <!--搜索框开始-->
      <div class="row">
        <!--当前位置-->
        <div class="foodPosition">
          <div class="foodBread">当前位置： <a href="/" class="crumb">首页</a> &gt; 食谱分类 &gt; 热门</div>
        </div>

        <!--换一批开始-->
        <button type="button" class="btn btn-primary change" @click="changeFood">换一批</button>
        <!--换一批结束-->
        <div class="col-lg-6">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="搜索食材">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">Go!</button>
            </span>
          </div><!-- /input-group -->
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
      <!--搜索框结束-->
    </div>
    <div class="foodContent">
      <ul class="searchContent" v-show="hasRecipe">
        <li v-for="(item,index) in showRecipe" :key="index">
          <a href="javascript:;" class="searchSize">
            <img :src="item.recipe.fcover" alt="" class="Img">
          </a>
          <a href="javascript:;" class="colorChange">{{item.recipe.fname}}</a>
          <p>by &nbsp;<a href="javascript:;" class="colorChange">{{item.recipe.commonUser.fusername}}</a></p>
          <p><span>{{item.fname}}</span>{{item.fnumber}}</p>
        </li>
      </ul>
      <p v-show="!hasRecipe">{{tips}}</p>
    </div>
  </div>
</template>

<script>
// import PubSub from 'pubsub-js'
import axios from 'axios'
// Vue实例
export default {
  data () {
    return {
      hotTag: [],
      configTag: {
        radius: 140,
        maxFont: 26,
        color: '#808080', // '#808080'
        rotateAngleXbase: 350,
        rotateAngleYbase: 350,
        hover: false,
      },
      hasRecipe: false,
      showRecipe: [],
      tips: ''
    }
  },
  mounted :function () {
    let lis = this
    axios.get(process.env.API_ROOT+'/vue/material/randomDataList')
      .then(function (res) {
        res.data.data.forEach(item => item.name = item.fname)
        lis.hotTag = res.data.data
      })
      .catch(function (err) {
        console.log(err)
    })
  },
  methods: {
    clickTagItem (tag) {
      // TODO
      axios.get(process.env.API_ROOT+'/vue/recipe/getDataByMid',{
        params: {
          mid: tag.fid
        }
      })
        .then((res)=> {
          if(res.data.data.dataList.length>0){
            console.log(res.data.data.dataList)
          }
          res.data.data.dataList.forEach(item => {
            item.recipe.fcover = process.env.RES_PATH + item.recipe.fcover
          })
          this.showRecipe = res.data.data.dataList
          if(this.showRecipe.length>0){
            this.hasRecipe = true
          }
          else {
            this.hasRecipe = false
            this.tips = '该食材没有对应的食谱'
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    changeFood () {
      let lis = this
      axios.get(process.env.API_ROOT+'/vue/material/randomDataList')
        .then(function (res) {
          res.data.data.forEach(item => item.name = item.fname)
          lis.hotTag = res.data.data
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>

<style>
  .foodRotate {
    width: 1000px;
    margin: 0 auto;
    min-height: 400px;
    border-bottom: 1px dashed black;
    overflow: hidden;
    cursor: pointer;
  }
  #rotate {
    /*border: 1px solid silver;*/
    margin: 60px 100px 0px 150px;
    display: inline-block;
  }
  #rotate p{
    border: 1px dashed #795a43;
    padding: 12px;
    border-radius: 15px;
    background-color: #fff;
    white-space: nowrap;
    box-shadow: 6px 4px 8px 0 rgba(151, 142, 136, .34);
  }
  .row {
    width: 300px;
    float: right;
    min-height: 180px;
    margin: 15px 80px 0px 0px;
  }

  .foodPosition {
    position: relative;
    width: 100%;
    padding-top: 30px;
    margin-bottom: 60px;
    height: 86px;
    text-align: center;
  }

  .foodBread {
    line-height: 12px;
    font-size: 16px;
    color: #575757;
    padding-top: 15px;
  }
  .foodBread > a {
    color: #575757;
  }
  .change {
    width: 150px;
    margin: 0px 0px 80px 70px;
  }
  .col-lg-6 {
    width: 100%;
  }
  .foodContent {
    width: 1000px;
    line-height: 1.5;
    margin: 35px auto;
  }
  .Img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }
  .searchContent {
    width: 100%;
    margin-top: 25px;
    display: flex;
    justify-content: flex-start;
    vertical-align: center;
    flex-wrap: wrap;
  }
  .searchContent>li {
    width: 180px;
    height: 280px;
    float: left;
    overflow: hidden;
    margin: 0 10px;
  }
  .searchSize {
    width: 100%;
    height: 180px;
    display: inline-block;
    overflow: hidden;
  }
  .searchContent>li>a>img {
    width: 100%;
    height: 220px;
    transition: all 0.4s linear;
  }
  .searchContent>li>a>img:hover {
    transform: scale(1.1);
  }
  .searchContent>li>p {
    color: gray;
    font-size: 14px;
    clear: both;
  }
  .searchContent>li>p:last-of-type>span {
    color: #F08E02;
    margin-right: 10px;
  }
  .foodContent>p {
    font-size: 20px;
    text-align: center;
  }
  .colorChange {
    /*color: black;*/
    transition: all 0.2s linear;
    color: #5A3721;
  }
  .colorChange:hover {
    color: #F08E02;
  }
</style>
