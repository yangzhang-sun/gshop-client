<template>
  <div id="g-homeWrap">
    <!-- 头部搜索 -->
    <div class="HomeHeader">
      <span class="HomeLogo">
        <img src="../../common/images/home/jiuxian.png" />
      </span>
      <input
        class="serach"
        placeholder="珍酒酒仙甄选特卖  9.9元限量抢美酒"
        type="text"
      />
    </div>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://img09.jiuxian.com/bill/2019/1121/43528c0fb1cb4b80bf87b9f4c258d9c3.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://img06.jiuxian.com/bill/2019/1118/4516d58f20b04adb9fd41e4778cb2f4d.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 商品分类 -->
    <div class="newNav">
      <ul class="listItem">
        <li @click="goPurchase('/whiteJiu')">
          <img
            src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://img10.jiuxian.com/bill/2019/1121/914885086a214218bcdf806272c3012a.jpg"
            alt=""
          />
        </li>
      </ul>
    </div>
    <!-- banner -->
    <div class="pubBanner">
      <a href="">
        <img
          src="https://img08.jiuxian.com/bill/2019/1121/f4222a3a30a64b849076886439639558.jpg"
        />
      </a>
    </div>
    <div class="jxAdBox">
      <div class="itemFlex">
        <div class="itemFlex_left">
          <a href="">
            <img
              src="https://img09.jiuxian.com/bill/2019/1121/a0b6d6b170c04c55b980ea1b4a8a19a2.jpg"
              alt=""
            />
          </a>
        </div>
        <div class="itemFlex_right">
          <a href=""></a>
          <img
            src="https://img10.jiuxian.com/bill/2019/1121/0a1e731bc4f74594bdf0d5fa44d53242.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- 掌上秒拍 -->
    <div class="spikeBox">
      <div class="spikeTip">
        <h3>掌上秒拍</h3>
        <!-- <div class="lastTime">距结束03：03：03</div> -->
        <!-- <p>距结束</p> -->
        <p class="end">距结束</p>
        <CountDown class="countdown"></CountDown>
        <a class="rush" href="">更多商品等你来抢！ </a>
      </div>
    </div>
    <!-- 移动 -->
    <div class="wrapper">
      <ul class="content">
        <li v-for="(product,index) in products" :key="index">
          <a href="">
            <div>
              <img
                :src="product.image_url"
                alt=""
              />
            </div>
            <span class="g_text1">{{product.description}}</span>
            <span class="g_text2">¥{{product.price}}</span>
            <div class="myp">¥{{product.beforprice}}</div>
          </a>
        </li>

      </ul>
    </div>
    <!-- 爆品go -->
    <div class="pubBanner">
      <div href="##" @click="goPurchase('/purchase')">
        <img
          src="https://img10.jiuxian.com/bill/2019/0821/fb176ffae5b941a2aa0a38e88607a278.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="pubBanner">
      <a href="">
        <img
          src="https://img09.jiuxian.com/bill/2019/1118/cae554a9e2eb4519aa199e40ff94f71a.jpg"
          alt=""
        />
      </a>
    </div>
    <div class="pubBanner">
      <a href="">
        <img
          src="https://img07.jiuxian.com/bill/2019/1119/6d175d47f8b2403688a9463ceccaaedf.jpg"
          alt=""
        />
      </a>
    </div>
    <div class="pubBanner">
      <a href="">
        <img
          src="https://img10.jiuxian.com/bill/2019/0821/fb176ffae5b941a2aa0a38e88607a278.jpg"
          alt=""
        />
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CountDown from '../../components/CountDown/CountDown'
import {mapState} from 'vuex'
import Swiper from 'swiper'
import Bscroll from 'better-scroll'
import 'swiper/css/swiper.min.css'

  export default {
    mounted(){

      this.$store.dispatch('getProductAction')

      new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
          }),
      new Bscroll('.wrapper',{
        scrollX: true,
        scrollY:false
      })
    },
   methods:{
     goPurchase(path){
      //  console.log(this.$router.replace(path))
      // console.log(path)
      this.$route.path !== path && this.$router.replace(path)
     }
   },
   computed:{
     ...mapState({
       products:state => state.products
     })
   },
   components:{CountDown}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
 #g-homeWrap
  width 100%
  // height calc(100% - 50px)
  padding-bottom 50px
  bottom 50px
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
      .end   
        margin 2px 0px 0px 100px 
      .countdown
        margin-top -10px
      .rush
        display inline-block
        position absolute
        right 10px
        top 0
        height 30px
        line-height 30px

//移动酒瓶子
  .wrapper
    width 100%
    height 156px
    overflow hidden
    position relative
    .content
      position absolute
      display flex
      li
        width 96px
        height 160px
        margin 10px
        overflow hidden
        a
          div
            width 92px
            height 92px
            img
              width 100%
              height 100%            
          .g_text1
            color black
            display block
            overflow: hidden;
            font-size: 12px;
            height 24px
          .g_text2
            color: #fc5a5a;
            font-size: 14px;

        .myp
          text-decoration line-through
</style>
