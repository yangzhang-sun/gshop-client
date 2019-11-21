<template>
  <section class="xt-cart">
     <div class="cartKong">
       <header class="cartHeader">
          <div class="cartTitle">购物车</div>
          <div class="hideList" v-show="isHideList">
              <div @click="goOther('/Home')">首页</div>
              <div @click="goOther('/Sort')">搜索</div>
              <div @click="goCart">购物车</div>
              <div @click="goOther('/Flush')">我的酒仙</div>
          </div>
        </header>
        <div class="CartFree">
            <span>!自营商品实付满100元免运费，偏远地区满500元免运费</span>
        </div>
        <div class="cartKongBox">
            <img src="../../../static/images/cart/kong.png.png" alt="购物车">
            <p class="kongCarText">购物车还是空的</p>
            <p class="cartText">快去逛逛吧~</p>
            <a @click="goOther('/Home')" class="cartBtn">促销活动</a>
        </div>
     </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isHideList: true
      }
    },
    methods: {
      goOther (path) {
        this.$router.path !== path && this.$router.replace(path)
      },
      goCart () {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
        .cartKongBox
           height 158px
           margin 100px 0
           text-align center
           img 
            //  margin-bottom 10px
           .kongCarText
             margin 15px 0 10px 0
             color #666
           p 
             font-size 12px

           .cartText
             color #999
           .cartBtn
              display inline-block
              height 24px
              line-height 24px
              margin-top 30px
              color #666
              background-color #ffffff
              padding 0 10px
              outline none
              border-radius 5px
              border 1px solid #999
            




 
</style>
