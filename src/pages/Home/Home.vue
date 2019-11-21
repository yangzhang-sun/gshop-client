<template>
  <div class="HomeHeader">
    <span class="HomeLogo">
      <img src="../../common/images/home/jiuxian.png">
    </span>
    <input class="serach" type="text">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .HomeHeader
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 40px
    display flex
    justify-content space-between
    background pink
    .HomeLogo
      position relative
      top 6px
      left 6px
      img
        width 57px
        height 27px
    .serach
      position absolute
      
</style>
