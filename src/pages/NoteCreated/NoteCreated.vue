<template>
  <div>
    <div class="createTitle">
      <h2>美食随笔</h2>
      <span>独一无二的体验，唯有品尝才能告诉你一切。</span>
      <div class="bread">当前位置： <a href="/" class="crumb">首页</a> &gt; + > 美食随笔</div>
    </div>
    <div class="creContent">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="请填写标题">
      </div>
      <textarea class="text" rows="5" v-model="content" placeholder="请输入正文"></textarea>
      <p class="icon">
        <i class="iconfont icon-image" @click="showImg" data-toggle="tooltip" data-placement="bottom" title="添加图片"></i>
        <i class="iconfont icon-aite" @click="showFans" data-toggle="tooltip" data-placement="bottom" title="关注的好友或粉丝"></i>
        <i class="iconfont icon-iconjing" @click="showArticles" data-toggle="tooltip" data-placement="bottom" title="收藏的文章"></i>
        <i class="iconfont icon-svgwrite" @click="showRecipes" data-toggle="tooltip" data-placement="bottom" title="收藏的食谱"></i>
        <span v-show="showImgs">ps：不能连续添加一样的图片</span>
      </p>
      <div class="image-view" v-show="showImgs">
        <input type="file" style="display: none" id="addImg" @change="getImg()">
        <div class="view">
          <div class="item" v-for="(item, index) in imgArr">
            <span class="cancel-btn" @click="delSingleImg(index)">x</span>
            <img :src="item">
          </div>
        </div>
      </div>
      <div class="aite" v-show="showPeople">
        您将艾特：
        <span class="selectSpan" v-for="(item,index) in selectPeople" :key="index">{{item}}<button @click="delPeople(index)">X</button></span>
      </div>
      <div class="aite" v-show="showArticle">
        随笔中提到的文章有：
        <span class="selectSpan" v-for="(item,index) in selectArt" :key="index">{{item}}<button @click="delArt(index)">X</button></span>
      </div>
      <div class="aite" v-show="showRecipe">
        随笔中提到的菜谱有：
        <span class="selectSpan" v-for="(item,index) in selectRecipe" :key="index">{{item}}<button @click="delRecipe(index)">X</button></span>
      </div>
      <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content" v-show="aite">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">请选择你要艾特的人(最多两个):</h4>
            </div>
            <div class="modal-body">
              <div class="focus">
                <h2>关注的人</h2>
                <span v-for="(item,index) in focus" :key="index" @click="clickFocus(index)">{{item.name}}
                </span>
              </div>
              <div class="fans">
                <h2>粉丝</h2>
                <span v-for="(item,index) in fans" :key="index" @click="clickFans(index)">{{item.name}}</span>
              </div>
            </div>
            <div class="modal-footer">
              <span class="selectSpan" v-for="(item,index) in selectPeople" :key="index">{{item}}<button @click="delPeople(index)">X</button></span>
              <button type="button" class="btn btn-default" data-dismiss="modal" @click="canclePeople">取消</button>
              <button type="button" class="btn btn-primary" @click="confirmPeople">选择</button>
            </div>
          </div><!-- /.modal-content -->
          <div class="modal-content" v-show="article">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">请选择你收藏过的文章(最多两个):</h4>
            </div>
            <div class="modal-body">
              <div>
                <span v-for="(item,index) in articles" :key="index" @click="clickArt(index)">{{item.name}}</span>
              </div>
            </div>
            <div class="modal-footer">
              <span class="selectSpan" v-for="(item,index) in selectArt" :key="index">{{item}}<button @click="delArt(index)">X</button></span>
              <button type="button" class="btn btn-default" data-dismiss="modal" @click="cancleArt">取消</button>
              <button type="button" class="btn btn-primary" @click="confirmArt">选择</button>
            </div>
          </div><!-- /.modal-content -->
          <div class="modal-content" v-show="recipe">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">请选择你收藏过的菜谱(最多两个):</h4>
            </div>
            <div class="modal-body">
              <div>
                <span v-for="(item,index) in recipes" :key="index" @click="clickRecipe(index)">{{item.name}}</span>
              </div>
            </div>
            <div class="modal-footer">
              <span class="selectSpan" v-for="(item,index) in selectRecipe" :key="index">{{item}}<button @click="delRecipe(index)">X</button></span>
              <button type="button" class="btn btn-default" data-dismiss="modal" @click="cancleRecipe">取消</button>
              <button type="button" class="btn btn-primary" @click="confirmRecipe">选择</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal --><!-- /.modal -->
      <button type="button" class="btn btn-block">submit</button>
    </div>
  </div>
