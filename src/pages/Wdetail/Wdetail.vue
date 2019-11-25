<template>
  <div class="w-bigContain">
    <header class="SortHeader">
      <HeaderGuide title="选酒">
      <span @click="goPath()" slot="left" class="header_search">
        <i class="iconfont icon-zuozhishi"></i>
      </span>
      <span @click="isShowNotice=!isShowNotice" slot="right" class="header_menu">
        <i class="iconfont icon-webicon03"></i>
      </span>
      </HeaderGuide >
    </header>
    <HeaderNavigation class="headerNavigation" v-show="isShowNotice"/>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in 3" :key="index">
          <img :src="detailDate.image_url" alt="">
        </div>
        <!-- <div class="swiper-slide">
          <img :src="detailDate.image_url" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../common/images/jiu3datu.jpg" alt="">
        </div> -->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="w-messageContainer">
      <div class="w-degree" >{{detailDate.description}}</div>
      <div class="w-message">
        <p class="w-price" >￥{{detailDate.price}}</p>
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
    <div class="w-commentContainer">
      <div class="w-Container">
         <div class="w-commentTitle">
           <p>商品评价</p>
           <p>5220人评价</p>
           <div class="w-good">
             <p style="font-size: 10px">好评度<span>99%</span></p>
             <span>></span>
           </div>
        </div>
        <div class="w-listComment">
          <div class="w-listCommentTitle">
            <span class="w-border"></span>
            <img class="w-touxiang" src="../../common/images/touxiang.jpg" alt="">
            <p class="w-useName">LH</p>
            <p class="w-nickName">酒仙</p>
            <p class="w-time">2019年11-11 16:19:40</p>
          </div>
          <div class="w-listCommentBody">
            <p>入口绵柔,送货快,品质好酒,老牌名酒,多次购买</p>
            <img src="../../common/images/pingluntu.jpg" alt="">
          </div>
        </div> 
        <div class="w-listComment">
          <div class="w-listCommentTitle">
            <span class="w-border"></span>
            <img class="w-touxiang" src="../../common/images/touxiang.jpg" alt="">
            <p class="w-useName">LH</p>
            <p class="w-nickName">酒仙</p>
            <p class="w-time">2019年11-11 16:19:40</p>
          </div>
          <div class="w-listCommentBody">
            <p>入口绵柔,送货快,品质好酒,老牌名酒,多次购买</p>
            <img src="../../common/images/pingluntu2.jpg" alt="">
          </div>
        </div> 
        <div class="w-listComment">
          <div class="w-listCommentTitle">
            <span class="w-border"></span>
            <img class="w-touxiang" src="../../common/images/touxiang.jpg" alt="">
            <p class="w-useName">LH</p>
            <p class="w-nickName">酒仙</p>
            <p class="w-time">2019年11-11 16:19:40</p>
          </div>
          <div class="w-listCommentBody">
            <p>入口绵柔,送货快,品质好酒,老牌名酒,多次购买</p>
            <img src="../../common/images/pingluntu3.jpg" alt="">
          </div>
        </div> 
      </div>
    </div>
    <div class="w-bottomContainer">
      <ul class="w-bottomLIst">
        <li>在线客服</li>
        <li>收藏</li>
        <li>购物车</li>
        <li>到货通知</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Bscroll from 'better-scroll'
  import Swiper from "swiper";
  import 'swiper/css/swiper.min.css'
  import {SAVE_WINES} from '../../store/mutation-type'
  import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation'
  export default {
    components:{
      HeaderNavigation
    },
    computed:{
      ...mapState({
        wines:state => state.wines
      })
    }, 
    data(){
      return{
        isShowNotice: false ,
        detailDate:{},
        path:''
      }
    },
    methods: {
      shade(){
        // console.log('1')
        this.isShade = !this.isShade
      },
      goPath(){
        const path = JSON.parse(sessionStorage.getItem('path'))
        this.$router.replace(path)
      }
    },
    mounted() {
      

      this.$store.dispatch('getWinesAction')
      if (sessionStorage.getItem('wines')) {
        // 有值
        let wines = JSON.parse(sessionStorage.getItem('wines'))
        const { id, name } = this.$route.query
        if(name == '张阳'){
          const arr = wines.filter(item => id==item.id)
          this.detailDate = arr[0]
        }
        // this.$store.commit(SAVE_WINES,{wines})
      }else{
        this.$store.dispatch('getWinesAction')
      }
      //beforeunload页面刷新前调用
      window.addEventListener('beforeunload',()=>{
        sessionStorage.setItem('wines',JSON.stringify(this.wines))
      })

      window.onload = function(){
        var mySwiper = new Swiper(".swiper-container", {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        })
      }
  
    },
    beforeRouteEnter (to, from, next) {
      sessionStorage.setItem('path',JSON.stringify(from.fullPath))
      console.log(from)
      next(true)
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
 @import "../../common/stylus/mixins.styl"
 .w-bigContain
  .SortHeader
    width 100%
    height 40px
    .SortInput
      position fixed
      top 46px
      left 42px
  .headerNavigation
    z-index 99
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
      text-align left 
      padding-top 15px
      margin-left 2px  
    .w-message
      display flex
      flex-direction column
      margin-top 10px
      margin-left 2px   
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
  .w-commentContainer
    width 100%
    background white
    box-sizing border-box
    margin-top 10px
    .w-Container
      margin 5px 5px  
      .w-commentTitle
        width 100%
        height 45px
        line-height 45px
        padding-top 10px
        display flex
        p:nth-child(1)
          width 80px
          font-size 14px
        p:nth-child(2)
          width 100px
          font-size 10px
          margin 0 10px 0 10px
          color #999
        .w-good
          width 100px
          height 44px
          line-height 44px
          font-size 10px
          text-align center
          display flex
          margin-left 60px
          p span 
            color red
      .w-listComment
        border-top 1px solid #999  
        .w-listCommentTitle
          height 26px
          line-height 26px
          display flex
          margin-top 10px
          .w-useName
            font-size 10px
            margin 0 10px
          .w-time 
            margin-left 130px
          .w-nickName
            margin-top 7px
            width 30px
            height 10px
            line-height 10px
            text-align center
            border 1px solid #999
          img
            width 30px
            height 30px
            border-radius 50%
        .w-listCommentBody
          p
            margin 20px 0
            font-size 12px
          img 
            width 78px
            height 130px
            margin-bottom 10px
  .w-bottomContainer
    position fixed
    left 0
    bottom 0
    width 100%
    background white
    border-top 1px solid #eee
    .w-bottomLIst
      height 40px
      line-height 40px
      display flex
      font-size 15px
      li:nth-child(1)
        border-radius 5%
        width 20%
        line-height 40px
        text-align center
      li:nth-child(2)
        border-radius 5%
        width 20%
        line-height 40px
        text-align center
        border-left 1px solid #eee
        border-right 1px solid #eee
      li:nth-child(3)
        border-radius 5%
        width 20%
        line-height 40px
        text-align center
      li:nth-child(4)
        border-radius 5%
        width 45%
        line-height 40px
        text-align center
        background #f4b63f
        color white
        font-weight bold
</style>