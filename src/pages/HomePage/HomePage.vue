<template>
  <div>
    <nav class="msite_nav border-1px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/text.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/text.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      // pagination: {
      //   el: '.swiper-pagination'
      // },
      // autoplay: 3000
      // // autoplayStopOnLast: true,
      // // loop: true


      autoplay: {
        stopOnLastSlide: false,
        delay: 1000
      }
    })
  }
}
</script>
<style>
</style>
