<template>
  <div class="w-bigContain">
    <div class="w-headerTitle"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../common/images/jiudatu.jpg" alt="">
          </div>
        <div class="swiper-slide">
          <img src="../../common/images/jiu2datu.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../common/images/jiu3datu.jpg" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <h4>46°牛栏山二锅头大二（绿瓶）500ml</h4>  
    <div class="w-message">
      <span class="w-price">￥19.00</span>
      <span class="w-club">会员下单再享98折,可省0.38元</span>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from "swiper";
  import 'swiper/css/swiper.min.css'
export default {
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.w-bigContain
  background #F5F5F5
  .w-headerTitle 
    width: 100%
    height: 40px
    background: red
  .swiper-container
    width 100%
    .swiper-wrapper
      width: 100%;
      height: 320px;
      display flex
      .swiper-slide
       width 100%
       img 
        width: 320px
        height: 320px;
        margin: 0 28px;
  h4
    color black 
    font-size 15px
    margin 10px 50px
  .w-message
    margin 20px 20px
    width 100%
    height 39px
    position relative
    .w-price
      position absolute 
      top 0px
      left  0px
      color red
      font-weight blod
      font-size 15px
    .w-club
      position absolute 
      bottom 5px
      left 0px
      font-size 10px
</style>
`