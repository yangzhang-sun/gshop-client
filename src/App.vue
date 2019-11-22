<template>
  <div>
    <router-view></router-view>
<<<<<<< HEAD
    <FooterGuide v-if="$route.meta.isShowFooterGuide"/>
=======
    <!-- <FooterGuide v-if="this.$route.meta.isShowFooterGuide"/> -->
    <FooterGuide v-if="this.$route.path==='/Home'"/>
>>>>>>> 764a6d2fab0870155e8e3979942c11fa62a85c24
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
