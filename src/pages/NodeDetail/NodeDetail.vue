<template>
  <div class="nodeContent">
    <div id="slideBox" class="slideBox">
      <div class="hd">
        <ul>
          <li v-for="(item,index) in slides" :key="index">
          </li>
        </ul>
      </div>
      <div class="bd">
        <ul>
          <li v-for="(item,index) in slides" :key="index">
            <img :src="item.img"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="author">
        <h2>
          <img src="static/images/nodeDetail/1.jpg" alt="">
          <span>小可爱</span>
          <button type="button" class="btn btn-warning">+关注</button>
        </h2>
        <p class="authorTotal">
          <span><a href="">555</a>日记</span>
          <span><a href="">116</a>粉丝</span>
        </p>
      </div>
      <div class="nodeTitle">
        <p class="title">打卡最美网红书店->隐藏在魔都英伦风小镇里的钟书阁</p>
        <p class="spans">
          <span><a href="">135774</a>浏览</span>
          <span><a href="">4691</a>收藏</span>
          <span><a href="">43544</a>点赞</span>
        </p>
        <div class="buttons">
          <button type="button" class="btn btn-warning">收藏</button>
          <button type="button" class="btn btn-warning">点赞</button>
        </div>
      </div>
    </div>
    <div class="textContent">
      <pre>对于我这种情愿早起跑步，也要到处寻觅美食的吃货来说，“拔草”是人生的一大快乐。
“粗糖”同样是一家集西餐、下午茶、酒吧为一体的音乐餐吧。但他却又如此的与众不同。餐吧的设计以法式风格为主，弥漫着复古、自然主义的调调，最突出的特征是贵族气十足。这种“贵”散发着人文和古典气息，舒适、优雅、安逸是它的内在气质。在这里用餐，你会感觉像在自己那设计豪华的法式别墅里用餐，温馨、闲适。听着优美的音乐，和三五好友举杯同饮。不喝酒就，可以来杯果香味浓郁的“莫吉托”或水果苏打。喝酒的，想刺激一点的，可以来杯“深水榨弹”或“僵尸”等等。酒水单上真的是应有尽有啊！
这里的服务生大多是男生，面带笑容、服务周到，特别有耐心，上菜有一定的模式，撤空盘、换骨碟都很及时，应该给一个大大的。
今天没有让服务生推荐菜品，按自己的喜欢点了几个，几乎每个都色香味俱全。
墨西哥牛肉饼（图5)金黄的面皮薄如纸，夹着满满的一层牛肉馅。外皮酥脆，里层的面皮很有嚼劲。咬上一口，肉汁四溢。粘上奶油，奶香感爆棚。
法式焗口菇（图6)特别特别喜欢的一道菜，不止摆盘很，味道更。口菇中加入腌制过的肉末，铺上小块芝士片 垫上洋葱丝，口菇吸收了肉汁，鲜嫩香甜，伴随着芝士的丝丝奶香和洋葱特有味道和甘甜。让你的舌尖享受多层次的味觉，但又感觉着他们的融合。完全可以给。
海鲜冬阴功汤（图7)加入了茴香的冬阴功汤，味道正宗，海鲜料也很足。鲜虾、蛤蜊、鱼肉，满满的食材！
榴莲披萨（图8)这是我至今吃过的，最好吃的榴莲披萨。意式薄底，进口芝士搭配上姜黄色的榴莲果肉，味浓，奶油味四溢，果肉拥有凝脂似的质感，层次丰富，入口嫩滑细致，外形、色泽、肉质近乎完美。
粗糖梅汁肋排（图9)酸酸甜甜，猪排很大块，但很嫩，一点都不会柴。肋排应该提前腌制过，所以很入味。
这家餐吧，绝对值得再次光顾。环境好、服务好、菜品好。妥妥的“三好餐吧”，一起来享受法式浪漫吧！
地址:太湖新城湖景街苏州湾美食新天地翡翠石
粗糖音乐餐厅酒吧(苏州湾店)</pre>
      <p>
        <span v-for="(item,index) in aite" :key="index"><i class="iconfont icon-aite"></i>{{item.name}}</span>
        <span v-for="(item,index) in article" :key="index"><i class="iconfont icon-iconjing"></i>{{item.name}}</span>
        <span v-for="(item,index) in recipe" :key="index"><i class="iconfont icon-svgwrite"></i>{{item.name}}</span>
      </p>
      <h4>2018-09-13 15:39</h4>
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
</template>

