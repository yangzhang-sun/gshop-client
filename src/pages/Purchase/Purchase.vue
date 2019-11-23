<template>
  <div id="headquarter">
    <HeaderGuide title="整箱会场">
      <span slot="left" class="header_search">
        <i @click="tohome" class="iconfont icon-zuozhishi"></i>
      </span>
      <span slot="right" class="header_menu">
        <i @click="shade" class="iconfont icon-webicon03"></i>
        <!-- :class="{count?acivetList:list}" -->
      </span>
    </HeaderGuide>
    <ul v-show="isShade" class="shade">
      <li @click="home" class="shadeItem">
        <i class="iconfont icon-sousuo1"></i>
        <span>首页</span>
      </li>
      <li  @click="search"class="shadeItem">
        <i class="iconfont icon-sousuo1"></i>
        <span>搜索</span>
      </li>
      <li class="shadeItem">
        <i class="iconfont icon-sousuo1"></i>
        <span>购物车</span>
      </li>
      <li class="shadeItem">
        <i class="iconfont icon-sousuo1"></i>
        <span>我的酒仙</span>
      </li>
    </ul>
    <!-- 倒计时 -->
    <div class="viewModule">     
        <span>距离活动结束还有{{hour}}时{{minutes}}分{{seconds}}秒</span>        
    </div>

    <!-- 商品 -->
    <div class="adWrap">
        <ul class="adWrapList">
          <li>
            <a href="">
              <img src="http://img09.jiuxian.com/brandlogo/2019/1122/340a252888b946f3911190b64d03c91e.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="http://img09.jiuxian.com/brandlogo/2019/1122/340a252888b946f3911190b64d03c91e.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="http://img09.jiuxian.com/brandlogo/2019/1122/340a252888b946f3911190b64d03c91e.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="http://img09.jiuxian.com/brandlogo/2019/1122/340a252888b946f3911190b64d03c91e.jpg" alt="">
            </a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{
      isShade:false,
      hour: 6,  // 小时
      minutes: 2, // 分钟
      seconds: 5, // 秒
     
    }
  },
  mounted(){
    this.timer()
  },
  methods:{
    home(){
      console.log('1')
      this.$router.replace('/Home')
    },
    search(){
      this.$router.replace('/Sort')
    },
    
    shade(){
      // console.log('1')
      this.isShade = !this.isShade
    },
    tohome(){
      this.$router.replace('/Home')
    },
    timer () {
      let _this = this
      // 创建一个定时器
      let time = window.setInterval(function () {
        // 如果秒数为0 && 分钟数还没有为0
        if (_this.seconds === 0 && _this.minutes !== 0) {
          // 秒数变为59  分钟数--
          _this.seconds = 59
          _this.minutes -= 1
          // 都为0的时候 清除定时器
        } else if (_this.minutes === 0 && _this.seconds === 0 && _this.hour === 0) {
          window.clearInterval(time)
          // 分钟数和秒数同时为0  小时数--  分钟数和秒数都变为59
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 59
          _this.minutes = 59
          _this.hour -= 1
        } else {
          _this.seconds -= 1
        }
      }, 1000)
    }
    
    },
    
    }
    
   
   
  


</script>

<style lang="stylus">
#headquarter
  .shade
    width 100%
    height 45px
    border-bottom: 1px solid #ccc
    background-color: #efefef
    position fixed
    top 40px
    left 0
    display flex
    justify-content space-around
    .shadeItem
      display flex
      flex-direction column
      margin 10px
  .viewModule
    margin-top 40px
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    background: #f13063;
    text-align: center;
    font-size: 16px;
  .adWrap
    .adWrapList
      li
        width 100%
        height 367px
        img 
          width 100%
          height 100%        


</style>
