
<template>
  <ul class="selectNote">
    <li class="leftDetail">
      <img src="static/images/selected/demo.png" alt="">
      <h2>Health News</h2>
      <p>
        Nunc quis sem nec tincidunt. Lorem ipsum dolor sit amet,
        adipiscing elit. Duis vitae velit sed dui malesuada dignissim.
      </p>
    </li>
    <li class="leftDetail">
      <img src="static/images/selected/demo.png" alt="">
      <h2>Health News</h2>
      <p>
        Nunc quis sem nec tincidunt. Lorem ipsum dolor sit amet,
        adipiscing elit. Duis vitae velit sed dui malesuada dignissim.
      </p>
    </li>
    <li class="leftDetail">
      <img src="static/images/selected/demo.png" alt="">
      <h2>Health News</h2>
      <p>
        Nunc quis sem nec tincidunt. Lorem ipsum dolor sit amet,
        adipiscing elit. Duis vitae velit sed dui malesuada dignissim.
      </p>
    </li>
    <li class="leftDetail">
      <img src="static/images/selected/demo.png" alt="">
      <h2>Health News</h2>
      <p>
        Nunc quis sem nec tincidunt. Lorem ipsum dolor sit amet,
        adipiscing elit. Duis vitae velit sed dui malesuada dignissim.
      </p>
    </li>
    <li class="leftDetail">
      <img src="static/images/selected/demo.png" alt="">
      <h2>Health News</h2>
      <p>
        Nunc quis sem nec tincidunt. Lorem ipsum dolor sit amet,
        adipiscing elit. Duis vitae velit sed dui malesuada dignissim.
      </p>
    </li>
    <li class="leftDetail">
      <img src="static/images/selected/demo.png" alt="">
      <h2>Health News</h2>
      <p>
        Nunc quis sem nec tincidunt. Lorem ipsum dolor sit amet,
        adipiscing elit. Duis vitae velit sed dui malesuada dignissim.
      </p>
    </li>
    <li class="leftDetail">
      <img src="static/images/selected/demo.png" alt="">
      <h2>Health News</h2>
      <p>
        Nunc quis sem nec tincidunt. Lorem ipsum dolor sit amet,
        adipiscing elit. Duis vitae velit sed dui malesuada dignissim.
      </p>
    </li>
    <li class="leftDetail">
      <img src="static/images/selected/demo.png" alt="">
      <h2>Health News</h2>
      <p>
        Nunc quis sem nec tincidunt. Lorem ipsum dolor sit amet,
        adipiscing elit. Duis vitae velit sed dui malesuada dignissim.
      </p>
    </li>
    <li class="leftDetail">
      <img src="static/images/selected/demo.png" alt="">
      <h2>Health News</h2>
      <p>
        Nunc quis sem nec tincidunt. Lorem ipsum dolor sit amet,
        adipiscing elit. Duis vitae velit sed dui malesuada dignissim.dddddf
      </p>
    </li>
    <li class="leftDetail">
      <img src="static/images/selected/demo.png" alt="">
      <h2>Health News</h2>
      <p>
        Nunc quis sem nec tincidunt. Lorem ipsum dolor sit amet,
        adipiscing elit. Duis vitae velit sed dui malesuada dignissim.
      </p>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>
  .selectNote {
    border: 1px solid #e5e5e5;
    background-color: #fff;
    width: 800px;
    margin: -1px auto;
    min-height: 250px;
    overflow: hidden;
  }
  .selectNote>li {
    width: 50%;
    padding: 10px 10px 10px 150px;
    height: 110px;
    overflow: hidden;
    margin-top: 40px;
    position: relative;
    cursor: pointer;
    overflow: hidden;

  }
  .leftDetail:hover h2{
    color: #cb8926;
  }
  .leftDetail:hover p{
    color: #9a9a9a;
  }
  .selectNote>li:nth-child(odd) {
    float: right;
    border-left: 1px dashed #64412B;
  }
  .leftDetail>img {
    position: absolute;
    left: 20px;
  }
  .leftDetail>h2 {
    color: #64412B;
    font-weight: bold;
    font-size: 18px;
    transition: all 0.2s linear;
  }
  .leftDetail>h2:hover {
    color: #c48226;
  }
  .leftDetail>p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-indent: 2em;
    transition: all 0.2s linear;
    line-height: 1.1;
  }

</style>