<script>
  export default {
    data() {
      return {
        slides: [
          {
            img: 'static/images/nodeDetail/1.jpg'
          },
          {
            img: 'static/images/nodeDetail/6.jpg'
          },
          {
            img: 'static/images/nodeDetail/3.jpg'
          },
          {
            img: 'static/images/nodeDetail/4.jpg'
          },
          {
            img: 'static/images/nodeDetail/5.jpg'
          }
        ],
        aite: [
          {
            name: '我的平底锅呢'
          },
          {
            name: '泡椒泡椒泡椒'
          }
        ],
        recipe: [
          {
            name: '海鲜冬阴功汤'
          },
          {
            name: '法式焗口菇'
          }
        ],
        article: [
          {
            name: '音乐餐吧'
          },
          {
            name: '美食新天地'
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
      $('.slideBox').slide({mainCell: '.bd ul', effect: 'left', autoPlay: true})
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
      }
    }
  }
</script>

<style>
  .nodeContent {
    width: 1000px;
    margin: 30px auto;
    background-color: #fff;
    padding: 30px;
  }
  .slideBox {
    width: 47%;
    display: inline-block;
    height: 350px;
    margin-right: 30px;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    vertical-align: top;
  }
  .slideBox .hd {
    height: 15px;
    overflow: hidden;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 1;
  }
  .slideBox .hd ul {
    overflow: hidden;
    zoom: 1;
    float: left;
  }
  .slideBox .hd ul li {
    float: left;
    margin-right: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    line-height: 14px;
    text-align: center;
    background: #fff;
    cursor: pointer;
  }
  .slideBox .hd ul li.on {
    background: #f00;
    color: #fff;
  }
  .slideBox .bd {
    position: relative;
    height: 100%;
    z-index: 0;
  }
  .slideBox .bd img {
    width: 100%;
    height: 350px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 10px;
  }


  .right {
    width: 49%;
    display: inline-block;
  }
  .author {
    padding: 15px;
    width: 100%;
    background-color: #F5F5F5;
    border-radius: 5px;
  }
  .author>h2 {
    position: relative;
    padding-left: 60px;
    height: 50px;
    line-height: 50px;
  }
  .author>h2>span {
    font-weight: bold;
  }
  .author>h2>img {
    position: absolute;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .author>h2>button {
    position: absolute;
    right: 0;
    top: 8px;
  }
  .authorTotal {
    width: 100%;
    height: 48px;
    margin-top: 20px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    line-height: 48px;
  }
  .authorTotal>span {
    width: 49%;
    border-right: 1px solid #ccc;
    display: inline-block;
    text-align: center;
  }
  .authorTotal>span:last-of-type{
    border-right: none;
  }
  .nodeTitle {
    width: 100%;
    border-radius: 5px;
    background-color: #F5F5F5;
    margin-top: 30px;
    padding: 10px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    height: 45px;
    line-height: 45px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .spans {
    height: 38px;
    margin-top: 10px;
    line-height: 38px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .spans>span {
    color: #333;
    font-size: 14px;
    display: inline-block;
    width: 32%;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .spans>span:last-of-type {
    border-right: none;
  }
  .buttons {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }
  .buttons>button {
    width: 48%;
  }

  .textContent {
    margin-top: 25px;
  }
  .textContent > pre {
    display: block;
    overflow: auto;
    line-height: 1.5;
    whitewhite-space: pre-wrap; /* css-3 */
    whitewhite-space: -moz-pre-wrap;
    whitewhite-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
    white-space: pre-wrap; /* Firefox */
    background-color: unset;
    margin-bottom: 10px;
  }
  .textContent>p {
    color: #337ab7;
    height: 30px;
    line-height: 30px;
  }
  .textContent>p>span {
    margin-right: 20px;
  }
  .textContent > h4 {
    float: right;
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
  .comment>p {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    height: 48px;
    line-height: 48px;
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
</style>
