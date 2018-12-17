/*
* vuex的核心管理对象模块:store
* npm install --save vuex
* */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
  isLogin:0,          //初始时候给一个  isLogin=0  表示用户未登录
  personalInfo: 0
};

const mutations = {
  changeLogin(state,data){
    state.isLogin = data;
  },
  personalInfo(state,data){
    state.personalInfo = data
    // console.log('赋给store时'+state.personalInfo.fusername)
    localStorage.setItem('data',JSON.stringify(state.personalInfo));
    // console.log('存入缓存时'+JSON.parse(localStorage.getItem('data')).fusername)
  },
  updateInfo(state,data) {
    state.personalInfo = data
    // console.log('刷新后的缓存'+data.fusername)
    // console.log('刷新后的名字'+state.personalInfo.fusername)
    localStorage.setItem('data',state.personalInfo);
  },
  clearInfo(state){
    state.personalInfo = 0
    localStorage.removeItem('token');
    localStorage.removeItem('data');
  }
};

export default new Vuex.Store({
  state, // 状态
  mutations, // 包含多个更新state函数的对象
  // actions, // 包含多个对应事件回调函数的对象
  // getters // 包含多个getter计算属性函数的对象
})
