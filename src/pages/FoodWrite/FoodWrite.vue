<template>
  <div>
    <div class="createTitle">
      <h2>食谱创作</h2>
      <span>独乐乐不如众乐乐</span>
      <div class="bread">当前位置： <a href="/" class="crumb">首页</a> &gt; + &gt; 食谱创作</div>
    </div>
    <div class="creContent">
      <!--菜谱分类图片-->
      <div class="firstPart"                                            >
        <!--添加图片开始-->
        <div class="image-view">
          <div class="addbox" @click="addImg" v-if="allreadyAdd">
            <input type="file" id="coverFile" @change="getImgBase()">
            <div class="addbtn">
              <i class="iconfont icon-add"></i>
              <p>添加菜谱成品图(封面)</p>
              <p>(建议长宽不要差距太多)</p>
            </div>
          </div>
          <div class="view" v-else>
            <div class="item" v-for="(item, index) in imgBase64" :key="index">
              <span class="cancel-btn" @click="delImg(index)">x</span>
              <img :src="item">
            </div>
          </div>
        </div>
        <!--添加图片结束-->
        <div class="form-group">
          <h2>食谱名称</h2>
          <input type="text" class="form-control" v-model="recipeName" placeholder="您想创建的菜谱名称">
        </div>
        <div class="intro">
          <h2>食谱介绍</h2>
          <textarea class="form-control" v-model="introduction" rows="5" placeholder="向大家介绍一下这道菜吧（尽量吸引人哦）"></textarea>
        </div>
      </div>

      <!--标签-->
      <div class="searLabel">
        <div class="form-group">
          <h2>食谱标签（为食谱添加标志性的标签,最多添加两个）</h2>
          <input type="text" class="form-control" placeholder="搜索有没有想要的标签">
          <i class="iconfont icon-search" data-toggle="tooltip" data-placement="bottom" title="搜索标签"></i>
          <i class="iconfont icon-shuaxin" data-toggle="tooltip" data-placement="bottom" title="换一批标签"></i>
          <i class="iconfont icon-add" @click="showAdd" data-toggle="tooltip" data-placement="bottom" title="自定义标签"></i>
          <div class="form-group" v-if="addLabel">
            <input type="text" class="form-control" placeholder="自定义一个新的标签" v-model="custom">
            <button class="btn btn-primary" @click="addCustom">添加</button>
          </div>
        </div>
        <div class="labels">
          <span v-for="(item,index) in labels" :key="index" :style="{color:item.color}"
                @click="selectLabel(index)">{{item.name}}</span>
        </div>
        <div class="select" v-if="selected">
          <span>已选择（单击取消）：</span>
          <span v-for="(item,index) in select" :key="index" @click="selectCancle(index)">{{item}}</span>
        </div>
        <div class="select" v-else>
          <span>未选择任何标签（单击选择）：</span>
        </div>
      </div>

      <!--材料火候-->
      <div class="materAndFire">
        <div class="staple">
          <div class="materTitle">
            <span class="liao">材料</span>
            <span class="liang">用量</span>
          </div>
          <div class="materTitle">
            <span class="liao">例：五花肉</span>
            <span class="liang">250g</span>
          </div>
          <section class="materCont" v-for="(item,index) in stapArr" :key="index">
            <div class="form-group">
              <input type="text" class="form-control" v-model="item.material">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="item.num">
            </div>
            <i class="iconfont icon-cha" @click="del(index)"></i>
          </section>
          <button type="button" class="btn btn-default btn-block" @click="add">增加一栏</button>
        </div>
        <div>
          <div class="fire">
            <h2>火候要求</h2>
            <section class="fireCont">
              <span>开启火候监控</span>
              <div v-if="showBtn" @click="changeBtn" class="open1">
                <div class="open2"></div>
              </div>
              <div v-else @click="changeBtn" class="close1">
                <div class="close2"></div>
              </div>
            </section>
            <div class="fireSize" v-if="showBtn">
              <p>火候监控为距离式检测，非径直火候检测，请选择火候范围:</p>
              <div class="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                  低火（30~40）
                </label>
              </div>
              <div class="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                  中火（60~70）
                </label>
              </div>
              <div class="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">
                  高火（80~90）
                </label>
              </div>
            </div>
          </div>
          <section class="addClassify">
            <h2>食谱类别（选择越多用户越容易找到该食谱）</h2>
            <div class="classifyBtn">
              <h2>最多添加三个分类（请勿盲目添加，管理员很凶哦）</h2>
              <!--分级开始-->
              <div v-for="(list,index) in addHoleMenu" :key="index">
                <select class="form-control" v-for="(item,index) in list.addMenu" :key="index">
                  <option v-for="(cont,index) in item.menuList" :key="index">{{cont.name}}</option>
                </select>
                <button type="button" class="btn btn-danger" @click="delMenu(index)">删除</button>
              </div>
              <!--分级结束-->
              <button type="button" class="btn btn-default btn-block" @click="addBtn">+</button>

            </div>
          </section>
        </div>
      </div>

      <!--烹饪流程-->
      <div class="process">
        <h2>烹饪流程:</h2>
        <section class="proDetail" v-for="(item,index) in processText" :key="index">
          <span class="cancel-btn" v-show="item.delThis" @click="delThis(index)">—</span>
          <span>{{index+1}}</span>
          <div class="image-view">
            <div class="addbox" @click="showFile(index)" v-if="item.isChoose">
              <input type="file" style="display: none" :id="'cover'+index" :index="index" @change="selectFile($event)">
              <div class="addbtn">
                <i class="iconfont icon-add"></i>
                <p>添加步骤图</p>
              </div>
            </div>
            <div class="view" v-else>
              <div class="item" :key="index">
                <span class="cancel-btn" @click="delImg(index)">x</span>
                <img :src="item.imgPath">
              </div>
            </div>
          </div>
          <textarea class="form-control" rows="5" placeholder="请填写详细的步骤内容"></textarea>
          <div class="form-group">
            <h2>至下一步骤所需时间（s）</h2>
            <input type="number" class="form-control" placeholder="单位/s">
            <button type="button" class="btn btn-default btn-block" v-show="item.addNext" @click="addProcess">增加步骤</button>
          </div>
        </section>
      </div>

      <button type="button" @click="submit" class="btn btn-block">submit</button>
    </div>

  </div>
