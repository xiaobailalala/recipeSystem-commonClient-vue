
<template>
    <ul class="selectFood">
      <li class="foodList">
        <a href="">
          <img src="static/images/food/demo.png" alt="">
        </a>
        <h2>粉粉肉蛋豆腐丸</h2>
        <span>{{browse}}浏览&nbsp;/</span>
        <span>{{collector}}收藏</span>
        <div class="position">
          <img src="static/images/food/author.png" alt="">
          <span>sure汪</span>
        </div>
      </li>
      <li class="foodList">
        <a href="">
          <img src="static/images/food/demo.png" alt="">
        </a>
        <h2>粉粉肉蛋豆腐丸</h2>
        <span>{{browse}}浏览&nbsp;/</span>
        <span>{{collector}}收藏</span>
        <div class="position">
          <img src="static/images/food/author.png" alt="">
          <span>sure汪</span>
        </div>
      </li>
      <li class="foodList">
        <a href="">
          <img src="static/images/food/demo.png" alt="">
        </a>
        <h2>粉粉肉蛋豆腐丸</h2>
        <span>{{browse}}浏览&nbsp;/</span>
        <span>{{collector}}收藏</span>
        <div class="position">
          <img src="static/images/food/author.png" alt="">
          <span>sure汪</span>
        </div>
      </li>
      <li class="foodList">
        <a href="">
          <img src="static/images/food/demo.png" alt="">
        </a>
        <h2>粉粉肉蛋豆腐丸</h2>
        <span>{{browse}}浏览&nbsp;/</span>
        <span>{{collector}}收藏</span>
        <div class="position">
          <img src="static/images/food/author.png" alt="">
          <span>sure汪</span>
        </div>
      </li>
      <li class="foodList">
        <a href="">
          <img src="static/images/food/demo.png" alt="">
        </a>
        <h2>粉粉肉蛋豆腐丸</h2>
        <span>{{browse}}浏览&nbsp;/</span>
        <span>{{collector}}收藏</span>
        <div class="position">
          <img src="static/images/food/author.png" alt="">
          <span>sure汪</span>
        </div>
      </li>
      <li class="foodList">
        <a href="">
          <img src="static/images/food/demo.png" alt="">
        </a>
        <h2>粉粉肉蛋豆腐丸</h2>
        <span>{{browse}}浏览&nbsp;/</span>
        <span>{{collector}}收藏</span>
        <div class="position">
          <img src="static/images/food/author.png" alt="">
          <span>sure汪</span>
        </div>
      </li>
      <li class="foodList">
        <a href="">
          <img src="static/images/food/demo.png" alt="">
        </a>
        <h2>粉粉肉蛋豆腐丸</h2>
        <span>{{browse}}浏览&nbsp;/</span>
        <span>{{collector}}收藏</span>
        <div class="position">
          <img src="static/images/food/author.png" alt="">
          <span>sure汪</span>
        </div>
      </li>
      <li class="foodList">
        <a href="">
          <img src="static/images/food/demo.png" alt="">
        </a>
        <h2>粉粉肉蛋豆腐丸</h2>
        <span>{{browse}}浏览&nbsp;/</span>
        <span>{{collector}}收藏</span>
        <div class="position">
          <img src="static/images/food/author.png" alt="">
          <span>sure汪</span>
        </div>
      </li>
      <li class="foodList">
        <a href="">
          <img src="static/images/food/demo.png" alt="">
        </a>
        <h2>粉粉肉蛋豆腐丸</h2>
        <span>{{browse}}浏览&nbsp;/</span>
        <span>{{collector}}收藏</span>
        <div class="position">
          <img src="static/images/food/author.png" alt="">
          <span>sure汪</span>
        </div>
      </li>
    </ul>
</template>

<script>
export default {
  data () {
    return {
      browse: '51403',
      collector: '2333'
    }
  }
}
</script>

<style>
  .selectFood {
    border: 1px solid #e5e5e5;
    background-color: #fff;
    width: 800px;
    margin: -1px auto;
    min-height: 250px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    vertical-align: center;
    flex-wrap: wrap;
    padding: 30px 20px;

  }
  .foodList {
    width: 31%;
    overflow: hidden;
    float: left;
    position: relative;
    margin-bottom: 50px;
    border-radius: 5px;
    min-height: 315px;
    background-color: #F7F7F7;
  }
  .foodList>a {
    width: 100%;
    height: 220px;
    display: inline-block;
    overflow: hidden;
  }
  .foodList>a>img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    transition: all 0.4s linear;
  }
  .foodList>a>img:hover {
    transform: scale(1.08);
  }
  .foodList>h2 {
    font-size: 17px;
    margin: 20px 0px;
    width: 155px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .position {
    width: 55px;
    height: 75px;
    overflow: hidden;
    position: absolute;
    bottom: 35px;
    text-align: center;
    right: 15px;
  }
  .position>img {
    width: 100%;
    height: 55px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #fff;
  }
  .foodList span {
    font-size: 14px;
  }
</style>
