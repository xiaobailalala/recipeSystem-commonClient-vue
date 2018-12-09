<template>
    <div class="submitProduct" >
      <h2>上传我做的虾扯蛋</h2>
      <div class="subContent">
        <div class="feel">
          <textarea class="form-control" rows="5" placeholder="心得体会"></textarea>
        </div>
        <div class="image-view">
          <div class="view">
            <div class="item" v-for="(item, index) in projectImgs">
              <span class="cancel-btn" @click="delImg(index)">x</span>
              <img :src="item">
            </div>
            <div class="addbox" @click="projectImg" v-show="lessThenNine">
              <input type="file" @change="getImgBase()">
              <div class="addbtn">+</div>
            </div>
          </div>
      </div>
      </div>
      <button type="button" class="btn btn-warning">发布</button>
    </div>
</template>

<script>
  export default {
    data (){
      return {
        projectImgs:[],    //存储img base64的值将值传给后端处理
        lessThenNine: true
      }
    },
    methods: {
      projectImg () {
        $('.addbox>input').click()
      },
      //获取图片base64实现预览
      getImgBase () {
        let _this = this
        console.log(_this.projectImgs.length)
        _this.lessThenNine = true
        let event = event || window.event
        let file = event.target.files[0]
        let reader = new FileReader()
        //转base64
        reader.onload = function (e) {
          _this.projectImgs.push(e.target.result)
        }
        reader.readAsDataURL(file)
        if (_this.projectImgs.length >= 8) {
          _this.lessThenNine = false
        }
      },
      //删除图片
      delImg(index){
        this.projectImgs.splice(index,1);
      }
    }
  }
</script>

<style scoped>
  .submitProduct {
    width: 950px;
    margin: 30px auto;

  }
  .submitProduct>h2 {
    font-size: 24px;
    padding: 20px;
  }
  .subContent {
    width: 100%;
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .feel {
    width: 42%;
    display: inline-block;
    /*background-color: #337ab7;*/
    vertical-align: top;
  }
  .image-view{
    border-left: 2px solid #ccc;
    width:56%;
    display: inline-block;
    vertical-align: top;
    padding: 0px 10px 0px 20px;
    /*margin:50px auto;*/
  }
  .image-view .addbox{
    position:relative;
    height:115px;
    width:152px;
    display: inline-block;
    text-align:center;
    margin-bottom: 10px;
  }
  .image-view .addbox input{
    position:absolute;
    left: 0px;
    width: 10px;
    opacity:0;
  }
  .image-view .addbox .addbtn{
    float:left;
    height:100%;
    width:100%;
    line-height:115px;
    color:#fff;
    font-size:40px;
    background:#ccc;
    border-radius:5px;
  }
  .image-view .item {
    position:relative;
    float:left;
    height:115px;
    width:152px;
    margin:0 10px 10px 0;
  }
  .item:nth-of-type(3),
  .item:nth-of-type(6),
  .item:nth-of-type(9){
    margin-right: 0;
  }
  .image-view .item .cancel-btn{
    position:absolute;
    right:-8px;
    top:-8px;
    display:block;
    width:20px;
    height:20px;
    color:#fff;
    line-height:20px;
    text-align:center;
    background:red;
    border-radius:10px;
    cursor:pointer;
  }
  .image-view .item img{
    width:100%;
    border-radius: 5px;
    height:100%;
  }
  .image-view .view{
    display: inline-block;
  }
  .image-view .view:before,
  .image-view .view:after {
    content: '';
    display: table;
    clear: both;
  }
  .submitProduct>button {
    padding: 5px 30px;
    margin: 20px auto;
    display: block;
  }
</style>
