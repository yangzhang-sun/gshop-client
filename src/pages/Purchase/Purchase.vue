<template>
  <div id="headquarter">
    <HeaderGuide title="整箱会场">
      <span slot="left" class="header_search">
        <i class="iconfont icon-zuozhishi"></i>
      </span>
      <span slot="right" class="header_menu">
        <i @click="shade" class="iconfont icon-webicon03"></i>
        <!-- :class="{count?acivetList:list}" -->
      </span>
    </HeaderGuide>
    <ul v-show="isShade" class="shade">
      <li class="shadeItem">
        <i class="iconfont icon-sousuo1"></i>
        <span>首页</span>
      </li>
      <li class="shadeItem">
        <i class="iconfont icon-sousuo1"></i>
        <span>首页</span>
      </li>
      <li class="shadeItem">
        <i class="iconfont icon-sousuo1"></i>
        <span>首页</span>
      </li>
      <li class="shadeItem">
        <i class="iconfont icon-sousuo1"></i>
        <span>首页</span>
      </li>
    </ul>
    <!-- 倒计时 -->
    <div class="viewModule">     
        <span>距离活动结束还有{{day}}天{{hr}}时{{min}}分{{ser}}秒
        </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{
      isShade:false,
      day:0,
      hr:0,
      min:0,
      ser:0
    }
  },
  methods:{
    
    shade(){
      // console.log('1')
      this.isShade = !this.isShade
    }
   
  }

}
</script>

<style lang="stylus">
#headquarter
  position relative
  .shade
    width 100%
    height 45px
    border-bottom: 1px solid #ccc
    background-color: #efefef
    position absolute
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

</style>
