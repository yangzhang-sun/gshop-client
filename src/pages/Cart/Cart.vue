<template>
  <div class="xt-cart">
    <!-- 头部 -->
    <div>
      <header class="CartHeader">
        <span class="header_search">
          <i class="iconfont icon-zuozhishi" @click="goOther('/Home')"></i>
        </span>
        <a class="header_title">
          <span class="header_title_text ellipsis">购物车</span>
        </a>
        <span class="header_menu">
          <i class="iconfont icon-webicon03" @click="toggleHideList"></i>
        </span>
      </header>
    </div>
    
    <div class="cartKong">
      <header class="cartHeader">
        <div class="cartTitle"></div>
        <div class="hideList" v-show="isHideList">
          <div @click="goOther('/Home')">首页</div>
          <div @click="goOther('/Sort')">搜索</div>
          <div @click="toggleHideList">购物车</div>
          <div @click="goOther('/Flush')">我的酒仙</div>
        </div>
      </header>
      <div class="CartFree">
        <span>!自营商品实付满100元免运费，偏远地区满500元免运费</span>
      </div>
    </div>
      <!-- <CartEmply /> -->
      <CartList />
      <!-- <router-view></router-view> -->
  </div>
  
</template>

<script type="text/ecmascript-6">
 import CartEmply from '../../components/CartEmply/CartEmply'
 import CartList from '../../components/CartList/CartList'
 
  export default {
    components: {
      CartEmply,
      CartList
    },
    data () {
      return {
        isHideList: false
      }
    },
    methods: {
      toggleHideList () {
        this.isHideList = !this.isHideList
      },
      goOther (path) {
        this.$router.path !== path && this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .CartHeader
    background-color #fafafa
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 40px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-zuozhishi
        font-size 22px
        color #252525 
    .header_menu
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-webicon03
        font-size 22px
        color #252525 
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      .header_title_text
        font-family "宋体"
        font-size 16px
        color #252525
        display block
  .xt-cart
     .cartKong
        .cartHeader
          .cartTitle
            width 100%
            height 40px
          .hideList
            display flex
            justify-content space-around
            div
              font-size 20px
              
              
        .CartFree
          width 100%
          height 22px
          background-color #fff4e2
          line-height 22px
          span 
            font-size 12px
            color #ff3333
            




 
</style>
