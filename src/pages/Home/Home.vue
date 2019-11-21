<template>
  <div class="HomeHeader">
    <span class="HomeLogo">
      <img src="../../common/images/home/jiuxian.png">
    </span>
    <input class="serach" placeholder="珍酒酒仙甄选特卖  9.9元限量抢美酒" type="text">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .HomeHeader
    width 100%
    height 40px
    display flex
    .HomeLogo
      position fixed
      top 6px
      left 6px
      img
        width 57px
        height 27px
    .serach
        position fixed
        top 6px
        left 70px
        height 27px
        line-height 27px
        width 290px
        border-radius 5px
        box-sizing border-box
        background-image url('../../common/images/home/sousuo.png')
        background-size 12px 12px 
        background-position 10px 8px
        background-repeat no-repeat
        padding-left 30px
      
</style>
