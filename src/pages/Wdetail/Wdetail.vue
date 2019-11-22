<template>
  <div class="w-bigContain">
    <div class="w-headerTitle"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" >
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
    <div class="w-messageContainer">
      <div class="w-degree" >46°牛栏山二锅头大二（绿瓶）500ml</div>
      <div class="w-message">
        <span class="w-price" >￥19.00</span>
        <span class="w-club">会员下单再享98折,可省0.38元</span>
      </div>
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
    .swiper-wrapper
      .swiper-slide
        img 
          width 102%
          height 110%
  .w-messageContainer
    background white
    width 100%
    .w-degree
      font-size 20px
      text-align center
    .w-message
      
      margin-top 10px  
      .w-price
        font-size 18px
        color red
        text-indent 12px
      .w-club
        font-size 10px


// style="font-size:18px;color:red"

</style>