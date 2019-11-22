<template>
  <div>
    <!-- 头部 -->
    <header class="SortHeader">
      <HeaderGuide title="选酒">
      <span @click="$router.replace('/home')" slot="left" class="header_search">
        <i class="iconfont icon-zuozhishi"></i>
      </span>
      <span @click="isShowNotice=!isShowNotice" slot="right" class="header_menu">
        <i class="iconfont icon-webicon03"></i>
      </span>
      </HeaderGuide>
      <div class="SortInput">
        <Input/>
      </div>
    </header>
    <!-- 遮罩层 -->
    <div @click="isShowNotice=false" id="SortGuideContainer" v-show="isShowNotice">
      <div class="guideItem" @click="goPath('/home')">
        <span>
          <i class="iconfont icon-index"></i>
        </span>
        <span>首页</span>
      </div>
      <div class="guideItem" @click="goPath('/sort')">
        <span>
          <i class="iconfont icon-sousuo1"></i>
        </span>
        <span>搜索</span>
      </div>
      <div class="guideItem" @click="goPath('/cart')">
        <span>
          <i class="iconfont icon-icongouwuche1"></i>
        </span>
        <span>购物车</span>
      </div>
      <div class="guideItem" @click="goPath('/login')">
        <span>
          <i class="iconfont icon-wodedangxuan1"></i>
        </span>
        <span>我的酒仙</span>
      </div>
    </div>
    <!-- 主页 -->
    <div class="SortList">
      <ul class="SortDetail">
        <li >
          <a @click.prevent="goPath('/sortList')" href="">
            <i class="iconfont icon-jiubei"></i>
            <span>白酒</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="iconfont icon-jiubei"></i>
            <span>白酒</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="iconfont icon-jiubei"></i>
            <span>白酒</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="iconfont icon-jiubei"></i>
            <span>白酒</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="iconfont icon-jiubei"></i>
            <span>白酒</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="iconfont icon-jiubei"></i>
            <span>白酒</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Input from '../../components/Input/Input'
  export default {
    data(){
      return{
        isShowNotice: false
      }
    },
    components:{
      Input
    },
    methods:{
      goPath(path){
        this.$route.path !== path && this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import "../../common/stylus/mixins.styl"
  .SortHeader
    width 100%
    height 80px
    .SortInput
      position fixed
      top 46px
      left 42px
  .SortList
    width 100%
    height 324px
    .SortDetail
      width 100%
      height 100%
      display block
      li
        text-align center
        float left
        width 124px
        height 81px
        border  1px solid #eee
        margin 0 -1px -1px 0
        a
          display flex
          flex-direction column
          text-align center
          margin-top 10px
          color #333
          i
            width 100%
            height 36px
            font-size 36px
          span 
            margin-top 6px
            font-size 18px
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
