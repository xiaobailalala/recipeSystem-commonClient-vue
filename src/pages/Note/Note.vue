<template>
  <div>
    <div class="noteContent">
      <section>
        <button class="btn btn-warning btn-block">加入写食派</button>
        <div class="bread">当前位置： <a href="/" class="crumb">首页</a> &gt; 写食派</div>
      </section>
      <ul class="left">
        <section class="note" v-for="(note,index) in notes"
                 v-if="index<notes.length/2" :key="index" @click="goto('/note/nodeDetail')">
          <p>
            <img :src="note.authImg" alt="">
            <span>作者</span>
            <br/>
            <span>2018.11.17&nbsp;&nbsp;21:10</span>
          </p>
          <div>
            <h2>我是标题啊很长就会被省略啊不信你看啊啊啊</h2>
            <p>内容，很长很长的那种，可以占5行不信你看啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
          </div>
          <ul class="noteImg">
            <li v-for="(img,index) in note.imgs" :key="index">
              <img :src="img.img" alt="">
            </li>
          </ul>
        </section>
      </ul>
      <ul class="right">
        <section class="note" v-for="(note,index) in notes"
                 v-if="index>notes.length/2" :key="index" @click="goto('/note/nodeDetail')">
          <p>
            <img :src="note.authImg" alt="">
            <span>作者</span>
            <br/>
            <span>2018.11.17&nbsp;&nbsp;21:10</span>
          </p>
          <div>
            <h2>我是标题啊很长就会被省略啊不信你看啊啊啊</h2>
            <p>内容，很长很长的那种，可以占5行不信你看啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
          </div>
          <ul class="noteImg">
            <li v-for="(img,index) in note.imgs" :key="index">
              <img :src="img.img" alt="">
            </li>
          </ul>
        </section>
      </ul>
    </div>
    <p v-if="toBottom" class="bottomP">--------- 我也是有底线的 ---------</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notes: [
        {
          authImg: 'static/images/noteImg/demo.png',
          imgs: [
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            }
          ]
        },
        {
          authImg: 'static/images/noteImg/demo.png',
          imgs: [
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            }
          ]
        },
        {
          authImg: 'static/images/noteImg/demo.png',
          imgs: [
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            }
          ]
        },
        {
          authImg: 'static/images/noteImg/demo.png',
          imgs: [
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            }
          ]
        },
        {
          authImg: 'static/images/noteImg/demo.png',
          imgs: [
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            }
          ]
        },
        {
          authImg: 'static/images/noteImg/demo.png',
          imgs: [
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            }
          ]
        },
        {
          authImg: 'static/images/noteImg/demo.png',
          imgs: [
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            }
          ]
        },
        {
          authImg: 'static/images/noteImg/demo.png',
          imgs: [
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            }
          ]
        },
        {
          authImg: 'static/images/noteImg/demo.png',
          imgs: [
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            }
          ]
        },
        {
          authImg: 'static/images/noteImg/demo.png',
          imgs: [
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            },
            {
              img: 'static/images/noteImg/pubImg.png'
            }
          ]
        }
      ],
      scollY: null,
      pullRefreshss: true,
      toBottom: false
    }
  },
  methods: {
    // 文档的总高度
    getScrollTop: function () {
      let scrollTop = 0
      let bodyScrollTop = 0
      let documentScrollTop = 0
      if (document.body) {
        bodyScrollTop = document.body.scrollTop
      }
      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop
      }
      scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
      return scrollTop
    },
    // 浏览器视口的高度
    getScrollHeight: function () {
      let scrollHeight = 0
      let bodyScrollHeight = 0
      let documentScrollHeight = 0
      if (document.body) {
        bodyScrollHeight = document.body.scrollHeight
      }
      if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight
      }
      scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
      return scrollHeight
    },
    // 浏览器视口的高度
    getWindowHeight: function () {
      let windowHeight = 0
      if (document.compatMode === 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight
      } else {
        windowHeight = document.body.clientHeight
      }
      return windowHeight
    },

    // 下拉加载ajax
    pullRefresh: function () {
      let _this = this
      window.onscroll = function () {
        _this.scrollChange()
      }
    },
    scrollChange: function () {
      this.scollY = this.getScrollTop() + this.getWindowHeight() - this.getScrollHeight()
      // console.log(this.scollY, this.getScrollTop(), this.getWindowHeight(), this.getScrollHeight())
      // 把下拉刷新置为false，防止多次请求
      if (this.notes.length >= 100) {
        this.pullRefreshss = false
        this.toBottom = true
      } else if (this.scollY >= -500) {
        // if (this.page > this.pageTotal) {
        //   return false
        // }
        if (!this.pullRefreshss) {
          return false
        }
        let scollData = [
          {
            authImg: 'static/images/noteImg/demo.png',
            imgs: [
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              }
            ]
          },
          {
            authImg: 'static/images/noteImg/demo.png',
            imgs: [
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              }
            ]
          },
          {
            authImg: 'static/images/noteImg/demo.png',
            imgs: [
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              }
            ]
          },
          {
            authImg: 'static/images/noteImg/demo.png',
            imgs: [
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              }
            ]
          },
          {
            authImg: 'static/images/noteImg/demo.png',
            imgs: [
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              }
            ]
          },
          {
            authImg: 'static/images/noteImg/demo.png',
            imgs: [
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              }
            ]
          },
          {
            authImg: 'static/images/noteImg/demo.png',
            imgs: [
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              }
            ]
          },
          {
            authImg: 'static/images/noteImg/demo.png',
            imgs: [
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              }
            ]
          },
          {
            authImg: 'static/images/noteImg/demo.png',
            imgs: [
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              }
            ]
          },
          {
            authImg: 'static/images/noteImg/demo.png',
            imgs: [
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              },
              {
                img: 'static/images/noteImg/pubImg.png'
              }
            ]
          }
        ]
        this.notes = this.notes.concat(scollData)
        this.pullRefreshss = false
      } else {
        // 其他时候把下拉刷新置为true
        this.pullRefreshss = true
      }
    },
    goto (path) {
      let {href} = this.$router.resolve({path})
      window.open(href,'_blank')
    }
  },
  created: function () {
    this.pullRefresh()
  }
}
</script>

