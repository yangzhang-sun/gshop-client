<template>
  <div>
    <!-- 头部 -->
    <header class="SortHeader">
      <HeaderGuide title="选酒">
      <span @click="$router.replace('/Home')" slot="left" class="header_search">
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
    <HeaderNavigation v-show="isShowNotice"/>
    <!-- 主页 -->
    <div class="SortList">
      <ul class="SortDetail"  @click.prevent="goPath('/SortList')">
        <li >
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
  import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation'
  import Input from '../../components/Input/Input'
  
  import CountDown from '../../components/CountDown/CountDown'
 
  export default {
    data(){
      return{
        isShowNotice: false
      }
    },
    components:{
      Input,
      HeaderNavigation
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
</style>
