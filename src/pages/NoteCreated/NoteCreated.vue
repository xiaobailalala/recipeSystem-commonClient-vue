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
        <i class="iconfont icon-emoji" @click="showEmoji" data-toggle="tooltip" data-placement="bottom" title="emoji"></i>
        <i class="iconfont icon-image" @click="showImg" data-toggle="tooltip" data-placement="bottom" title="添加图片"></i>
        <i class="iconfont icon-aite" data-toggle="tooltip" data-placement="bottom" title="@好友"></i>
        <i class="iconfont icon-iconjing" data-toggle="tooltip" data-placement="bottom" title="#文章名称"></i>
        <i class="iconfont icon-svgwrite" data-toggle="tooltip" data-placement="bottom" title="||食谱名称"></i>
      </p>
      <div class="emotion" v-show="emoji" @click="displayEmoji">
        <emotion @emotion="handleEmotion" :height="200"></emotion>
      </div>
      <!--<p>效果显示框</p>-->
      <!--<div class="text-place">-->
        <!--&lt;!&ndash; /\#[\u4E00-\u9FA5]{1,3}\;/gi 匹配出含 #XXX; 的字段 &ndash;&gt;-->
        <!--<p v-html="content.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)"></p>-->
      <!--</div>-->
      <div class="image-view">
        <input type="file" style="display: none" id="addImg" @change="getImgBase()">
        <div class="view">
          <div class="item" v-for="(item, index) in imgArr">
            <span class="cancel-btn" @click="delImg(index)">x</span>
            <img :src="item">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Emotion from '../../components/Emotion/index'
  export default {
    data () {
      return {
        content: '',
        comment: '',
        emoji: false,
        imgArr: []
      }
    },
    methods: {
      handleEmotion (i) {
        this.content += i
      },
      // 将匹配结果替换表情图片
      emotion (res) {
        let word = res.replace(/\#|\;/gi,'')
        const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
        let index = list.indexOf(word)
        return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`
      },
      showEmoji() {
        this.emoji = !this.emoji
      },
      displayEmoji () {
        this.emoji = !this.emoji
      },
      getImgBase(){
        var _this = this;
        var event = event || window.event;
        var file = event.target.files[0];
        var reader = new FileReader();
        //转base64
        reader.onload = function(e) {
          _this.imgArr.push(e.target.result);
        }
        reader.readAsDataURL(file);
      },
      //删除图片
      delImg(index){
        this.imgBase64.splice(index,1);
      },
      showImg ()  {
        $("#addImg").click()
      }
    },
    components: {
      Emotion
    }
  }
</script>

<style lang="less" scoped>
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
    z-index: 1;
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
    padding: 5px 10px;
    border-radius: 8px;
    min-height: 300px;
  }
  .icon {
    margin: 10px 0px;
  }
  .icon i{
    font-size: 24px;
    margin-right: 10px;
  }
  .creContent > .emotion {
    position: absolute;
    z-index: 99;
    width: 40%;
    background-color: white;
  }
  .text-place {
    height: 80px;
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
    height:300px;
    margin:50px auto;
    border: 1px solid red;
  }
  .image-view .item {
    position:relative;
    float:left;
    height:170px;
    width:19%;
    margin: 10px 10px 0 0;
    border: 1px solid rebeccapurple;
  }
  .image-view .item:nth-of-type(5) {
    margin-right: 0px;
  }
  .image-view .item .cancel-btn{
    position:absolute;
    right:0;
    top:0;
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
  }
</style>