<style scoped>
  .bottomP {
    font-size: 17px;
    text-align: center;
    font-weight: bold;
    font-family: Serif;
  }
  .noteContent {
    width: 1000px;
    min-height: 500px;
    margin: 20px auto;
  }
  .noteContent:before,
  .noteContent:after {
    content: "";
    display: table;
    clear: both;
  }
  .noteContent>section {
    width: 100%;
  }
  .noteContent>section>button {
    width: 20%;
    display: inline-block;
    margin-bottom: 20px;
  }
  .bread {
    float: right;
    line-height: 12px;
    font-size: 16px;
    color: #575757;
    height: 34px;
    line-height: 34px;
  }

  .bread > a {
    color: #575757;
  }
  .noteContent>ul{
    width: 490px;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .note {
    min-height: 0px;
    padding: 5px 20px;
    margin-bottom: 20px;
    /*width: 100%;*/
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #c9c9c9;
  }
  .note:nth-of-type(even) {
    float: right;
    clear: right;
  }
  .note:nth-of-type(odd) {
    float: left;
    clear: left;
  }
  .note >p {
    /*background-color: silver;*/
    padding: 10px 0px 10px 60px;
    min-height: 69px;
    position: relative;
  }
  .note > p>img {
    position: absolute;
    top: 10px;
    left: 0px;
    border-radius: 50%;
  }
  .note > p>span:first-of-type {
    font-size: 16px;
    padding: 5px;
    display: inline-block;
  }
  .note > p>span:last-child {
    font-size: 14px;
    position: absolute;
    color: #767676;
    bottom: 15px;
    left: 65px;
  }
  .note>div {
    width: 100%;
  }
  .note>div>h2 {
    font-size: 16px;
    white-space: nowrap;
    display: inline-block;
    width: 220px;
    /*border: 1px solid red;*/
    text-overflow: ellipsis;
    overflow: hidden;
    position: relative;
    font-weight: bold;
  }
  .note>div>p {
    font-size: 15px;
    margin: 5px 0px;
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .noteImg {
    margin-top: 15px;
    margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    vertical-align: center;
    width: 100%;
  }
  .noteImg>li {
    width: 33%;
    margin-bottom: 3px;
  }
  .noteImg>li>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
</style>