</template>

<script>
import index from '../../router'

export default {
  data () {
    return {
      imgBase64: [], // 存储img base64的值将值传给后端处理
      // 选择图片后
      allreadyAdd: true,
      // 菜谱名称
      recipeName: '',
      // 食谱介绍
      introduction: '' ,
      // 增加分级
      addHoleMenu: [
        {
          addMenu: [
            {
              menuList: [
                {
                  name: '一级菜单'
                },
                {
                  name: '热门'
                },
                {
                  name: '蔬菜'
                },
                {
                  name: '肉类'
                },
                {
                  name: '水果'
                }]
            },
            {
              menuList: [
                {
                  name: '二级菜单'
                },
                {
                  name: '热门食材'
                },
                {
                  name: '家常菜'
                },
                {
                  name: '下饭菜'
                },
                {
                  name: '减肥食谱'
                }]
            },
            {
              menuList: [
                {
                  name: '三级菜单'
                },
                {
                  name: '视频菜谱'
                },
                {
                  name: '苦瓜'
                },
                {
                  name: '丝瓜'
                },
                {
                  name: '西红柿'
                },
                {
                  name: '土豆'
                }]
            }
          ]
        }
      ],
      // 材料
      stapArr: [
        {
          material: '',
          num: ''
        },
        {
          material: '',
          num: ''
        },
        {
          material: '',
          num: ''
        }
      ],
      // 显示自定义
      addLabel: false,
      // 常见标签
      labels: [
        {
          name: '0胆固醇',
          color: '#5A3721'
        },
        {
          name: '富含烟酸',
          color: '#5A3721'
        },
        {
          name: '富含维生素A',
          color: '#5A3721'
        },
        {
          name: '富含维生素E',
          color: '#5A3721'
        },
        {
          name: '高脂肪',
          color: '#5A3721'
        },
        {
          name: '低盐',
          color: '#5A3721'
        },
        {
          name: '富含铁',
          color: '#5A3721'
        },
        {
          name: '低脂肪',
          color: '#5A3721'
        },
        {
          name: '高盐',
          color: '#5A3721'
        },
        {
          name: '富含铁',
          color: '#5A3721'
        },
        {
          name: '低糖',
          color: '#5A3721'
        }
      ],
      // 选择的标签为
      select: [],
      // 是否选择标签
      selected: false,
      // 自定义内容
      custom: '',
      // 显示绿按钮
      showBtn: false,
      // 步骤
      processText: [
        {
          content: '',
          time: '',
          delThis: false,
          addNext: true,
          isChoose: true,
          imgPath: ''
        },
      ]
    }
  },
  methods: {
    // 获取图片base64实现预览
    getImgBase (e) {
      let _this = this
      let event = e || window.event
      let file = event.target.files[0]
      let reader = new FileReader()
      // 转base64
      reader.onload = function (e) {
        _this.imgBase64.push(e.target.result)
      }
      reader.readAsDataURL(file)
      this.allreadyAdd = false
    },
    // 删除图片
    delImg (index) {
      this.imgBase64.splice(index, 1)
      this.allreadyAdd = true
    },
    // 点击上传主图
    addImg () {
      document.getElementById('coverFile').click()
    },
    // 增加菜单
    addBtn () {
      if (this.addHoleMenu.length >= 3) {
        this.$swal({
          type: 'error',
          showCancelButton: false,
          text: '最多只能添加三项分类!',
          confirmButtonText: '确定'
        })
      } else {
        let newAdd = {
          addMenu: [
            {
              menuList: [
                {
                  name: '一级菜单'
                },
                {
                  name: '热门'
                },
                {
                  name: '蔬菜'
                },
                {
                  name: '肉类'
                },
                {
                  name: '水果'
                }]
            },
            {
              menuList: [
                {
                  name: '二级菜单'
                },
                {
                  name: '热门食材'
                },
                {
                  name: '家常菜'
                },
                {
                  name: '下饭菜'
                },
                {
                  name: '减肥食谱'
                }]
            },
            {
              menuList: [
                {
                  name: '三级菜单'
                },
                {
                  name: '视频菜谱'
                },
                {
                  name: '苦瓜'
                },
                {
                  name: '丝瓜'
                },
                {
                  name: '西红柿'
                },
                {
                  name: '土豆'
                }]
            }
          ]
        }
        this.addHoleMenu.push(newAdd)
      }
    },
    // 删除菜单
    delMenu (index) {
      this.$swal({
        text: '确定删除这项分类？',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then((res) => {
        if (res.value) {
          this.addHoleMenu.splice(index, 1)
        }
      })
    },
    // 显示自定义
    showAdd () {
      this.addLabel = !this.addLabel
    },
    // 增加自定义
    addCustom () {
      this.selected = true
      if (this.select.length >= 2) {
        this.$swal({
          type: 'error',
          showCancelButton: false,
          text: '最多只能添加两个标签!',
          confirmButtonText: '确定'
        })
      } else if (this.select.length === 0) {
        this.select.push(this.custom)
        this.custom = ''
      } else {
        let flag = false
        for (let i = 0; i < this.select.length; i++) {
          if (this.select[i] === this.custom) {
            flag = true
          }
        }
        if (flag) {
          this.$swal({
            type: 'error',
            showCancelButton: false,
            text: '该标签已存在，请勿重复添加!',
            confirmButtonText: '确定'
          })
        } else {
          this.select.push(this.custom)
          this.custom = ''
        }
      }
    },
    // 选择标签
    selectLabel (index) {
      this.selected = true
      if (this.select.length >= 2) {
        this.$swal({
          type: 'error',
          showCancelButton: false,
          text: '最多只能添加两个标签!',
          confirmButtonText: '确定'
        })
      } else if (this.select.length === 0) {
        this.labels[index].color = 'gray'
        this.select.push(this.labels[index].name)
      } else {
        this.labels[index].color = 'gray'
        let flag = false
        for (let i = 0; i < this.select.length; i++) {
          if (this.select[i] === this.labels[index].name) {
            flag = true
          }
        }
        if (flag) {
          this.$swal({
            type: 'error',
            showCancelButton: false,
            text: '该标签已存在，请勿重复添加!',
            confirmButtonText: '确定'
          })
        } else {
          this.select.push(this.labels[index].name)
        }
      }
    },
    // 取消选择标签
    selectCancle (index) {
      let flag = -1
      for (let i = 0; i < this.labels.length; i++) {
        if (this.select[index] === this.labels[i].name) {
          flag = i
          break
        }
      }
      if (flag >= 0) {
        this.labels[flag].color = '#5A3721'
      }
      this.select.splice(index, 1)
      if (this.select.length === 0) {
        this.selected = false
      }
    },
    // 增加材料栏目
    add () {
      let addInput = {
        material: '',
        num: ''
      }
      this.stapArr.push(addInput)
    },
    // 删除材料栏目
    del (index) {
      if(this.stapArr[index].material == '' && this.stapArr[index].num == ''){
        this.stapArr.splice(index, 1)
      }
      else {
        this.$swal({
          text: '确定删除这项材料？',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then((res) => {
          if (res.value) {
            this.stapArr.splice(index, 1)
          }
        })
      }
    },
    // 是否打开开关
    changeBtn () {
      this.showBtn = !this.showBtn
    },
    // 增加步骤
    addProcess () {
      for(let i=0;i<this.processText.length;i++) {
        this.processText[i].addNext = false;
      }
      let addProcess = {
        content: '',
        time: '',
        delThis: true,
        addNext: true,
        isChoose: true,
        imgPath: ''
      }
      this.processText.push(addProcess)
    },
    // 删除该项步骤
    delThis (index) {
      if(this.processText.length === 1){
        this.$swal({
          type: 'error',
          showCancelButton: false,
          text: '步骤只有一项时不能删除!',
          confirmButtonText: '确定'
        })
      }else{
        this.processText.splice(index, 1)
      }
    },
    // 显示图片选择框
    showFile (index) {
      $("#cover"+index).click()
    },
    // 选择步骤图片
    selectFile (event){
      const index = event.target.getAttribute("index")
      console.log(index);
      let _this = this;
      const data = event.target.files[0]
      const fs = new FileReader();
      fs.readAsDataURL(data);
      fs.onload = function () {
        _this.processText[index].imgPath = fs.result;
      }
      _this.processText[index].isChoose = false
    },
    // 提交
    submit () {
      let flag = 0
      let len = 0
      for (let i = 0; i < this.stapArr.length; i++) {
        if (this.stapArr[i].material !== '' && this.stapArr[i].num !== '') {
          len++
        }
        if (len == 0) {
          if ((this.stapArr[i].material == '' && this.stapArr[i].num !== '')
            || (this.stapArr[i].num == '' && this.stapArr[i].material !== '')) {
            flag = 1
            break
          }
          break
        }
        else {
          if ((this.stapArr[i].material == '' && this.stapArr[i].num !== '')
            || (this.stapArr[i].num == '' && this.stapArr[i].material !== '')) {
            flag = 1
            break
          }
          if (this.stapArr[i].material == '' && this.stapArr[i].num == '') {
            flag = 2
            break
          }
          flag = -1
        }
      }
      console.log(this.imgBase64.length)
      if(this.imgBase64.length === 0){
        this.$swal({
          type: 'warning',
          title: '完善您的食谱信息',
          position: 'top',
          showCancelButton: false,
          text: '请上传菜谱图片',
          animation: 'slide-from-top',
          confirmButtonText: '确定'
        })
      } else if (this.recipeName == '') {
        this.$swal({
          type: 'warning',
          title: '完善您的食谱信息',
          position: 'top',
          showCancelButton: false,
          text: '请填写食谱名称',
          animation: 'slide-from-top',
          confirmButtonText: '确定'
        })
      } else if (this.introduction == '') {
        this.$swal({
          type: 'warning',
          title: '完善您的食谱信息',
          position: 'top',
          showCancelButton: false,
          text: '请填写食谱介绍',
          animation: 'slide-from-top',
          confirmButtonText: '确定'
        })
      } else if (this.selected == false) {
        this.$swal({
          type: 'warning',
          title: '完善您的食谱信息',
          position: 'top',
          showCancelButton: false,
          text: '请至少选择一个标签',
          animation: 'slide-from-top',
          confirmButtonText: '确定'
        })
      } else if (flag >=0) {
        if(flag == 0){
          this.$swal({
            type: 'warning',
            title: '完善您的食谱信息',
            position: 'top',
            showCancelButton: false,
            text: '请填写食材用量',
            animation: 'slide-from-top',
            confirmButtonText: '确定'
          })
        }else if(flag == 1) {
          this.$swal({
            type: 'warning',
            title: '完善您的食谱信息',
            position: 'top',
            showCancelButton: false,
            text: '请填写完整您的食材或用量',
            animation: 'slide-from-top',
            confirmButtonText: '确定'
          })
        } else if(flag == 2) {
          this.$swal({
            position: 'top',
            showCancelButton: false,
            text: '请在材料用量中删除没用的空栏目',
            animation: 'slide-from-top',
            confirmButtonText: '确定'
          })
        }
      } else {
        this.$swal({
          position: 'top',
          type: 'success',
          title: '菜谱上传成功',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  }
}
</script>
<style scoped>
  textarea {
    resize: none;
  }
  * {
    outline: none;
  }
  /*头部*/
  .createTitle {
    width: 900px;
    min-height: 30px;
    margin: 40px auto 0;
  }

  .createTitle:before,
  .createTitle:after {
    content: '';
    display: table;
    clear: both;
  }

  .createTitle > h2 {
    display: inline-block;
    font-size: 24px;
  }

  .createTitle > span {
    font-size: 15px;
    padding: 0px 10px;
  }

  .bread {
    float: right;
    line-height: 12px;
    padding: 10px 0;
    font-size: 16px;
    color: #575757;
  }

  .bread > a {
    color: #575757;
  }

  /*增加食谱内容样式*/
  .creContent {
    width: 1000px;
    margin: 0px auto;
    min-height: 500px;
    background-color: white;
    border: 1px solid #efebe9;
    padding: 0 40px;
  }

  .creContent:before,
  .creContent:after {
    content: '';
    display: table;
    clear: both;
  }

  /*第一部分*/
  .firstPart {
    width: 100%;
    min-height: 300px;
    /*background-color: #ffd1e6;*/
    padding: 0px 35px 50px 20px;
    margin: 30px 0;
    border-bottom: 1px solid #ccc;
  }

  .firstPart:before,
  .firstPart:after {
    content: '';
    display: table;
    clear: both;
  }

  .firstPart .form-control {
    display: inline-block;
    width: 400px;
    float: right;
  }

  .firstPart > .form-group {
    padding: 25px 0px 40px;
    display: inline-block;
    width: 400px;
    float: right;
    border-bottom: 1px #ccc solid;
  }

  .intro {
    float: right;
  }

  .firstPart h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    margin-top: 20px;
  }

  .form-group:before,
  .form-group:after {
    content: '';
    display: table;
    clear: both;
  }

  .form-control {
    width: 420px;
  }

  /*上传图片*/
  .image-view {
    width: 400px;
    height: 350px;
    float: left;
    display: inline-block;
    background-color: #CCC;
    border-radius: 10px;
    /*overflow: hidden;*/
    margin-left: 10px;
    margin-top: 20px;
  }

  .image-view:before,
  .image-view:after {
    content: '';
    display: table;
    clear: both;
  }

  .view {
    width: 400px;
    height: 350px;
    float: left;
    display: inline-block;
    border-radius: 10px;
    /*overflow: hidden;*/
  }

  .image-view:before,
  .image-view:after {
    content: '';
    display: table;
    clear: both;
  }

  .image-view .addbox {
    float: left;
    position: relative;
    height: 350px;
    width: 400px;
    margin-bottom: 20px;
    text-align: center;
  }

  .addbox > input {
    position: absolute;
    height: 100%;
    width: 100%;
    display: none;
  }

  .addbtn {
    width: 180px;
    height: 180px;
    position: absolute;
    margin-top: -60px;
    top: 50%;
    margin-left: -90px;
    left: 50%;
    z-index: 0;
  }

  .addbtn > i {
    width: 100%;
    line-height: 100px;
    color: #fff;
    font-size: 90px;
    border-radius: 10px;
  }

  .addbtn > p {
    color: #ffffff;
    margin-top: 10px;
  }

  .view .item {
    position: relative;
    height: 100%;
    width: 100%;
    /*margin:10px 10px 0 0;*/
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    /*overflow: hidden;*/
  }

  .image-view .item .cancel-btn {
    position: absolute;
    right: -7px;
    top: -7px;
    display: block;
    width: 20px;
    height: 20px;
    color: #fff;
    line-height: 20px;
    text-align: center;
    background: red;
    border-radius: 10px;
    cursor: pointer;
  }

  .image-view .item img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
  }

  .image-view .view {
    clear: both;
  }

  /*标签*/
  .searLabel {
    width: 100%;
    padding: 15px 8px 40px 30px;
    border-radius: 10px;
  }

  .searLabel > .form-group > h2 {
    padding: 0px 10px 7px 0px;
    font-weight: bold;
    /*border-bottom: 1px solid gray;*/
    font-size: 16px;
    /*width: 43%;*/
  }

  .searLabel .form-control:first-of-type {
    display: inline-block;
    width: 30%;
    margin-top: 20px;
  }

  .searLabel .form-group:last-of-type {
    width: 38%;
    display: inline-block;
    min-height: 30px;
    float: right;
    margin-bottom: 0px;
    background-color: white;
    /*padding: 10px;*/
    border-radius: 5px;
  }

  .searLabel .form-group:last-of-type > .form-control {
    display: inline-block;
    width: 80%;
    vertical-align: top;
  }

  .searLabel .form-group:last-of-type > button {
    margin-top: 20px;
  }

  .searLabel > .form-group > i {
    color: #515151;
    font-size: 18px;
    margin-left: 10px;
    padding: 8px;
    vertical-align: middle;
    border-radius: 50%;
    background-color: #844f33;
    color: white;
  }

  .labels {
    width: 100%;
  }

  .searLabel span {
    font-size: 16px;
  }

  .labels span, .select span {
    margin-right: 15px;
    padding: 5px;
    cursor: pointer;
  }

  .select span {
    color: #844f33;
  }

  .select span:first-child {
    margin: 0;
    padding-right: 0px;
    cursor: default;
    /*background-color: #f4f0ec;*/
    font-style: italic;
    color: #000;
  }

  .select {
    margin-top: 20px;
  }

  /*材料火候*/
  .materAndFire {
    width: 100%;
    min-height: 200px;
    padding: 40px 20px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  /*主食*/
  .staple {
    width: 47%;
    min-height: 100px;
    background-color: #F4F0EC;
    border-radius: 10px;
    padding-bottom: 20px;
  }

  .materTitle {
    width: 100%;
    /*background-color: #f0ad4e;*/
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }

  .liao,
  .liang {
    display: inline-block;
    float: left;
    width: 49%;
  }

  .materTitle:last-of-type {
    padding-top: 0px;
    font-size: 14px;
    color: gray;
  }

  .materCont {
    width: 100%;
    /*background-color: #337ab7;*/
    min-height: 35px;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
  }

  .materCont .form-group {
    width: 46%;
    float: left;
    /*margin-right: 10px;*/
  }

  .materCont .form-control {
    width: 100%;
  }

  .materCont > i {
    height: 32px;
    background-color: #F4F0EC;
    /*border: 1px solid rebeccapurple;*/
    line-height: 30px;
    font-size: 12px;
    color: #959595;
    cursor: pointer;
  }

  .staple>button {
    margin: 0px 10px;
    width: 90%;
    border: 1px solid #ccc;
    outline: none;
  }
  /*.staple>button:hover , .classifyBtn > .btn:hover ,.proDetail > .form-group > button:hover {*/
    /*background-color: #844f33;*/
    /*color: white;*/
  /*}*/
  .materAndFire > div:last-of-type {
    width: 48%;
  }

  /*火候*/
  .fire {
    width: 85%;
    background-color: #F4F0EC;
    border-radius: 10px;
    min-height: 100px;
    padding: 15px 20px 7px;
  }

  .fire > h2 {
    font-size: 16px;
    padding: 10px 0px 15px 0;
    border-bottom: 1px solid #626262;
    font-weight: bold;
  }

  .fireCont {
    width: 100%;
    margin-top: 10px;
    /*border: 1px solid red;*/
    padding: 7px 0px 15px 0px;
  }

  .fireCont > span {
    min-height: 20px;
    /*line-height: 20px;*/
    padding: 10px 0px;
    vertical-align: middle;
    font-size: 16px;
  }

  .fireCont > div {
    width: 60px;
    height: 30px;
    border-radius: 20px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
  }

  .fireCont > div > div {
    width: 26px;
    height: 27px;
    border-radius: 20px;
    position: absolute;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  }

  /*开关*/
  .open1 {
    background: rgba(0, 184, 0, 0.8);
  }

  .open2 {
    top: 1px;
    right: 1px;
    background: white;
  }

  .close1 {
    background: rgb(255, 255, 255);
    border: 1px solid #ccc;
    border-left: transparent;
  }

  .close2 {
    left: 1px;
    top: 0px;
    border: 1px solid #ccc;
  }

  .fireSize {
    min-height: 50px;
    width: 100%;
  }

  .fireSize * {
    font-size: 15px;
  }

  .fireSize > p {
    line-height: 1.5;
  }

  /*增加类别*/
  .addClassify {
    background-color: #F4F0EC;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    float: right;
    margin-top: 25px;
  }

  .addClassify:before,
  .addClassify:after {
    content: '';
    display: table;
    clear: both;
  }

  .addClassify > h2 {
    font-size: 16px;
    padding: 10px 0px 15px 0;
    border-bottom: 1px solid #626262;
    font-weight: bold;
  }

  /*菜单按钮*/
  .classifyBtn > h2 {
    font-size: 14px;
    padding: 10px 0;
  }

  .classifyBtn > div {
    width: 100%;
  }

  .classifyBtn > div > .form-control {
    display: inline-block;
    width: 90px;
    padding: 0px 2px;
    margin: 10px 15px 10px 0;
  }

  .classifyBtn > div > .btn {
    width: 60px;
  }

  .classifyBtn > .btn {
    outline: none;
    width: 100%;
  }

  .process {
    width: 100%;
    min-height: 200px;
    border-top: 1px solid #ccc;
    margin-top: 10px;
    padding: 20px;
  }

  .process>h2 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .proDetail {
    width: 100%;
    float: right;
    margin: 0 auto 30px;
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: #F4F0EC;
    padding: 15px;
    border-radius: 5px;
  }

  .proDetail > .cancel-btn {
    position: absolute;
    right: -10px;
    top: -10px;
    display: block;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 25px;
    text-align: center;
    background: red;
    border-radius: 50%;
    cursor: pointer;
  }
  .proDetail > span:last-of-type {
    width: 30px;
    height: 150px;
    position: absolute;
    background-color: #8CCCC1;
    left: 220px;
    top: 15px;
    /*opacity: 0.8;*/
    line-height: 45px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    border-radius: 5px 2px 2px 5px;
  }

  .proDetail > .image-view {
    float: unset;
    width: 180px;
    height: 150px;
    border-radius: 5px;
    margin-top: 0px;
    margin-left: 0px;
  }

  .proDetail .addbtn {
    width: 100px;
    height: 80px;
    margin-top: -35px;
    margin-left: -50px;
  }

  .proDetail .addbtn > i {
    line-height: 50px;
    font-size: 50px;
  }

  .proDetail .image-view .addbox {
    height: 150px;
    width: 180px;
    text-align: center;
  }

  .proDetail .view {
    width: 180px;
    height: 150px;
    float: left;
    display: inline-block;
    border-radius: 5px;
    /*overflow: hidden;*/
  }
  .proDetail .view img {
    border-radius: 5px;
  }

  .proDetail > .form-control {
    height: 150px;
    font-size: 15px;
    padding-left: 35px;
    vertical-align: middle;
  }
  .proDetail > .form-group {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .proDetail > .form-group > .form-control {
    width: 45%;
  }
  .proDetail > .form-group > button {
    width: 45%;
    border: 1px solid #ccc;
    outline: none;
  }
  .creContent >button {
    width: 100px;
    background-color: #844f33;
    margin: 0 auto 20px;
    color: white;
    font-size: 16px;
  }
</style>
