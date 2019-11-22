<template>
  <div>
    <router-view></router-view>
    <!-- <FooterGuide v-if="this.$route.meta.isShowFooterGuide"/> -->
    <FooterGuide v-if="this.$route.path==='/Home'"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name:'App',
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

 
</style>
