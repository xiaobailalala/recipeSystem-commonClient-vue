<template>
  <div>
    <div class="shopHeader">
      <!--图片放大-->
      <div class="box">
        <div class="tb-booth tb-pic tb-s310">
          <a href="javascript:;">
            <img :src="firstImg" alt="食物" :rel="firstImg" class="jqzoom"/>
          </a>
        </div>
        <ul class="tb-thumb">
          <li class="tb-selected" v-for="(item,index) in imgs" :key="index">
            <div class="tb-pic tb-s40">
              <a href="javascript:;">
                <img :src="item.img"
                     :mid="item.img"
                     :big="item.img">
              </a>
            </div>
          </li>

        </ul>
      </div>
      <!--放大结束-->

      <div class="goods">
        <h3>大西冷1000g*2四斤牛腩肉新鲜包邮冷冻进口谷饲牛整块牛肉粒生鲜</h3>
        <p class="shopPrice"><span>￥119.80</span>
          <del>￥169.9</del>
          <span>包邮</span></p>
        <p>运费 <span>￥0.00</span></p>
        <tr>
          <td>月销量 <a href="">2706</a></td>
          <td>累计评价 <a href="">8116</a></td>
        </tr>
        <div class="taste">
          <span>口味</span>
          <div>
            <button type="button" class="btn btn-default">T骨牛排</button>
            <button type="button" class="btn btn-default">西冷牛排</button>
            <button type="button" class="btn btn-default">菲力牛排</button>
            <button type="button" class="btn btn-default">莎朗牛排</button>
            <button type="button" class="btn btn-default">肉眼牛排</button>
          </div>
        </div>
        <div id="d" class="Spinner">
          <a class="DisDe" href=")">
            <i>-</i>
          </a>
          <input class="Amount" value="1" autocomplete="off" maxlength="3">
          <a class="Increase" href="">
            <i>+</i>
          </a>
          <span>库存2707件</span>
        </div>
        <tr>
          <td>
            <button type="button" class="btn btn-warning">立即购买</button>
          </td>
          <td>
            <button type="button" class="btn btn-warning">加入购物车</button>
          </td>
        </tr>
      </div>

      <div class="shop">
        <div>
          <h2>大西冷旗舰店 <i class="iconfont icon-kefu"></i></h2>
          <div>
            <button type="button" class="btn btn-primary">进店逛逛</button>
            <button type="button" class="btn btn-primary">收藏店铺</button>
          </div>
        </div>
        <i class="iconfont icon-zan"></i>
        <h4>4654</h4>
      </div>
    </div>
    <div class="shopContent">
      <div class="content_caipu clearfix" id="pj">
        <h3>
          <span v-for="(item,index) in spans" :key="index"
                :style="{fontSize:item.size,fontWeight:item.weight}"
                @click="changeSize(index)">{{item.name}}</span>
        </h3>
        <i class="xtj"></i>
        <!-- <b class="xt_ys02"></b>-->
      </div>
      <div class="goodsDetail" v-show="showDetail">
        <section v-for="(item,index) in details" :key="index">
          <a href="">
            <img :src="item.img" alt="">
          </a>
          <pre>{{item.content}}</pre>
        </section>
      </div>
      <div class="goodsComment" v-show="!showDetail">
        <div class="score">
          <h3>与描述相符 <a href="">4.8</a></h3>
          <span>累计评价8116</span>
          <label class="radio-inline">
            <input type="radio" name="inlineRadioOptions" checked id="inlineRadio1" value="all" v-model="hasImg">全部
          </label>
          <label class="radio-inline">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="hasImg" v-model="hasImg">有图（4545）
          </label>
        </div>
        <div class="commentAll">
          <li v-for="(item,index) in commentFilter" :key="index">
            <div class="commentName">{{item.userName}}</div>
            <div class="commentConnent">
              <pre>{{item.userComment}}</pre>
              <ul v-show="item.commentImgs!=null && item.commentImgs!=''">
                <li v-for="(imgItem,imgIndex) in item.commentImgs" :key="imgIndex" @click="enlarge(index,imgIndex)">
                  <img :src="imgItem.img" alt="">
                </li>
              </ul>
              <div v-show="item.clickShowImg!=null && item.clickShowImg!='' ">
                <p @click="undisplay(index)">收起</p>
                <img :src="item.clickShowImg" alt="">
              </div>
              <p v-show="item.businessReply!=null && item.businessReply!='' ">
                <span>商家回复</span>
                {{item.businessReply}}
              </p>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        imgs: [
          {
            img:'static/images/shopDetail/01.jpg'
          },
          {
            img:'static/images/shopDetail/02.jpg'
          },
          {
            img:'static/images/shopDetail/03.jpg'
          },
          {
            img:'static/images/shopDetail/04.jpg'
          },
          {
            img:'static/images/shopDetail/05.jpg'
          }
        ],
        firstImg: 'static/images/shopDetail/01.jpg',
        showDetail: true,
        details: [
          {
            img: 'static/images/shopDetail/detail1.png',
            content: '让您的味蕾从此缭绕荣昌乳猪香\n' +
              'Let your taste buds * roll around the Rongchang suckling pig.\n' +
              '清朝康熙年间，烤乳猪是宫廷名菜，成为\n' +
              '“满汉全席”中的一道主要菜肴\n'
          },
          {
            img: 'static/images/shopDetail/detail2.png',
            content: '产品规格/ Product specifcation\n' +
              '产品名称:烤乳猪\n' +
              '产品配料:乳猪,食用盐,香幸料产品产地:重庆市荣昌区\n' +
              '食用方法:爆炒,蒸,烤等! !储存方式:零下18度冷冻'
          },
          {
            img: 'static/images/shopDetail/detail3.png',
            content: '[唇齿留香]停不下来\n' +
              '采用现代加工工艺，精心调味, 科学精致而成，让亲们吃到正宗荣昌烤乳猪的味道。\n'
          },
          {
            img: 'static/images/shopDetail/detail4.png',
            content: '[传承美味]新传奇\n' +
              '各位亲们都会担心食品安全问题，在这里，我们敢拍着胸脯跟您保证，荣昌烤乳猪400多年历史保存至今绝对安全!\n'

          },
          {
            img: 'static/images/shopDetail/detail5.png',
            content: '有些小作坊的烤乳猪猪膳味非常大，还有一股烟熏味， 有种臊味，而我们有(QS)食品生产许可证的，' +
              '绝小作坊制作加工，我只卖新鲜，现烤的动物检疫合格的荣昌熊猫香猪!坚决不:卖低价存货劣等猪，' +
              '让客户买的放心吃的安心，开心，倍有面!'
          }
        ],
        spans:[
          {
            name:'详情',
            size: '22px',
            weight: 'bold'
          },
          {
            name:'评价',
            size: '18px',
            weight: 'unset'
          }
        ],
        hasImg: 'all',
        comments: [
          {
            userName: '小可爱',
            userComment: '咋天收到货，包装很好。牛肉很新鲜。今天试吃一歺，很好。所以马上又拍3份，已享口福！物流神速，包装好，' +
              '很新鲜，炖了一袋，蛮香的，先把牛腩炖好，做牛肉面，土豆炖牛腩，萝卜炖牛腩，都很省事，也很美味。超级实惠，' +
              '双十一抢购的牛腩，卖家还送了牛排！意外的惊喜，包装特别仔细，还有一个专门的冰袋，顺丰发货，收货时，' +
              '宝贝很新鲜！特别满意',
            commentImgs: '',
            clickShowImg: '',
            businessReply: ''
          },
          {
            userName: '老司机',
            userComment: '好吃的牛肉早就收到了，因为工作和孩子，所以很忙，没有及时作出评价，现在上来应该也来得及哦，牛肉很好，' +
              '很新鲜，收到那天就煮了一包，放了大白菜，黑木耳，胡萝卜，颜色也很好看，我们一家晚上就都围这个牛肉汤吃晚饭啦！好吃！下次还会再来的。',
            commentImgs:[
              {
                img:'static/images/shopDetail/comment1.png'
              },
              {
                img:'static/images/shopDetail/comment2.png'
              },
              {
                img:'static/images/shopDetail/comment3.png'
              },
              {
                img:'static/images/shopDetail/comment4.png'
              },
            ],
            clickShowImg: '',
            businessReply: '日子脱缰一样飞奔，忙碌一周转瞬即过;调整睡眠保持精神，放松身心忘掉工作;' +
              '陪陪家人做做家务，约约朋友唠唠家常。【大西冷祝您幸福每一天】'
          }
          ,
          {
            userName: '带你去浪漫的土耳其',
            userComment: '给你个全5好评吧，卖家旺旺+短信催评价，有点烦人。卖家发的是顺丰特惠吧，其实也比较慢的，收到货的时候冰袋还是冰的，' +
              '但牛肉是半解冻的，我估计是现场真空包装好，没有冷冻直接就放倒了泡沫盒里面加一袋冰袋发出来的。已经吃掉一袋牛腩了，那一袋看着还比较肥，' +
              '但是打开解冻之后，感觉也不是很肥能接受，煮过之后感觉根本感觉不到肥。吃这家的牛腩之前，刚刚吃过一顿牛肉，菜市场买的新鲜的。' +
              '反正都是用电压力锅压出来的的总体感觉冷冻的还是不如新鲜的，口味上还差那么一点，这是家人说的。',
            commentImgs:[
              {
                img:'static/images/shopDetail/comment1.png'
              },
              {
                img:'static/images/shopDetail/comment2.png'
              },
              {
                img:'static/images/shopDetail/comment3.png'
              },
              {
                img:'static/images/shopDetail/comment4.png'
              },
            ],
            clickShowImg: '',
            businessReply: '女为悦己者容，肉为知己者生。大西冷 感谢你的真诚厚爱。牛儿吃草，' +
              '岁月静好，我们翘首以盼，期待亲的下次到来！ 【大西冷祝您幸福每一天】'
          }
          ,
          {
            userName: '还是太年轻',
            userComment: '好吃的牛肉早就收到了，因为工作和孩子，所以很忙，没有及时作出评价，现在上来应该也来得及哦，牛肉很好，' +
              '很新鲜，收到那天就煮了一包，放了大白菜，黑木耳，胡萝卜，颜色也很好看，我们一家晚上就都围这个牛肉汤吃晚饭啦！好吃！下次还会再来的。',
            commentImgs:[
              {
                img:'static/images/shopDetail/comment1.png'
              },
              {
                img:'static/images/shopDetail/comment2.png'
              },
              {
                img:'static/images/shopDetail/comment3.png'
              },
              {
                img:'static/images/shopDetail/comment4.png'
              },
            ],
            clickShowImg: '',
            businessReply: ''
          }
        ],
        commentFilter: [
          {
            userName: '小可爱',
            userComment: '咋天收到货，包装很好。牛肉很新鲜。今天试吃一歺，很好。所以马上又拍3份，已享口福！物流神速，包装好，' +
              '很新鲜，炖了一袋，蛮香的，先把牛腩炖好，做牛肉面，土豆炖牛腩，萝卜炖牛腩，都很省事，也很美味。超级实惠，' +
              '双十一抢购的牛腩，卖家还送了牛排！意外的惊喜，包装特别仔细，还有一个专门的冰袋，顺丰发货，收货时，' +
              '宝贝很新鲜！特别满意',
            commentImgs: '',
            clickShowImg: '',
            businessReply: ''
          },
          {
            userName: '老司机',
            userComment: '好吃的牛肉早就收到了，因为工作和孩子，所以很忙，没有及时作出评价，现在上来应该也来得及哦，牛肉很好，' +
              '很新鲜，收到那天就煮了一包，放了大白菜，黑木耳，胡萝卜，颜色也很好看，我们一家晚上就都围这个牛肉汤吃晚饭啦！好吃！下次还会再来的。',
            commentImgs:[
              {
                img:'static/images/shopDetail/comment1.png'
              },
              {
                img:'static/images/shopDetail/comment2.png'
              },
              {
                img:'static/images/shopDetail/comment3.png'
              },
              {
                img:'static/images/shopDetail/comment4.png'
              },
            ],
            clickShowImg: '',
            businessReply: '日子脱缰一样飞奔，忙碌一周转瞬即过;调整睡眠保持精神，放松身心忘掉工作;' +
              '陪陪家人做做家务，约约朋友唠唠家常。【大西冷祝您幸福每一天】'
          }
          ,
          {
            userName: '带你去浪漫的土耳其',
            userComment: '给你个全5好评吧，卖家旺旺+短信催评价，有点烦人。卖家发的是顺丰特惠吧，其实也比较慢的，收到货的时候冰袋还是冰的，' +
              '但牛肉是半解冻的，我估计是现场真空包装好，没有冷冻直接就放倒了泡沫盒里面加一袋冰袋发出来的。已经吃掉一袋牛腩了，那一袋看着还比较肥，' +
              '但是打开解冻之后，感觉也不是很肥能接受，煮过之后感觉根本感觉不到肥。吃这家的牛腩之前，刚刚吃过一顿牛肉，菜市场买的新鲜的。' +
              '反正都是用电压力锅压出来的的总体感觉冷冻的还是不如新鲜的，口味上还差那么一点，这是家人说的。',
            commentImgs:[
              {
                img:'static/images/shopDetail/comment1.png'
              },
              {
                img:'static/images/shopDetail/comment2.png'
              },
              {
                img:'static/images/shopDetail/comment3.png'
              },
              {
                img:'static/images/shopDetail/comment4.png'
              },
            ],
            clickShowImg: '',
            businessReply: '女为悦己者容，肉为知己者生。大西冷 感谢你的真诚厚爱。牛儿吃草，' +
              '岁月静好，我们翘首以盼，期待亲的下次到来！ 【大西冷祝您幸福每一天】'
          }
          ,
          {
            userName: '还是太年轻',
            userComment: '好吃的牛肉早就收到了，因为工作和孩子，所以很忙，没有及时作出评价，现在上来应该也来得及哦，牛肉很好，' +
              '很新鲜，收到那天就煮了一包，放了大白菜，黑木耳，胡萝卜，颜色也很好看，我们一家晚上就都围这个牛肉汤吃晚饭啦！好吃！下次还会再来的。',
            commentImgs:[
              {
                img:'static/images/shopDetail/comment1.png'
              },
              {
                img:'static/images/shopDetail/comment2.png'
              },
              {
                img:'static/images/shopDetail/comment3.png'
              },
              {
                img:'static/images/shopDetail/comment4.png'
              },
            ],
            clickShowImg: '',
            businessReply: ''
          }
        ],
      }
    },
    mounted: function () {
      $(document).ready(function () {
        $('.jqzoom').imagezoom()
        $('.tb-thumb li a').hover(function () {
          $(this).parents('li').addClass('tb-selected').siblings().removeClass('tb-selected')
          $('.jqzoom').attr('src', $(this).find('img').attr('mid'))
          $('.jqzoom').attr('rel', $(this).find('img').attr('big'))
        })
      })
    },
    watch: {
      hasImg (newValue) {
        if(newValue == 'hasImg'){
          this.commentFilter = this.comments.filter(item => {
            return item.commentImgs != '' && item.commentImgs != null
          })
        } else {
          this.commentFilter = this.comments

        }
      }
    },
    methods: {
      changeSize (index) {
        let _this = this
        if(index === 1) {
          _this.spans[0].size = '18px'
          _this.spans[0].size = 'unset'
          _this.showDetail = false
        } else {
          _this.spans[1].size = '18px'
          _this.spans[1].size = 'unset'
          _this.showDetail = true
        }
        _this.spans[index].size = '22px'
        _this.spans[index].weight = 'bold'
      },
      enlarge (index,imgIndex) {
        console.log(this.hasImg)
        this.comments[index].clickShowImg = this.comments[index].commentImgs[imgIndex].img
      },
      undisplay (index) {
        this.comments[index].clickShowImg = ''
      }
    }
  }
