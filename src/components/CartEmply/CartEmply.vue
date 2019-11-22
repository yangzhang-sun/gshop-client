<template>
   <section>
      <div class="cartKongBox">
        <img src="../../common/images/cart/kong.png" alt="购物车">
        <p class="kongCarText">购物车还是空的</p>
        <p class="cartText">快去逛逛吧~</p>
        <a @click="goOther('/Home')" class="cartBtn">促销活动</a>
      </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
       data () {
            return {
                isHideList: false
           }
       },
       methods: {
            goOther (path) {
                this.$router.path !== path && this.$router.replace(path)
            },
            toggleHideList() {
                this.isHideList = !this.isHideList
            }
        }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
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
