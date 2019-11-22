<template>
  <div>
    <div class="w-headerTitle"></div>
    <div class="w-Flushbody">
      <img class="w-datu" src="../../common/images/qingcang/datu.jpg" alt="">
      <div class="w-Container">
        <img class="w-headerImage" src="../../common/images/qingcang/yaxianghaohuodatu.jpg" alt="">
        <div class="w-goodListContain">
          <ul class="w-goodList">
            <li class="w-List">
              <img src="../../common/images/qingcang/yaxianghaohuo.jpg" alt="">
              <p>46°牛栏山二锅头大二（绿瓶）500ml</p>
              <span class="w-price">￥19</span>
              <button style="border: none;" class="w-btn">点击购买</button>
            </li>
            <li class="w-List">
              <img src="../../common/images/qingcang/yaxianghaohuo.jpg" alt="">
              <p>46°牛栏山二锅头大二（绿瓶）500ml</p>
              <span class="w-price">￥19</span>
              <button style="border: none;" class="w-btn">点击购买</button>
            </li>
            <li class="w-List">
              <img src="../../common/images/qingcang/yaxianghaohuo.jpg" alt="">
              <p>46°牛栏山二锅头大二（绿瓶）500ml</p>
              <span class="w-price">￥19</span>
              <button style="border: none;" class="w-btn">点击购买</button>
            </li>
            <li class="w-List">
              <img src="../../common/images/qingcang/yaxianghaohuo.jpg" alt="">
              <p>46°牛栏山二锅头大二（绿瓶）500ml</p>
              <span class="w-price">￥19</span>
              <button style="border: none;" class="w-btn">点击购买</button>
            </li>
            <li class="w-List">
              <img src="../../common/images/qingcang/yaxianghaohuo.jpg" alt="">
              <p>46°牛栏山二锅头大二（绿瓶）500ml</p>
              <span class="w-price">￥19</span>
              <button style="border: none;" class="w-btn">点击购买</button>
            </li>
            <li class="w-List">
              <img src="../../common/images/qingcang/yaxianghaohuo.jpg" alt="">
              <p>46°牛栏山二锅头大二（绿瓶）500ml</p>
              <span class="w-price">￥19</span>
              <button style="border: none;" class="w-btn">点击购买</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-Container">
        <img class="w-headerImage" src="../../common/images/qingcang/chaodidatu.jpg" alt="">
        <div class="w-goodListContain">
          <ul class="w-goodList">
            <li class="w-List">
              <img src="../../common/images/qingcang/chaodihaohuo.jpg" alt="">
              <p>46°牛栏山二锅头大二（绿瓶）500ml</p>
              <span class="w-price">￥189</span>
              <button style="border: none;" class="w-btn">点击购买</button>
            </li>
            <li class="w-List">
              <img src="../../common/images/qingcang/chaodihaohuo.jpg" alt="">
              <p>46°牛栏山二锅头大二（绿瓶）500ml</p>
              <span class="w-price">￥189</span>
              <button style="border: none;" class="w-btn">点击购买</button>
            </li>
            <li class="w-List">
              <img src="../../common/images/qingcang/chaodihaohuo.jpg" alt="">
              <p>46°牛栏山二锅头大二（绿瓶）500ml</p>
              <span class="w-price">￥189</span>
              <button style="border: none;" class="w-btn">点击购买</button>
            </li>
            <li class="w-List">
              <img src="../../common/images/qingcang/chaodihaohuo.jpg" alt="">
              <p>46°牛栏山二锅头大二（绿瓶）500ml</p>
              <span class="w-price">￥189</span>
              <button style="border: none;" class="w-btn">点击购买</button>
            </li>
            <li class="w-List">
              <img src="../../common/images/qingcang/chaodihaohuo.jpg" alt="">
              <p>46°牛栏山二锅头大二（绿瓶）500ml</p>
              <span class="w-price">￥189</span>
              <button style="border: none;" class="w-btn">点击购买</button>
            </li>
            <li class="w-List">
              <img src="../../common/images/qingcang/chaodihaohuo.jpg" alt="">
              <p>46°牛栏山二锅头大二（绿瓶）500ml</p>
              <span class="w-price">￥189</span>
              <button style="border: none;" class="w-btn">点击购买</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-bottomContain">
       <ul class="w-botttomList">
        <li class="left"><img src="../../common/images/qingcang/guizezuo.jpg" alt=""></li>
        <li class="right"><img src="../../common/images/qingcang/guize.jpg" alt=""></li>
      </ul>      
    </div>
    <HeaderGuide title="裸价清仓">
      <span @click="$router.replace('/home')" slot="left" class="header_search">
        <i class="iconfont icon-zuozhishi"></i>
      </span>
      <span slot="right" class="header_menu">
        <i class="iconfont icon-webicon03"></i>
      </span>
    </HeaderGuide>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .w-headerTitle
      width 100%
      height 40px
      background red
    
    .w-Flushbody
      width 100%
      height 100%
      background blue
      .w-datu
        height 211px
      .w-Container
        100%
        .w-headerImage
          margin 10px auto 
          width 100%
          height 71px
       .w-goodListContain
          width 100%
          box-sizing border-box
          padding 5px 10px
          .w-goodList
            background white
            display flex
            flex-wrap wrap
            .w-List
              width 50%
              height 223px
              position relative
              img           
                width 140px
                height 140px
                margin 15px 20px
              p
                width 158px
                height 28px
                text-align center
              .w-price
                position absolute 
                left 10px
              
                color red
                font-size 15px
                font-weight bold
              .w-btn
                position absolute 
                right 10px              
                color white
                font-size 15px 
                background red
                outline:none
    .w-bottomContain
      margin 5px auto 
      width 100%
      overflow hidden
      .w-botttomList
        .left img 
          width 50%
          float left 
        .right img
          width 50%
          float right
          
         
              
           




</style>