</script>

<style>
  .shopHeader {
    width: 1000px;
    margin: 30px auto;
    background-color: #fff;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: self-start;
  }
  .box {
    width: 310px;
    display: inline-block;
  }
  .tb-pic a {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  .tb-pic a img {
    vertical-align: middle;
  }
  .tb-thumb {
    overflow: hidden;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .tb-thumb li {
    background: none repeat scroll 0 0 transparent;
    float: left;
    height: 42px;
    margin: 0 15px 0 0px;
    overflow: hidden;
    padding: 1px;
  }
  .tb-thumb li:last-of-type {
    margin-right: 0px;
  }
  .tb-s310, .tb-s310 a {
    height: 310px;
    width: 310px;
    overflow: hidden;
  }
  .tb-s310, .tb-s310 img {
    max-height: 310px;
    max-width: 310px;
  }
  .tb-s40, .tb-s40 a {
    height: 40px;
    width: 40px;
  }
  .tb-booth {
    position: relative;
    z-index: 1;
  }
  .tb-thumb .tb-selected {
    border: 2px solid #EC971F;
    height: 48px;
    padding: 2px;
  }
  .tb-thumb .tb-selected div {
    border: medium none;
  }
  .tb-thumb img {
    width: 100%;
    height: 100%;
  }
  div.zoomDiv {
    z-index: 999;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 200px;
    height: 200px;
    background: #ffffff;
    border: 1px solid #CCCCCC;
    display: none;
    text-align: center;
    overflow: hidden;
  }
  div.zoomMask {
    position: absolute;
    background: url("../../../static/images/shopDetail/mask.png") repeat scroll 0 0 transparent;
    cursor: move;
    z-index: 1;
  }


  .goods {
    width: 42%;
    display: inline-block;
    /*background-color: #337ab7;*/
    vertical-align: top;
  }
  .goods>h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    line-height: 1.3;
  }
  .shopPrice {
    height: 48px;
    line-height: 48px;
  }
  .shopPrice>span:first-of-type {
    font-size: 24px;
    color: red;
    margin-right: 15px;
  }
  .shopPrice>del {
    color: #666;
    margin-right: 20px;
  }
  .shopPrice>span:last-of-type {
    border: 1px solid red;
    padding: 3px 5px;
    border-radius: 5px;
    color: red;
    font-size: 14px;
  }
  .goods>p:last-of-type,
  .taste>span {
    color: #666;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  .goods>p:last-of-type>span {
    color: #333;
    font-size: 16px;
    margin-left: 15px;
  }
  .goods>tr {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .goods>tr:first-of-type>td {
    border-top: 1px dotted #666;
    border-bottom: 1px dotted #666;
    text-align: center;
    width: 50%;
    font-size: 14px;
  }
  .goods>tr:first-of-type>td:first-of-type {
    border-right: 1px dotted #666;
  }
  .taste {
    width: 100%;
    margin-bottom: 10px;
  }
  .taste>div {
    width: 80%;
    margin-left: 15px;
    display: inline-block;
    vertical-align: top;
  }
  .taste>div>button {
    margin: 0 5px 10px 5px;
  }

  /*计算*/
  .Spinner {
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .Spinner .Amount {
    width: 36px;
    height: 25px;
    padding: 4px 5px;
    border-width: 1px 0;
    border-style: solid;
    border-color: #d9d9d9;
    float: left;
    text-align: center;
    line-height: 25px;
    color: #565656;
    outline: 0;
  }
  .Spinner a {
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid #d9d9d9;
    background-color: #f7f7f7;
    float: left;
    cursor: pointer;
    outline: 0;
  }
  .Spinner a i {
    font-style: normal;
    background: url('../../../static/images/shopDetail/BuynBtn.png') no-repeat;
    display: block;
    width: 9px;
    height: 9px;
    margin: 8px;
    text-indent: 999999%;
    overflow: hidden;
  }
  .Spinner .Increase i {
    background-position: -9px -0px;
  }
  .Spinner .DisDe i {
    background-position: -0px -9px;
  }
  .Spinner>span:last-of-type {
    margin-left: 15px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    color: #666;
  }

  .goods>tr:last-of-type>td {
    width: 50%;
    text-align: center;
  }
  .goods>tr:last-of-type button {
    width: 95%;
  }


  .shop {
    width: 20%;
    display: inline-block;
    margin-top: 50px;
    text-align: center;
  }
  .shop>div {
    border: 1px solid #eee;
  }
  .shop>div>h2 {
    font-size: 16px;
    height: 48px;
    font-weight: bold;
    line-height: 48px;
    border-bottom: 1px solid #ccc;
    background-color: #FAFAFA;
    padding: 0px 10px;
    text-align: left;
  }
  .shop>div>h2>i {
    color: #3c91d9;
    font-size: 30px;
    font-weight: bold;
  }
  .shop>div>div {
    padding: 20px 20px 0px;
  }
  .shop>div>div>button {
    width: 100%;
    margin-bottom: 20px;
  }
  .shop>i {
    display: inline-block;
    margin-top: 50px;
    font-size: 28px;
    /*background-color: #C9302C;*/
    padding: 15px;
    border-radius: 50%;
    /*color: white;*/
    background-color: white;
    border: 2px solid #C9302C;
    color: #C9302C;
  }
  .shop>h4 {
    font-size: 18px;
    margin-top: 10px;
    color: #444;
  }

  .shopContent {
    width: 1000px;
    margin: 0 auto;
  }
  .content_caipu {
    margin: 0 auto;
    position: relative;
  }
  .content_caipu h3 {
    margin: 16px 0;
    float: left;
    padding-bottom: 8px;
    color: #6cc0b1;
    width: 100%;
    text-align: center;
  }
  .content_caipu h3>span {
    font-size: 18px;
    padding: 5px 15px;
    cursor: pointer;
  }
  .content_caipu .xtj {
    background: url('../../../static/images/shopDetail/xjd.png') no-repeat;
    background-size: cover;
    display: block;
    float: left;
    height: 6px;
    width: 100%;
    position: absolute;
    top: 44px;
    /*margin-top: 10px;*/
  }
  .clearfix:after {
    clear: both;
    content: ".";
    display: block;
    font-size: 0;
    height: 0;
    line-height: 0;
    visibility: hidden;
  }
  .goodsDetail {
    width: 100%;
    margin-top: 20px;
    padding: 30px;
    background-color: white;
  }
  .goodsDetail>section {
    width: 100%;
    position: relative;
    padding: 10px 10px 10px 370px;
    min-height: 250px;
    margin-bottom: 30px;
    border: 1px solid #ccc;
    overflow: hidden;
  }
  .goodsDetail>section>a {
    position:absolute;
    left: 0;
    top: 0;
    width: 350px;
    height: 320px;
    /*overflow: hidden;*/
  }
  .goodsDetail>section>a>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /*overflow: hidden;*/
  }
  .goodsDetail>section>pre {
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

  .goodsComment {
    width: 1000px;
    margin: 20px auto;
    background-color: white;
    padding: 30px;
  }
  .score {
    width: 100%;
    border: 1px solid #ccc;
  }
  .score>h3 {
    height: 48px;
    line-height: 48px;
    background-color: #FAFAFA;
    border-bottom: 1px solid #ccc;
    padding-left: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  .score>h3>a {
    font-size: 30px;
    color: #f69f1f;
    font-weight: bold;
    margin: 0 10px;
  }
  .score>span {
    height: 54px;
    line-height: 54px;
    padding: 0 10px;
    font-size: 16px;
    margin-right: 20px;
  }
  .score>label>input {
    margin-top: 1px;
  }

  .commentAll {
    width: 100%;
    min-height: 100px;
  }
  .commentAll>li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }
  .commentName {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  .commentConnent {
    width: 75%;
    padding: 10px;
  }
  .commentConnent pre {
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
  .commentConnent>ul {
    width: 100%;
    height: 60px;
  }
  .commentConnent>ul>li {
    float: left;
    margin-right: 20px;
    background-color: white;

  }
  .commentConnent>ul>li>img {
    width: 50px;
    height: 50px;
    cursor: crosshair;
  }
  .commentConnent>div>p {
    cursor: pointer;
    padding: 5px;
  }
  .commentConnent>p {
    margin-top: 10px;
    line-height: 1.3;
    font-size: 16px;
  }
  .commentConnent>p>span {
    font-weight: bold;
    padding: 0 8px;
  }
</style>
