<template>
  <div>
    <div class="toTop" @click="backTop()" v-show="backTopShow"><i class="iconfont icon-toTop"></i></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backTopShow: false
    }
  },
  components: {},
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    backTop () {
      let back = setInterval(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop) {
          document.body.scrollTop -= 100
          document.documentElement.scrollTop -= 100
        } else {
          clearInterval(back)
        }
      })
    },
    handleScroll () {
      // console.log(document.documentElement.scrollTop, document.body.scrollTop)
      if (document.documentElement.scrollTop + document.body.scrollTop > 1500) {
        this.backTopShow = true
      } else {
        this.backTopShow = false
      }
    }
  }
}
</script>
<style>
  .toTop {
    /*position: absolute;*/
    right: 80px;
    bottom: 166px;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    text-align: center;
    position: fixed;
    border-radius: 50%;
    transition: all .3s linear;
    box-shadow: 0px 8px 15px #666666;
  }
  .toTop>i {
    font-size: 38px;
    line-height: 50px;
    color: #888;
  }
</style>
