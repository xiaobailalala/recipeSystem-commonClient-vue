<template>
    <div>
      <div class="recipeHeader">
        <img src="static/images/recipeDetail/headerImg.png" alt="">
        <div class="recipeTitle">
          <h2>虾扯蛋</h2>
          <p>
            天冷要吃肉，但是吃肉也要讲究科学，因为肉中的脂肪含量很高了，即使瘦肉也一样有脂肪。就像排骨，香，但是如果再过油炸或者煎，那岂不是热量更高啦！所以，我就喜欢做又简单又少油少盐的食物。吃惯了家里的饭菜，我家那位和儿子都不喜欢吃外面的，偶尔一顿外食也只是为了采采风，看看人家有什么新花样，多吃几口他们都会喊太油腻。所以，今天的这盘排骨清淡入味不油腻噢！</p>
          <p>
            <span>135774</span>浏览
            <span>4691</span>收藏
          </p>
          <button type="button" class="btn">
            <i class="iconfont icon-star"></i>
            收藏
          </button>
        </div>
    </div>
      <div class="recipeProcess">
        <div class="author">
          <img src="static/images/recipeDetail/headImg.png" alt="">
          <h4>米瑞的美食日记 <span>2018.07.08</span></h4>
          <i class="iconfont icon-nv"></i>
        </div>
        <div class="tips">
          <label>所属类别</label>
          <span>主食->饼->肉夹馍</span>
          <span>主食->饼->手抓饼</span>
        </div>
        <div class="tips">
          <label>小贴士</label>
          <span>低糖</span>
          <span>高盐</span>
        </div>
        <div class="material">
          <p>主料</p>
          <li v-for="(item,index) in mater" :key="index">{{item.name}}<span>{{item.number}}</span></li>
        </div>
        <div class="left">
          <div class="process">
            <p>虾扯蛋的做法步骤</p>
            <li v-for="(item,index) in process" :key="index">
              <img :src="item.img" alt="">
              <span>{{index+1}}</span>
              <p>
                {{item.content}}
              </p>
            </li>
            <button type="button" class="btn btn-warning" @click="goto('/recipes/recipeDetail/subProduction')">上传我做的的这道菜</button>
          </div>
          <div class="comment">
            <p>虾扯蛋的评论</p>
            <div>
              <img src="static/images/recipeDetail/browerImg.png" alt="">
              <textarea class="form-control" rows="5" placeholder="没有你的评论是不完整的"></textarea>
              <button type="button" class="btn btn-warning">{{btnText}}</button>
              <span v-show="isReply">正在回复 {{reply}} 的评论...</span>
              <span v-show="isReply" @click="cancleReply">x</span>
            </div>
            <li v-for="(item,index) in comment" :key="index">
              <img :src="item.img" alt="">
              <p class="who">
                <span>{{item.name}}</span>
                <span>{{item.time}}</span>
                <a v-show="isId">删除</a>
                <a @click="showReply(index)">回复</a>
              </p>
              <p class="content">{{item.content}}</p>
            </li>
          </div>
        </div>
        <div class="right">
          <div class="others">
            <p>收藏了该菜谱的人还收藏了:</p>
            <li v-for="(item,index) in others" :key="index">
              <img :src="item.img" alt="">
              <p>{{item.title}}</p>
              <span>{{item.collect}}收藏</span>
            </li>

          </div>
          <div id="demoContent">
            <div class="effect">
              <div id="topMarquee" class="topLoop">
                <div class="hd">
                  <span>相关作品</span>
                  <i class="iconfont icon-xiangshang next"></i>
                  <i class="iconfont icon-xiangxia prev"></i>
                </div>
                <div class="bd">
                  <ul class="picList">
                    <li>
                      <div class="pic"><a href=""><img src="static/images/recipeDetail/ad1.jpg"/></a></div>
                      <div class="title"><a href="">iphone疯抢诶</a></div>
                    </li>
                    <li>
                      <div class="pic"><a href=""><img src="static/images/recipeDetail/ad2.jpg"/></a></div>
                      <div class="title"><a href="">数码家电厮杀呀呀呀</a></div>
                    </li>
                    <li>
                      <div class="pic"><a href=""><img src="static/images/recipeDetail/ad3.jpg"/></a></div>
                      <div class="title"><a href="">备战双十一</a></div>
                    </li>
                    <li>
                      <div class="pic"><a href=""><img src="static/images/recipeDetail/ad4.jpg"/></a></div>
                      <div class="title"><a href="">冬季热卖</a></div>
                    </li>
                  </ul>
                </div>
              </div>
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
      mater: [
        {
          id: 1,
          name: '虾',
          number: '12只'
        },
        {
          id: 1,
          name: '鸡蛋',
          number: '1枚'
        },
        {
          id: 1,
          name: '鹌鹑蛋',
          number: '12'
        },
        {
          id: 0,
          name: '鸡粉或味精',
          number: '0.2g'
        },
        {
          id: 1,
          name: '中筋面粉',
          number: '13g'
        },
        {
          id: 0,
          name: '玉米淀粉',
          number: '13g'
        },
        {
          id: 0,
          name: '糖',
          number: '适量'
        },
        {
          id: 0,
          name: '黑胡椒',
          number: '适量'
        },
        {
          id: 0,
          name: '泡打粉',
          number: '0.7g'
        },
        {
          id: 0,
          name: '盐',
          number: '0.5g'
        }
      ],
      process: [
        {
          img: 'static/images/recipeDetail/first.png',
          content: '准备好所有的材料，并且将小葱切成葱花，将大蒜切成蒜末，盛盘准备好。'
        },
        {
          img: 'static/images/recipeDetail/second.png',
          content: '这一步很重要，嫩而不碎的原因】将豆腐洗干净，切成小方块。锅中放入适量水，大火烧开，加一勺盐，将豆腐块倒入锅中，焯一下，然后盛出沥干水分。为什么要焯水呢？有两个原因，一个是可以去除豆腥味，另一方面加盐焯水可以去除豆腐中多余的水分，使得豆腐更有韧性更嫩滑，从而降低烹饪时的破损率。想要豆腐嫩而不碎，一定要做这一步哦！'
        },
        {
          img: 'static/images/recipeDetail/third.png',
          content: '锅中倒入适量花生油，油热后，放入花椒粒，小火炒香。'
        },
        {
          img: 'static/images/recipeDetail/forth.png',
          content: '然后收汁，汤汁收到一半时，淀粉加水制成水淀粉倒入锅中进行勾芡，汤汁浓稠，加入适量的味精提鲜，关火。'
        },
        {
          img: 'static/images/recipeDetail/fifth.png',
          content: '加入郫县豆瓣酱，将酱料炒香炒匀之后，再放入辣椒面炒至均匀。'
        },
        {
          img: 'static/images/recipeDetail/final.png',
          content: '然后往锅中倒入适量清水，放入少许生抽和适量的盐，大火烧开。'
        },
      ],
      others: [
        {
          img: 'static/images/recipeDetail/about.png',
          title: '全国人民都爱的早餐，你一学就会',
          collect: '2165'
        },
        {
          img: 'static/images/recipeDetail/about.png',
          title: '胡萝卜鸡肉酥',
          collect: '2165'
        },
        {
          img: 'static/images/recipeDetail/about.png',
          title: '土豆牛肉盒子',
          collect: '2165'
        },
        {
          img: 'static/images/recipeDetail/about.png',
          title: '宝宝版香蕉派',
          collect: '2165'
        },
        {
          img: 'static/images/recipeDetail/about.png',
          title: '芝士酱爆鸡排',
          collect: '2165'
        },
        {
          img: 'static/images/recipeDetail/about.png',
          title: '麻婆豆腐',
          collect: '2165'
        }
      ],
      comment: [
        {
          img:'static/images/recipeDetail/commentImg.png',
          name: '小可爱',
          time: '2018-12-01 05:24:56',
          content: '看着看着就好吃看着就好吃看着就好吃看着就好吃看着就好吃看着就好吃看着就好吃看着就好吃看着就好吃看着就好吃就好吃'
        },
        {
          img:'static/images/recipeDetail/commentImg.png',
          name: '看到我请叫我去背单词',
          time: '2018-12-01 05:24:56',
          content: '看着就好吃'
        },
        {
          img:'static/images/recipeDetail/commentImg.png',
          name: '小右',
          time: '2018-12-01 05:24:56',
          content: '看着就好吃'
        },
        {
          img:'static/images/recipeDetail/commentImg.png',
          name: '工号9527',
          time: '2018-12-01 05:24:56',
          content: '看着就好吃'
        },
        {
          img:'static/images/recipeDetail/commentImg.png',
          name: 'ffgehge',
          time: '2018-12-01 05:24:56',
          content: '看着就好吃'
        }
      ],
      btnText: '评论',
      isId: true,
      isReply:false,
      reply:''
    }
  },
  mounted:function () {
    $('#topMarquee').slide({
      mainCell: '.bd ul',
      effect: 'topMarquee',
      vis: 3,
      interTime: 40,
      autoPlay: true
    })
  },
  methods: {
    showReply (index) {
      this.reply = this.comment[index].name
      this.isReply = true
      this.btnText = '回复'
    },
    cancleReply () {
      this.btnText = '评论',
        this.isReply = false
    },
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped>
  .recipeHeader {
    width: 1000px;
    margin: 30px auto;
    background-color: white;
    position: relative;
    min-height: 450px;
    padding: 25px 40px 25px 680px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .recipeHeader>img {
    position: absolute;
    left: 40px;
    background-color: #337ab7;
  }
  .recipeTitle {
    width: 280px;
    position: absolute;
    /*bottom: 100px;*/
  }
  .recipeTitle>h2 {
    padding: 0px 5px 20px;
    border-bottom: 1px solid #666666;
    font: 24px 微软雅黑, YaHei, Arial, Helvetica, sans-serif;
  }
  .recipeTitle>p {
    font-size: 15px;
    line-height: 1.3;
    margin-top: 20px;
    margin-bottom: 30px;
    color: #666666;
    max-height: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
  }
  .recipeTitle>p>span {
    font-size: 24px;
    padding: 0px 5px;
    color: #f46c31;
  }
  .recipeTitle>p>span:last-of-type {
    margin-left: 20px;
  }
  .recipeTitle>button {
    width: 100%;
    background-color: #f46c31;
    color: white;
    font-size: 16px;
  }
  .recipeTitle>button:hover {
    background-color: #ff6f33;
    color: white;
  }
  .recipeProcess {
    width: 1000px;
    margin: 0 auto;
    background-color: white;
    padding: 25px 40px;
  }
  .author {
    position: relative;
    padding-left: 65px;
    min-height: 50px;
    margin-bottom: 15px;
  }
  .author>img {
    position: absolute;
    left: 0px;
    width: 50px;
  }
  .author>h4 {
    font-size: 16px;
    color: #EC971F;
  }
  .author>h4>span {
    float: right;
  }
  .author>i {
    color: hotpink;
    font-weight: bold;
    font-size: 24px;
    position: absolute;
    bottom: 0px;
  }
  .tips {
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
  }
  .tips>label {
    background-color: #f69f1f;
    height: 30px;
    line-height: 30px;
    padding: 0px 10px;
    border-radius: 10px;
    margin-right: 15px;
  }
  .tips>span {
    color: #666666;
    margin-right: 15px;
  }
  .material {
    width: 100%;
    margin-top: 15px;
  }
  .material>p {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    border-top: 1px solid #ccc;
    height: 48px;
    border-bottom: 1px solid #ccc;
    line-height: 48px;
    padding-left: 20px;
    background-color: #F8F8F8;
  }
  .material>li {
    height: 48px;
    line-height: 48px;
    width: 50%;
    display: inline-block;
    padding: 0px 20px;
    border-bottom: 1px solid #ccc;
  }
  .material>li>span {
    float: right;
    color: #777;
  }
  .material>li:nth-child(odd) {
    float: right;
    border-left: 1px solid #ccc;
  }
  .left {
    width: 65%;
    display: inline-block;
  }
  .right {
    width: 30%;
    float: right;
  }
  .process {
    margin-top: 20px;
    width: 100%;
    display: inline-block;
    vertical-align: top;
  }
  .process:before,
  .process:after {
    content: '';
    display: table;
    clear: both;
  }
  .process>p,
  .comment>p {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    height: 48px;
    line-height: 48px;
  }
  .process>li {
    min-height: 170px;
    padding-left: 200px;
    position: relative;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
  }
  .process>li>img {
    position: absolute;
    border-radius: 5px;
    left: 0px;
    width: 180px;
    height: 150px;
    top: 0px;
  }
  .process>li>span {
    display: inline-block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 20px;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  .process>li>p {
    margin-bottom: 20px;
    line-height: 1.3;
  }
  .process>button {
    float: right;
  }
  .others {
    display: inline-block;
    width: 100%;
    vertical-align: top;
    margin-top: 100px;
  }
  .others>p {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    height: 48px;
    line-height: 48px;
  }
  .others>li {
    padding-left: 70px;
    position: relative;
    min-height: 75px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ccc;
  }
  .others>li>img {
    width: 60px;
    position: absolute;
    left: 0;
  }
  .others>li>p {
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: 5px;
    overflow: hidden;
  }
  .others>li>span {
    color: #666666;
    font-size: 14px;
    position: absolute;
    bottom: 25px;
    border-style: dashed;
  }
  .comment {
    width: 100%;
    margin-top: 50px;
  }
  .comment:before,
  .comment:after {
    content: '';
    display: table;
    clear: both;
  }
  .comment>div {
    position: relative;
    padding-left: 70px;
  }
  .comment>div>img {
    position: absolute;
    width: 50px;
    left: 0;
  }
  .comment>div>textarea {
    resize: unset;
    margin-bottom: 20px;
  }
  .comment>div>span {
    font-size: 15px;
    color: #666;
    margin-left: 15px;
  }
  .comment>div>span:last-of-type {
    font-size: 18px;
    color: red;
    cursor: pointer;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 16px;
    text-align: center;
    margin-left: 0;
    border: 1px solid red;
    border-radius: 50%;
  }
  .comment>li {
    border-bottom: 1px solid #ccc;
    position: relative;
    padding-left: 65px;
    min-height: 70px;
    margin: 20px 0px;
  }
  .comment>li>img {
    position: absolute;
    left: 0px;
    width: 50px;
  }
  .who {
    font-size: 14px;
    padding-top: 5px;
  }
  .who>span:first-of-type {
    color: #844f33;
    cursor: pointer;
  }
  .who>a {
    margin-left: 15px;
    color: #844f33;
    cursor: pointer;
  }
  .who>a:hover {
    color: red;
  }
  .who>span:last-of-type {
    margin-left: 15px;
    color: #777;
  }
  .content {
    margin-top: 15px;
    font-size: 15px;
    line-height: 1.3;
    margin-bottom: 20px;
  }
  #demoContent {
    width: 100%;
    margin-top: 100px;
  }
  #demoContent:before,
  #demoContent:after {
    content: '';
    display: table;
    clear: both;
  }
  .effect {
    width: 100%;
  }

  .topLoop {
    overflow: hidden;
    position: relative;
    /*border: 1px solid #ccc;*/
    width: 100%;
  }

  .topLoop .hd {
    overflow: hidden;
    height: 30px;
  }
  .hd span {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
  }
  .topLoop .hd .prev, .topLoop .hd .next {
    display: block;
    width: 20px;
    height: 30px;
    line-height: 10px;
    float: right;
    margin-right: 10px;
    margin-top: 10px;
    overflow: hidden;
    cursor: pointer;
  }

  .topLoop .hd .next {
  }

  .topLoop .bd {
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px 20px;
  }

  .topLoop .bd ul {
    overflow: hidden;
    zoom: 1;
    /*background-color: #337ab7;*/
  }

  .picList li {
    width: 100%;
    height: 170px;
    margin-bottom: 20px;
    padding-top: 10px;
    border-top: 1px solid #ddd;
  }

  .picList .pic {
    text-align: center;
    line-height: 0px;
    width: 100%;
    height: 150px;
  }

  .picList .pic img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    padding: 2px;
    border-radius: 10px;
  }
  .title a {
    color: #666;
    font-size: 16px;
  }

  .picList .title {
    line-height: 24px;
  }
</style>
