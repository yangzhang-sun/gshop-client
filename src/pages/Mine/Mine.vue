<template>
  <div>
    <!-- 头部 -->
    <header class="SortHeader">
      <HeaderGuide title="个人中心">
        <span @click="$router.replace('/Home')" slot="left" class="header_search">
          <i class="iconfont icon-zuozhishi"></i>
        </span>
        <span @click="isShowNotice=!isShowNotice" slot="right" class="header_menu">
          <i class="iconfont icon-webicon03"></i>
        </span>
      </HeaderGuide>
      <div class="SortInput">
        <Input />
      </div>
    </header>
    <!-- 遮罩层 -->
    <div @click="isShowNotice=false" id="SortGuideContainer" v-show="isShowNotice">
      <div class="guideItem" @click="goPost('/Home')">
        <span>
          <i class="iconfont icon-index"></i>
        </span>
        <span>首页</span>
      </div>
      <div class="guideItem" @click="goPost('/Sort')">
        <span>
          <i class="iconfont icon-sousuo1"></i>
        </span>
        <span>搜索</span>
      </div>
      <div class="guideItem" @click="goPost('/Cart')">
        <span>
          <i class="iconfont icon-icongouwuche1"></i>
        </span>
        <span>购物车</span>
      </div>
      <div class="guideItem" @click="goPost('/Login')">
        <span>
          <i class="iconfont icon-wodedangxuan1"></i>
        </span>
        <span>我的酒仙</span>
      </div>
    </div>
    <!-- 头部 -->
    <div class="userInfo">
      <img src="https://misc.jiuxian.com/m_user/images/usercenter/topBg.jpg" alt="">
      <div class="userDetail">
        <div class="userPhoto">
          <div class="mask">
            <img src="https://misc.jiuxian.com/m_user/images/usercenter/userPhoto.png" alt="">
          </div>
        </div>
        <div class="info">
          <p class="userName">
            <b>jw1123123</b>
            <a href="">立享CLUB会员</a>
          </p>
          <p class="ad">下载客户端 美酒随时抢</p>
        </div>
      </div>
      <!-- 酒虫 -->
      <div class="order">
        <p class="grade">LV1 酒虫</p>
        <div class="orderStatus">
          <a href="">
            <strong>0</strong>
            <span>待付款</span>
          </a>
           <a href="">
            <strong>0</strong>
            <span>待发货</span>
          </a>
           <a href="">
            <strong>0</strong>
            <span>待收货</span>
          </a>
           <a href="">
            <strong>0</strong>
            <span>已完成</span>
          </a>
        </div>
      </div>
    </div>

    <!-- ul列表 -->
    <div class="contentFrame">
      <ul class="conList">
        <li>
          <a href="">
            <img src="https://misc.jiuxian.com/m_user/images/usercenter/order.png  " alt="">
            <span>全部订单</span>
          </a>
        </li>
         <li>
          <a href="">
            <img src="https://misc.jiuxian.com/m_user/images/usercenter/order.png  " alt="">
            <span>全部订单</span>
          </a>
        </li>
         <li>
          <a href="">
            <img src="https://misc.jiuxian.com/m_user/images/usercenter/order.png  " alt="">
            <span>全部订单</span>
          </a>
        </li>
         <li>
          <a href="">
            <img src="https://misc.jiuxian.com/m_user/images/usercenter/order.png  " alt="">
            <span>全部订单</span>
          </a>
        </li>
         <li>
          <a href="">
            <img src="https://misc.jiuxian.com/m_user/images/usercenter/order.png  " alt="">
            <span>全部订单</span>
          </a>
        </li>
         <li>
          <a href="">
            <img src="https://misc.jiuxian.com/m_user/images/usercenter/order.png  " alt="">
            <span>全部订单</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- 按钮 -->


<mt-button class="btn" type="danger"  @click="goPost('/Login')" >退出登录</mt-button>
   
  </div>
</template>

<script>
import { Button } from 'mint-ui'
export default {
  data() {
    return {
      isShowNotice: false
    }
  },
  methods: {
    goPost(path) {
      this.$route.path !== path && this.$router.replace(path);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.userInfo
  width 100%
  height 152px
  position relative
  margin-top  -40px
  img 
    width 100%
    height 100%
  .userDetail
    position absolute
    top 20px
    left 20px
    display flex
    width 100%
    height 78px
    .userPhoto
      .mask 
        width: 22.2%
        height: 110%    
        img 
          width 74px
          height 74px
    .info
      margin 20px 0 0 20px
      .userName
        b
          color: #fa281b;
          vertical-align: middle;
        a 
          display: inline-block;
          background: #25282f;
          color: #f1d08a;
          font-size: 10px;
          height: 16px;
          line-height: 16px;
          padding: 0 3px;
          margin-left: 6px;
          border-radius: 3px;
      .ad 
        font-size 16px
        margin-top 5px
  .order
    width 100%
    height 32%
    color: #171516;
    position absolute
    top 100px
    display flex
    background rgba(169,169,169,0.6)
    .grade
      width: 18%;
      height: 82%;
      text-align: center;
      color: #fff;
      margin-left: 7.5%;
      padding-top: 2%;
      background #ef4f4f
    .orderStatus
      width: 70%;
      height: 100%;
      display flex
      justify-content space-around
      text-align center
      a   
        color: #000;
        cursor: pointer;
        display block
        display flex
        flex-direction column
        justify-content space-around
.contentFrame
  width 100%
  .conList
    display flex
    flex-wrap wrap
    justify-content space-around

    li 
      width 87px
      height 87px
      text-align center
      margin 20px 0px 30px 10px
      a   
        img 
          width 100%
          height 100%
.btn
  width 100%
  // text-align center
  // display block










  



  
</style>
