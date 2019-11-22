<template>
  <header class="header">
    <slot name="left"></slot>
    <a class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </a>
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
    props: {
      title: {
        required:true,
        type: String
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .header
    background-color #de4943
    position fixed
    z-index 99
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
        color #fff 
    .header_menu
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-webicon03
        font-size 22px
        color #fff 
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
        color #fff
        display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
</style>
