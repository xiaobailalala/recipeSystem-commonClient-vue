<template>
  <div class="nodeContent">
    <div id="slideBox" class="slideBox">
      <div class="hd">
        <ul><li>1</li><li>2</li><li>3</li></ul>
      </div>
      <div class="bd">
        <ul>
          <li><img src="static/images/nodeDetail/1.jpg" /></li>
          <li><img src="static/images/nodeDetail/2.jpg" /></li>
          <li><img src="static/images/nodeDetail/3.jpg" /></li>
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
        <p>
          <span>135774</span>浏览
          <span>4691</span>收藏
        </p>
      </div>
    </div>

    <div class="textContent">
      <pre>
        对于我这种情愿早起跑步，也要到处寻觅美食的吃货来说，“拔草”是人生的一大快乐。
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
粗糖音乐餐厅酒吧(苏州湾店)
      </pre>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted:function () {
      $('.slideBox').slide({mainCell: '.bd ul', effect: 'left', autoPlay: true})
    },
  }
</script>

<style>
  .nodeContent {
    width: 1000px;
    margin: 30px auto;
    background-color: #fff;
    padding: 30px;
  }

  .textContent > pre {
    display: block;
    overflow: auto;
    padding: 5px 10px;
    border: 1px solid #eee;
    whitewhite-space: pre-wrap; /* css-3 */
    whitewhite-space: -moz-pre-wrap;
    /* Mozilla, since 1999 *
     whitewhite-space:-pre-wrap; /* Opera 4-6 */
    whitewhite-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
    white-space: pre-wrap; /* Firefox */
  }
  .slideBox {
    width: 47%;
    display: inline-block;
    height: 350px;
    margin-right: 30px;
    overflow: hidden;
    position: relative;
    border: 1px solid #ddd;
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
    width: 15px;
    height: 15px;
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
  }


  .right {
    width: 49%;
    display: inline-block;
  }
  .author {
    padding: 15px;
    width: 100%;
    background-color: silver;
  }
  .author>h2 {
    position: relative;
    padding-left: 65px;
    height: 50px;
    line-height: 50px;
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
    background-color: silver;
    margin-top: 20px;
  }
  .title {
    font-size: 18px;
    height: 48px;
    line-height: 48px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .nodeTitle>p:last-of-type {
  }
</style>
