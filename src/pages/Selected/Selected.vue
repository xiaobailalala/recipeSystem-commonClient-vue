
<template>
  <div class="radio-wrap">
    <div class="radio-group">
      <span v-for="(tab ,index) in tabs" :key="index" :class="{cur:iscur==index}" @click="iscur=index,tabChange('select' + (index + 1))">{{tab.name}}</span>
    </div>
    <keep-alive>
      <component v-bind:is="tabView"></component>
    </keep-alive>
  </div>
</template>

<script>
import select1 from './selNoteDetail'
import select2 from './selFoodDetail'
export default {
  data () {
    return {
      tabView: 'select1',
      tabs: [{name: '美食随笔'}, {name: '精选食谱'}],
      iscur: 0
    }
  },
  components: {
    select1,
    select2
  },
  methods: {
    tabChange: function (tab) {
      this.tabView = tab
    }
  }
}
</script>

<style>
  .radio-wrap {
    width: 1000px;
    margin: 50px auto;
    /*border: 1px solid red;*/
    min-height: 500px;
  }

  .radio-group {
    text-align: center;
    min-height: 35px;
    margin-top: -2px;
    line-height: 35px;
  }

  .radio-group > span {
    cursor: pointer;
    padding: 0px 10px;
    border: 1px solid #64412B;
    display: inline-block;
    border-bottom: 0px;
    font-size: 17px;
    text-align: center;
    width: 150px;
    color: #fff;
    background-color: #64412B;
  }

  .radio-group .cur {
    color: #402a1b;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-bottom: 0px;
    font-size: 18px;
  }

  .radio-wrap>div:last-child {
    border-radius: 10px;
    min-height: 400px;
    margin-top: -1px;
    padding: 10px;
  }
</style>
