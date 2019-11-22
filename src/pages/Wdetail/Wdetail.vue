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
        <p class="w-price" >￥19.00</p>
        <p class="w-club">会员下单再享98折,可省0.38元</p>
      </div>
    </div>
    <div class="w-detailContainer">
      <div class="w-lingquan">
         <p>领券</p>
         <span>购买699减50</span>
         <span>购买499减20</span>
         <span>购买199减10</span>
         <p>></p>
      </div>
      <div class="w-youhui">
          <p>购买会员享受更多优惠</p>
      </div>
      <div class="jinbi">
        <p>金币</p>
        <p>赠送<span>9</span>个金币</p>
      </div>
    </div>
    <div class="w-cartContainer">
      <div class="w-cartDetail">
      <div class="w-count">
        <p>数量</p>
        <div class="w-yusuan">
          <span>+</span>
          <p>1</p>
          <span>-</span>
        </div> 
      </div>
      <div class="w-arrive">
        <p>送至</p>
        <p>北京 北京市 昌平区</p>
      </div>
      <div class="w-commite">
        <p>提示</p>
        <p>此商品无原厂手提袋</p>
      </div>
      <div class="w-promise">
        <p>正品保障</p>
        <p>满100包邮</p>
        <p>七天退换</p>
      </div>
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
       loop: true,
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
    margin 10px 0 
    background white
    width 100%
    padding-bottom 30px
    .w-degree
      font-size 17px
      text-align center
    .w-message
      display flex
      flex-direction column
      margin-top 10px        
      .w-price
        color red
        font-size 20px
      .w-club
        margin-top 15px
        font-size 16px
  .w-detailContainer
    width 100%
    .w-lingquan
      display flex
      justify-content space-around
      align-items center
      height 42px
      line-height 42px
      background white 
      p
      font-size 14px       
      span
        display inline
        background #fff1f1
        width 80px
        height 20px
        line-height 20px
        text-align center
        color rgb(252, 90, 90) 
        font-size 12px       
    .w-youhui
      height 42px
      line-height 42px
      background white
      margin 10px 0
      p
        color: #252525;
        width: 90%;
        font-size: 14px;
        padding-left: 10px;   
    .jinbi
      height 42px
      line-height 42px
      background white
      display flex
      margin-bottom 10px
      p
        font-size 14px
        margin 0 10px
        span 
          color rgb(252, 90, 90)
  .w-cartContainer
    width 100%
    background white
    .w-cartDetail
      margin 5px 10px  
      display flex
      flex-direction column
      justify-content space-between
      .w-count
        margin 10px 0
        display flex
        // justify-content space-between
        width 100%
        height 30px
        line-height 30px
        p
          font-size 15px
        .w-yusuan
          margin-top 6px
          border 1px solid grey
          display flex
          justify-content space-around
          width 80px
          height 20px
          line-height 20px
          margin-left 30px         
          p
            margin 0 5px
            border-left 1px solid grey 
            border-right 1px solid grey
            padding 0 15px
          
      .w-arrive
        width 100%
        height 30px
        line-height 30px
        margin-top 10px
        display flex
        p
          font-size 12px
        p:nth-child(2)
          margin 0 15px

      .w-commite
        display flex
        width 100%
        height 30px
        line-height 30px
        margin 5px 0
        p:nth-child(2)
          margin 0 15px
          font-size 15px
      .w-promise
        width 100%
        height 30px
        line-height 30px
        display flex
        justify-content space-around
        background #F5F5F5



</style>