</template>

<script>
  import Emotion from '../../components/Emotion/index'
  export default {
    data () {
      return {
        content: '',
        imgArr: [],
        showImgs: false,
        showPeople: false,
        // 艾特
        showAt: false,
        aite: false,
        focus: [
          {
            name: '垃圾狗培'
          },
          {
            name: '垃圾伟源'
          },
          {
            name: 'gaygay'
          }
          ,
          {
            name: '粉嫩的小脏脏'
          },
          {
            name: '垃圾狗培'
          },
          {
            name: '垃圾伟源'
          },
          {
            name: 'gaygay'
          }
          ,
          {
            name: '粉嫩的小脏脏'
          },
          {
            name: '垃圾狗培'
          },
          {
            name: '垃圾伟源'
          },
          {
            name: 'gaygay'
          }
          ,
          {
            name: '粉嫩的小脏脏'
          },
          {
            name: '杨一晖'
          },
          {
            name: '垃圾狗培'
          },
          {
            name: '垃圾伟源'
          },
          {
            name: 'gaygay'
          },
          {
            name: '粉嫩的小脏脏'
          },
          {
            name: '杨一晖'
          },
          {
            name: '垃圾狗培'
          },
          {
            name: '垃圾伟源'
          },
          {
            name: 'gaygay'
          },
          {
            name: '粉嫩的小脏脏'
          },
          {
            name: '杨一晖'
          },
          {
            name: '垃圾狗培'
          },
          {
            name: '垃圾伟源'
          },
          {
            name: 'gaygay'
          },
          {
            name: '粉嫩的小脏脏'
          },
          {
            name: '杨一晖'
          },
          {
            name: '垃圾狗培'
          },
          {
            name: '垃圾伟源'
          },
          {
            name: 'gaygay'
          },
          {
            name: '粉嫩的小脏脏'
          },
          {
            name: '杨一晖'
          },
          {
            name: '垃圾狗培'
          },
          {
            name: '垃圾伟源'
          },
          {
            name: 'gaygay'
          },
          {
            name: '粉嫩的小脏脏'
          },
          {
            name: '杨一晖'
          },
          {
            name: '垃圾狗培'
          },
          {
            name: '垃圾伟源'
          },
          {
            name: 'gaygay'
          },
          {
            name: '粉嫩的小脏脏'
          },
          {
            name: '杨一晖'
          },
          {
            name: '垃圾狗培'
          },
          {
            name: '垃圾伟源'
          },
          {
            name: 'gaygay'
          }
        ],
        fans: [
          {
            name: '粉嫩的小脏脏'
          },
          {
            name: '杨一晖'
          },
          {
            name: '垃圾狗培'
          },
          {
            name: '垃圾伟源'
          },
          {
            name: 'gaygay'
          },
        ],
        selectPeople:[],
        //文章
        showArticle: false,
        articles: [
          {
            name: 'c语言'
          },
          {
            name: '面向对象程序设计'
          },
          {
            name: '高等数学'
          },
          {
            name: '数据结构'
          },
          {
            name: '想我这样的人'
          },
          {
            name: '成功需要多少年'
          },
          {
            name: '哪怕遍体鳞伤，也要活得漂亮'
          },
          {
            name: '缴电话费的老人'
          },
          {
            name: '如何成为一个内心强大的人'
          },
          {
            name: '走过四十载怎能忘记'
          },
          {
            name: 'c语言'
          },
          {
            name: '面向对象程序设计'
          },
          {
            name: '高等数学'
          },
          {
            name: '数据结构'
          },
          {
            name: '想我这样的人'
          },
          {
            name: '成功需要多少年'
          },
          {
            name: '哪怕遍体鳞伤，也要活得漂亮'
          },
          {
            name: '缴电话费的老人'
          },
          {
            name: '如何成为一个内心强大的人'
          },
          {
            name: 'c语言'
          },
          {
            name: '面向对象程序设计'
          },
          {
            name: '高等数学'
          },
          {
            name: '数据结构'
          },
          {
            name: '想我这样的人'
          },
          {
            name: '成功需要多少年'
          },
          {
            name: '哪怕遍体鳞伤，也要活得漂亮'
          },
          {
            name: '缴电话费的老人'
          },
          {
            name: '如何成为一个内心强大的人'
          }
        ],
        article: false,
        selectArt: [],
        // 菜谱
        showRecipe: false,
        recipes: [
          {
            name: '鱼香肉丝'
          },
          {
            name: '爆炒金针菇'
          },
          {
            name: '四季豆炒豆腐干'
          },
          {
            name: '红烧千页豆腐'
          },
          {
            name: '肉炒三丝'
          },
          {
            name: '家常西红柿烧茄子'
          },
          {
            name: '炒香菇'
          },
          {
            name: '家常醋溜豆腐丝'
          },
          {
            name: '家常可乐鸡翅'
          },
          {
            name: '蔬菜饼'
          }
        ],
        recipe: false,
        selectRecipe: [],
      }
    },
    mounted(){
      document.body.addEventListener('click',()=>{
        this.isShow = false;
      },false);
    },
    methods: {
      // 图片
      getImg(){
        let _this = this;
        if(_this.imgArr.length==9) {
          this.$swal({
            type: 'error',
            showCancelButton: false,
            text: '最多只能添加九张图片!',
            confirmButtonText: '确定'
          })
        } else {
          let event = event || window.event;
          let file = event.target.files[0];
          let reader = new FileReader();
          //转base64
          reader.onload = function(e) {
            _this.imgArr.push(e.target.result);
            if(_this.imgArr.length >0){
              _this.showImgs = true
            }
          }
          reader.readAsDataURL(file);
        }
      },
      //删除图片
      delSingleImg(index){
        this.imgArr.splice(index,1);
        if(this.imgArr.length ==0 ){
          this.showImgs=false
        }
      },
      showImg ()  {
        $("#addImg").click()
      },

      // 艾特
      showFans () {
        $('#myModal').modal('show')
        this.aite = true
        this.article = false
        this.recipe = false
      },
      clickFocus (index) {
        if(this.selectPeople.length >=2) {
          this.$swal({
            type: 'error',
            showCancelButton: false,
            text: '最多只能艾特两个人!',
            confirmButtonText: '确定'
          })
        }else{
          this.selectPeople.push(this.focus[index].name)
        }
      },
      clickFans (index) {
        if(this.selectPeople.length >=2) {
          this.$swal({
            type: 'error',
            showCancelButton: false,
            text: '最多只能艾特两个人!',
            confirmButtonText: '确定'
          })
        }else {
          this.selectPeople.push(this.fans[index].name)
        }
      },
      canclePeople () {
        this.selectPeople = []
      },
      confirmPeople () {
        this.showPeople = true
        $('#myModal').modal('hide')
      },
      delPeople (index) {
        this.selectPeople.splice(index,1)
        if(this.selectPeople.length==0) {
          this.showPeople = false
        }
      },

      // 文章
      showArticles () {
        $('#myModal').modal('show')
        this.aite = false
        this.article = true
        this.recipe = false
      },
      clickArt (index) {
        if(this.selectArt.length >=2) {
          this.$swal({
            type: 'error',
            showCancelButton: false,
            text: '最多只能选择两篇文章!',
            confirmButtonText: '确定'
          })
        }else{
          this.selectArt.push(this.articles[index].name)
        }
      },
      cancleArt () {
        this.selectArt = []
      },
      confirmArt () {
        this.showArticle = true
        $('#myModal').modal('hide')
      },
      delArt (index) {
        console.log("删除")
        this.selectArt.splice(index,1)
        if(this.selectArt.length==0) {
          this.showArticle = false
        }
      },

      // 菜谱
      showRecipes () {
        $('#myModal').modal('show')
        this.aite = false
        this.article = false
        this.recipe = true
      },
      clickRecipe (index) {
        if(this.selectRecipe.length >=2) {
          this.$swal({
            type: 'error',
            showCancelButton: false,
            text: '最多只能选择两篇文章!',
            confirmButtonText: '确定'
          })
        }else{
          this.selectRecipe.push(this.recipes[index].name)
        }
      },
      cancleRecipe () {
        this.selectRecipe = []
      },
      confirmRecipe () {
        this.showRecipe = true
        $('#myModal').modal('hide')
      },
      delRecipe (index) {
        this.selectRecipe.splice(index,1)
        if(this.selectRecipe.length==0) {
          this.showRecipe = false
        }
      },
    },
    components: {
      Emotion
    }
  }
