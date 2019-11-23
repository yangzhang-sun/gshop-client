<template>
  <div @click="isShowNotice=false" id="SortGuideContainer">
    <div class="guideItem" @click="goPath('/Home')">
      <span>
        <i class="iconfont icon-index"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guideItem" @click="goPath('/Sort')">
      <span>
        <i class="iconfont icon-sousuo1"></i>
      </span>
      <span>搜索</span>
    </div>
    <div class="guideItem" @click="goPath('/Cart')">
      <span>
        <i class="iconfont icon-icongouwuche1"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guideItem" @click="goPath('/Login')">
      <span>
        <i class="iconfont icon-wodedangxuan1"></i>
      </span>
      <span>我的酒仙</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goPath(path){
        this.$route.path !== path && this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #SortGuideContainer
    position fixed
    left 0
    top 40px
    width 100%
    height 50px
    border-top 1px solid #eee
    box-sizing border-box
    display flex
    background #eee
    .guideItem
      width 25%
      height 100%
      padding-bottom 6px
      text-align center
      display flex
      flex-direction column
      span
        i
          font-size 12px
        &:first-child
          margin 6px 0
      .flush
        width 42px
        height 42px
 
</style>
