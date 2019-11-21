<template>
  <div class="HomeHeader">
    <span class="HomeLogo">
      <img src="../../common/images/home/jiuxian.png">
    </span>
    <div class="HomeInput">
      <Input/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Input from '../../components/Input/Input'
  export default {
    components:{
      Input
    }
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
    .HomeInput
      position fixed
      top 6px
      left 70px
      
</style>
