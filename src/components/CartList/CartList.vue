<template>
  <div class="CartListContainer">
    <ul class="CartListShopUl">
      <li class="CartListShopLi" v-for="(good, index) in goods" :key="good.id">
        <div class="shopTitle">
          <input
            class="shopAll-check"
            type="checkbox"
            v-model="isCheck[good.id].isChecked"
            @click="checkGoods(index)"
          />
          <img
            class="CartShopImg"
            src="../../common/images/cart/jiujia01.jpg"
            alt="酒家"
          />
          <span class="jiujia">{{ good.title }}</span>
          <div class="discount">
            <span>领券</span>
            <span class="more">></span>
          </div>
        </div>
        <ul class="CartListWineUl">
          <li
            class="CartListWineLi"
            v-for="item in good.jiuxianziying"
            :key="item.id"
          >
            <div class="WineLiDet">
              <input
                type="checkbox"
                class="CartListCheckBox"
                v-model="isCheck[good.id].items.isCheckedItem"
                ref="inputItem"
              />
              <img class="winesImg" :src="item.image" alt="美国伏特加" />
            </div>
            <div class="winesDetail">
              <div class="futejia">
                <span>{{ item.title }}</span>
              </div>
              <p class="winesPrice">
                <span>{{ item.price }}</span>
              </p>
              <div class="changeCount">
                <a class="countDelete" @click="reduceItem(item.id)">-</a>
                <span class="countNumber">{{ item.count||count }}</span>
                <a class="countAdd" @click="addItem(item.id)">+</a>
              </div>
            </div>
            <a class="deleteWine" @click="deteleItem(item.id, $store.state.goods[index].id)">|&nbsp;删除</a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="cartCountContainer">
      <input class="cartCountInput" type="checkBox" />
      <div class="cartCountAll">
        <span>全选</span>
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
  import {mapState} from 'vuex'
  import {MessageBox} from 'mint-ui'
  export default {
    data () {
      return {
         isCheck: {},
         count: 1
      }
    },
    mounted(){ //页面渲染完之后分发数据
        // console.log(this.goods)
        this.$store.dispatch('getGoodsAddShopsAction')

    },
    computed: {
      ...mapState({
        goods: state => state.goods
      }),
    },
    methods: {
       checkGoods (index) {
          // // console.log(event.target.checked)
           this.itemArr = this.goods[index].jiuxianziying  //每个店铺的商品
         
         this.itemArr.forEach(element => {
            //  let indexItem = itemArr.indexOf(element)
             if(event.target.checked) {
                // this.$set(this.keyGoodId, 'isCheckedItem', true)
                console.log(this.keyGoodId[index])
                .items.isCheckedItem = true
              }
          });

          // this.$set(this.keyGoodId.items, 'isCheckedItem', true)

       },


    //添加商品
       addItem(itemId){
        //  console.log(this.goods)
        this.goods.forEach(elements => {
          // console.log(elements.jiuxianziying)
          elements.jiuxianziying.forEach(element => {
            // console.log(element)
            if(this.count >= 1 && element.id === itemId){
              // console.log(element.count)
              element.count++
            }
          })
        })
       },


      //减商品
       reduceItem(itemId){
         this.goods.forEach(elements => {
            // console.log(elements.jiuxianziying)
            elements.jiuxianziying.forEach(element => {
              // console.log(element)
              if(element.count <= 1){
                return
              }
              if(element.id === itemId){
                // console.log(element.count)
                element.count--
              }
            })
          })
        },

       
       
       //删除商品
       deteleItem(ItemId, goodId){
          MessageBox.confirm('确定删除该商品吗？')
          .then(action => {
              this.goods.forEach((elements,index) => {
                console.log(elements.jiuxianziying.length )
                   if(elements.jiuxianziying.length <= 1 && elements.id === goodId) {
                      this.goods.splice(index,1)
                   }
                   elements.jiuxianziying.forEach((element,index) => {
                     if(element.id === ItemId){
                       elements.jiuxianziying.splice(index,1)
                     }
                   })
              })

              
          },(err)=>{
            console.log(1111)
          })
           // this.itemArr = this.itemArr.filter((element) => {ItemId !== event.target.value})
       }

    },
    watch: {
      goods(newValue){
        newValue.forEach((good, index) => {
          this.isCheck[good.id] = {
            isChecked: false,
            items: {
              isCheckedItem: false
            }
          }
          this.keyGoodId = this.isCheck[good.id]
        })
      }
    }
  } 
</script>

<style lang="stylus" rel="stylesheet/stylus">
.CartListContainer
  .CartListShopUl
    padding 10px 0
    .CartListShopLi
      .shopTitle
          height 45px
          width 100%
          line-height 45px
          border 1px solid #eee
          .shopAll-check
            font-size 20px
            margin-left 5px
            display inline-block
            width 15px
            height 15px
          .CartShopImg
              width 17px
              height 14px
              margin 0 5px
            .jiujia
              font-size 16px
              color #252525
            .discount
              float right
              margin-right 10px
              .more
                  margin-left 5px
                  font-size 16px
      .CartListWineUl
        padding-bottom 10px
        .CartListWineLi
          height 100px
          line-height 18px
          width 100%
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
               padding 0 10px 0 20px
               width 80px
               height 80px

          .winesDetail
             float left
             width calc(100vw - 120px)
             .futejia
                width 100%
                height 36px
                overflow hidden
                span
                  font-size 16px
             .winesPrice
                span
                  font-size 14px
                  color #ff0000
             .changeCount
                margin-top 5px
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
    z-index 24px
    background-color #fff
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
