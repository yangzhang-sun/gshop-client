<template>
  <div id="g-homeWrap">
    <!-- 头部搜索 -->
    <div class="HomeHeader">
    <span class="HomeLogo">
      <img src="../../common/images/home/jiuxian.png">
    </span>
    <input class="serach" placeholder="珍酒酒仙甄选特卖  9.9元限量抢美酒" type="text">
    </div>
    <!-- 轮播图 -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://img09.jiuxian.com/bill/2019/1121/43528c0fb1cb4b80bf87b9f4c258d9c3.jpg" alt="">

        </div>
        <div class="swiper-slide">
          <img src="https://img06.jiuxian.com/bill/2019/1118/4516d58f20b04adb9fd41e4778cb2f4d.jpg" alt="">
        </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <!-- 商品分类 -->
    <div class="newNav">
      <ul class="listItem">
        <li>
          <img src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg" alt="">
        </li>
        <li>
          <img src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg" alt="">
        </li>
        <li>
          <img src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg" alt="">
        </li>
        <li>
          <img src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg" alt="">
        </li>
        <li>
          <img src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg" alt="">
        </li>
        <li>
          <img src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg" alt="">
        </li>
        <li>
          <img src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg" alt="">
        </li>
        <li>
          <img src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg" alt="">
        </li>
        <li>
          <img src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg" alt="">
        </li>
        <li>
          <img src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg" alt="">
        </li>
      </ul>
    </div>
    <!-- banner -->
    <div class="pubBanner">
      <a href="">
        <img src="https://img08.jiuxian.com/bill/2019/1121/f4222a3a30a64b849076886439639558.jpg">
      </a>
    </div>
    <div class="jxAdBox">
      <div class="itemFlex">
        <div class="itemFlex_left">
          <a href="">
            <img src="https://img09.jiuxian.com/bill/2019/1121/a0b6d6b170c04c55b980ea1b4a8a19a2.jpg" alt="">
          </a>
        </div>
        <div class="itemFlex_right">
          <a href=""></a>
            <img src="https://img10.jiuxian.com/bill/2019/1121/0a1e731bc4f74594bdf0d5fa44d53242.jpg" alt="">
        </div>
      </div>
    </div>
    <!-- 掌上秒拍 -->
    <div class="spikeBox">
      <div class="spikeTip">
        <h3>掌上秒拍</h3>
        <div class="lastTime">距结束03：03：03</div>
        <a class="rush" href="">更多商品等你来抢！
        </a>
      </div>
  </div>
  <!-- 移动 -->
  <div class="wrapper">
  <ul class="content">
    <li>
      <a href="">
        <div>
          <img src="https://img07.jiuxian.com/2019/0506/43e6b63c9a5c4257af5d8d868028a1b34.jpg" alt="">
        </div>
        <span>法国梦幻之星半干起泡葡萄酒750ml</span>
        <span>¥45.00</span>
        <div>¥79.00</div>
      </a>
    </li>
    <li>22222</li>
    <li>
      111111
    </li>
    <li>22222</li>
    <li>
      111111
    </li>
    <li>22222</li>
  </ul>
</div>
</div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import Bscroll from 'better-scroll'
import 'swiper/css/swiper.min.css'
  export default {
    mounted(){
      new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
          }),
      new Bscroll('.wrapper',{
        scrollX: true,
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 #g-homeWrap
  width 100%
  .HomeHeader
    position fixed
    top 0
    left 0
    width 100%
    height 40px
    display flex
    z-index 50
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
  .swiper-container
    .swiper-wrapper
      .swiper-slide
        img 
          width 100%
          height 173px
          // 商品分类
  .newNav
    width 100%
    height 152px
    .listItem
      li 
        float left 
        width 75px
        height 75px
        img 
          width 100%
          height 100%
  .pubBanner
    width 100%
    height 83px
    img 
      width 100%
      height 100%
  .jxAdBox
    width 100%
    height 101px
    .itemFlex
      
      img 
        width 100%
        height 100%
      .itemFlex_left 
        float left
        width 50%
      .itemFlex_right
        float right 
        width 50%
      // 掌上秒拍
  .spikeBox
    .spikeTip
      height 30px
      position relative
      border-bottom 1px solid #ededed
      h3
        position absolute
        font-size 14px
        left 10px
        line-height 30px
        top 0
        font-weight bold
      .lastTime
        margin-left 75px
        height 16px
        line-height 16px
        padding 7px 0
      .rush
        display inline-block
        position absolute
        right 10px
        top 0
        height 30px
        line-height 30px
  .Carousel
    .swiper-wrapper
      li
        width 20px
        img 
          width 20px
 
</style>