</script>

<style lang="scss" scoped>
  textarea {
    resize: none;
  }
  * {
    outline: none;
  }
  /*头部*/
  .createTitle {
    width: 900px;
    min-height: 30px;
    margin: 40px auto 0;
  }

  .createTitle:before,
  .createTitle:after {
    content: '';
    display: table;
    clear: both;
  }

  .createTitle > h2 {
    display: inline-block;
    font-size: 24px;
  }

  .createTitle > span {
    font-size: 15px;
    padding: 0px 10px;
  }

  .bread {
    float: right;
    line-height: 12px;
    padding: 10px 0;
    font-size: 16px;
    color: #575757;
  }

  .bread > a {
    color: #575757;
  }
  .creContent {
    width: 1000px;
    margin: 0px auto;
    min-height: 500px;
    background-color: white;
    border: 1px solid #efebe9;
    padding: 0 40px;
    position: relative;
  }
  .creContent > .form-group {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .text {
    display: block;
    width: 100%;
    resize: none;
    box-sizing: border-box;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 8px;
    min-height: 300px;
  }
  .icon {
    margin: 10px 0px;
    position: relative;
  }
  .icon i{
    font-size: 24px;
    margin-right: 10px;
    vertical-align: top;
  }
  .icon > span {
    color: #9d9d9d;
    line-height: 24px;
    font-size: 15px;
    vertical-align: top;
  }
  .selectSpan {
    background-color: #337ab7;
    color: white;
    margin-right: 15px;
    padding: 7px 30px 7px 10px;
    border-radius: 10px;
    max-width: 200px;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    position: relative;
  }
  .selectSpan>button {
    background-color: #337ab7;
    border: unset;
    margin-left: 5px;
    position: absolute;
    vertical-align: middle;
    right: 0;
  }
  .modal-content {
    margin-top: 50px;
  }
  .modal-header > h4 {
    font-size: 18px;
  }
  .modal-body {
    float: left;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .modal-body>div {
    float: left;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    padding: 5px;
    max-height: 350px;
    overflow-y: scroll;
    background-color: #f9f9f9;
  }
  .focus,.fans {
    width: 48%;
  }
  .modal-body>div::-webkit-scrollbar {
    display: none;
  }
  .aite {
    margin-top: 30px;
  }
  .modal-body>div>span {
    padding: 0 5px;
    color: #337ab7;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
  }
  .modal-body>div>h2 {
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
  }
  .text-place {
    height: 800px;
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 8px;
    background: #ddd5d5;
  }

  .text-place p {
    display: flex;
    align-items: center;
    margin: 0;
  }
  .clearboth::after{
    content:"";
    display:block;
    clear:both;
  }

  .image-view{
    width: 100%;
    min-height:150px;
    margin:10px auto;
    padding: 10px 0px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  .image-view:before,
  .image-view:after {
    content: '';
    display: table;
    clear: both;
  }
  .image-view .item {
    position:relative;
    float:left;
    height:150px;
    width:18.8%;
    margin: 5px;
  }
  .image-view .item .cancel-btn{
    position:absolute;
    right:-7px;
    top:-7px;
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
    height:100%;
  }
  .image-view .view{
    clear:both;
    min-height: 150px;
    /*background-color: #337ab7;*/
    margin: 0 auto;
    padding: 0px 10px;
  }
  .view:before,
  .view:after {
    content: '';
    display: table;
    clear: both;
  }
  .creContent>button {
    width: 100px;
    background-color: #844f33;
    margin: 0 auto 20px;
    color: white;
    font-size: 16px;
  }
</style>
