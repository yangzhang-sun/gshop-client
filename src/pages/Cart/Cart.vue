<template>
  <div class="xt-cart">
    <!-- 头部 -->
    <div>
      <header class="CartHeader">
        <div class="CartHeader-T">
          <span class="header_search">
            <i class="iconfont icon-zuozhishi" @click="goOther('/home')"></i>
          </span>
          <span @click="$router.replace('/home')" class="header_search">
            <i class="iconfont icon-zuozhishi"></i>
          </span>
          <a class="header_title">
            <span class="header_title_text ellipsis">购物车</span>
          </a>
          <span class="header_menu">
            <i class="iconfont icon-webicon03" @click="toggleHideList"></i>
          </span>
        </div>
        <!-- 遮罩层 -->
        <div class="cartKong">
          <div class="cartHeader">
            <div class="hideList" v-show="isHideList">
              <div @click="goOther('/home')" class="menu">
                <p>
                  <i class="iconfont icon-index"></i>
                </p>
                <p>首页</p>
              </div>
              <div @click="goOther('/sort')" class="menu">
                <p>
                  <i class="iconfont icon-sousuo1"></i>
                </p>
                <p class="searchAll">搜索</p>
              </div>
              <div @click="toggleHideList" class="menu">
                <p>
                  <i class="iconfont icon-icongouwuche1"></i>
                </p>
                <span class="searchAll">购物车</span>
              </div>
              <div @click="goOther('/flush')" class="menu">
                <p>
                  <i class="iconfont icon-wodedangxuan1"></i>
                </p>
                <p class="searchAll">我的酒仙</p>
              </div>
            </div>
          </div>
        </div>
        <div class="CartFree">
          <span>!自营商品实付满100元免运费，偏远地区满500元免运费</span>
        </div>
      </header>
    </div>

    <!-- 组件 -->
    <!-- <CartEmply /> -->
    <CartList />
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
.xt-cart
  .CartHeader
    .CartHeader-T
      background-color #fafafa
      position relative
      left 0
      top 0
      z-index 100
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
    .CartFree
      width 100%
      height 18px
      background-color #fff4e2
      line-height 18px
      span
        font-size 12px
        color #ff3333

    .cartKong
      .cartHeader
        .hideList
          display flex
          position relative
          .menu
            font-size 12px
            height 40px
            width 25%
            line-height 18px
            text-align center
            p
              .iconfont
                font-size 12px

          .searchAll
            margin-top 2px
</style>
