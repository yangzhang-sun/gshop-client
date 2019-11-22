<template>
  <div class="CartListContainer">
    <ul class="CartListShopUl">
      <li class="CartListShopLi">
        <div class="shopTitle">
          <input type="checkbox">
          <img class="CartShopImg" src="../../common/images/cart/jiujia01.jpg" alt="酒家">
          <span class="jiujia">酒家自营</span>
          <div class="discount">
            <span>领券</span>
            <span class="more">></span>
          </div>
        </div>
        <ul class="CartListWineUl">
          <li class="CartListWineLi">
            <div class="WineLiDet">
                <input type="checkbox" class="CartListCheckBox">
                <img class="winesImg" src="../../common/images/cart/wine01.jpg" alt="美国伏特加">
            </div>
            <div class="winesDetail">
                <span>40°美国深蓝伏特加750ml(原味)</span>
                <p class="winesPrice">
                  <span>￥118.00</span>
                </p>
                <div class="changeCount">
                  <a class="countDelete">-</a>
                  <span class="countNumber">1</span>
                  <a class="countAdd">+</a>
                </div>
            </div>
            <a class="deleteWine">|&nbsp;删除</a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="cartCountContainer">
       <input class="cartCountInput" type="checkBox" >
       <div class="cartCountAll">
         <span >全选</span>
       </div>
       <div class="priceCountContainer">
         <p class="totalCount">
           <span>合计:</span>
           <strong>￥0.00</strong>
         </p>
         <p class="disCountsCount">
           <span>优惠:</span>
           <strong>￥0.00</strong>
         </p>
       </div>
       <div class="jiesuanCount">
           <span>去结算&nbsp; (0)</span>
       </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .CartListContainer
    .CartListShopUl
      padding 10px 0
      .CartListShopLi
        .shopTitle
            height 45px
            width 100%
            line-height 45px
            border 1px solid #eee
            input 
              font-size 20px
              margin-left 5px
              display inline-block
              width 15px
              height 15px
            .CartShopImg
                width 18px
                height 15px
                margin 0 5px
              .jiujia
                font-size 18px
                color #252525
              .discount
                float right
                margin-right 10px
                .more
                    margin-left 5px
                    font-size 16px
        .CartListWineUl
          .CartListWineLi
            height 100px
            border-bottom 1px solid #eee
            position relative
            .WineLiDet
               float left
               input 
                 display inline-block
                 width 15px
                 height 15px
                 position absolute
                 left 2px
                 top 38px
               .winesImg
                 width 80px
                 height 80px
            .winesDetail
               float left
               span 
                 font-size 16px
               .winesPrice
                  span 
                      font-size 14px
                      color #ff0000 
                 .changeCount
                    margin-top 25px
                    font-size 20px
                    border 1px solid #d0d0d0
                    width 84px
                    .countDelete,.countAdd
                       display inline-block
                       width 20px
                       height 20px
                       line-height 20px
                       text-align center
                       border-right 1px solid #d0d0d0
                    .countNumber
                       display inline-block
                       width 40px
                       text-align center
                       border-right 1px solid #d0d0d0
                       height 20px
                       line-height 20px
            .deleteWine
               float right
               color  #000
               font-size 14px
               position absolute
               right 20px
               bottom 20px
    .cartCountContainer
      height 51px
      width 100%
      position fixed
      bottom 0
      left 0
      display flex
      border-top 1px solid #eee
      .cartCountInput
         display inline-block
         width 15px
         height 15px
         margin 17px 10px
      .cartCountAll
         height 50px
         line-height 50px
      .priceCountContainer
        margin-left 10px
        p
          span
            font-size 16px
            color #252525
            margin-right 10px
        .totalCount
          margin 5px 0
          strong
             color #ff3333
             font-size 16px
        .disCountsCount
          span 
            color #999
          strong 
            color #999
      .jiesuanCount
        width 100px
        height 50px
        line-height 50px
        position absolute
        right 0
        background-color #d9d9d9
        text-align center
        &.active
          background-color #fd5a5b
        span
          font-size 16px
          color #fff
          
</style>
