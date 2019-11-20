<template>
  <div>
    <div @click="goPath('/Home')">
      <span>首页</span>
    </div>
    <div @click="goPath('/Sort')">
      <span>分类</span>
    </div>
    <div @click="goPath('/Flush')">
      <span>劲爆清仓</span>
    </div>
    <div @click="goPath('/Cart')">
      <span>购物车</span>
    </div>
    <div @click="goPath('/Login')">
      <span>我的酒仙</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goPath(path){
        this.$route.path !== path && this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

 
</style>
