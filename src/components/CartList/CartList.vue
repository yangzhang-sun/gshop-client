<template>
  <div class="CartListContainer">
    <ul class="CartListShopUl">
      <li class="CartListShopLi" v-for="(good, index) in goods" :key="good.id">
        <div class="shopTitle">
          <input
            class="shopAll-check"
            type="checkbox"
            v-model="good.isChecked"
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
                v-model="item.isCheckedItem"
                @click="checkItem(item.id, $store.state.goods[index].id)"
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
                <span class="countNumber">{{ item.count || count }}</span>
                <a class="countAdd" @click="addItem(item.id)">+</a>
              </div>
            </div>
            <a
              class="deleteWine"
              @click="deteleItem(item.id, $store.state.goods[index].id)"
              >|&nbsp;删除</a
            >
          </li>
        </ul>
      </li>
    </ul>
    <div class="cartCountContainer">
      <input class="cartCountInput" type="checkbox" v-model="isCheckAll" @click="checkAll"/>
      <div class="cartCountAll">
        <span>全选</span>
      </div>
      <div class="priceCountContainer">
        <p class="totalCount">
          <span>合计:</span>
          <strong>￥{{zongji||0.00}}</strong>
        </p>
        <!-- <p class="disCountsCount">
          <span>优惠:</span>
          <strong>￥0.00</strong>
        </p> -->
      </div>
      <div class="jiesuanCount" :class="payClass">
        <span>去结算&nbsp; (0)</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState,mapMutations} from 'vuex'
import {MessageBox} from 'mint-ui'
import { SAVE_ADD_GOOD, SAVE_REDUCE_GOOD, SAVE_DETELE_GOOD,SAVE_CHECK_GOOD } from '../../store/mutation-type.js'
export default {
  data () {
    return {
       isCheck: {},
       count: 1,
       flag:Boolean,
       isCheckAll:false
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


    payClass(){
      return this.zongji > 0?'enough':'not-enough'
    },
    zongji(){
        let countPrice = 0
        this.goods.forEach(elements => {
          elements.jiuxianziying.forEach(element => {
            console.log(element.isCheckedItem)
            if(element.isCheckedItem){
              console.log(element.price*element.count)
              countPrice+= element.price*element.count
            }
          })
        })
       
        return countPrice
    }
      
    
  },

  methods: {
    
     
    //1. 点击店铺商品全选
     checkGoods (index) {
        // // console.log(event.target.checked)
        // let checkedGoodArr = []

        let flag = !this.goods[index].isChecked //读取到每个商家是否选中的状态
        this.goods[index].isChecked = flag  //修改商家是否选中的状态
         /*
         由于 JavaScript 的限制，Vue 不能检测以下数组的变动：
         当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
         */

        let itemArr = this.goods[index].jiuxianziying  //每个店铺的商品
        itemArr.forEach((element) => {              //遍历商品
          this.$set(element,'isCheckedItem',flag)      // isCheckedItem每个商品的状态 和商店的状态一致
          // element.isCheckedItem = !element.isCheckedItem
        })
        
        //  checkedGoodArr += checkedGoodArr.push(this.goods[index].isChecked)

        this.flagGood = this.goods.every(element => {
         return  element.isChecked === true
        })
        if(this.flagGood){
          this.isCheckAll = true
        }
        
     },

     //2. 店铺内的每个商品都选中的时候，店铺选中
     checkItem(ItemId,goodId){

          let flagItem = (ItemId,goodId) =>{
             this.goods.forEach((elements) => {
              if(elements.id === goodId && elements.jiuxianziying.length>0){
                  this.flag = elements.jiuxianziying.every((ele)=>{
                    // console.log(ele.isCheckedItem)
                    return ele.isCheckedItem === true
                  })

              }

            })
          }
          this.$store.commit(SAVE_CHECK_GOOD,{ItemId,goodId,flagItem})
          // console.log(this.flag)
          if(this.flag){
            this.goods.forEach(elements => {
              if (elements.id === goodId){
                 this.$set(elements,'isChecked',true) 
              }
            })
            
          }
     },


     //3. 底部全部选中的时候，商品和店铺都选中
     checkAll () {

      let flag = !this.isCheckAll
      console.log(flag)
       this.isCheckAll = flag
        this.goods.forEach(elements => {
          elements.isChecked = flag
          elements.jiuxianziying.forEach((ele)=>{
            ele.isCheckedItem = flag
          })
        })
     },

  //4. 添加商品
     addItem(itemId){
       this.$store.commit(SAVE_ADD_GOOD,itemId)
     },


    //5. 减少商品
     reduceItem(itemId){
       this.$store.commit(SAVE_REDUCE_GOOD,itemId)
    },



     //6. 删除商品
     deteleItem(ItemId, goodId){
       console.log({ItemId, goodId})
        MessageBox.confirm('确定删除该商品吗？')
        .then(action => {
           this.$store.commit(SAVE_DETELE_GOOD,{ItemId,goodId})
         },(err)=>{
          console.log('取消删除')
        })
     },

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.CartListContainer
  .CartListShopUl
    padding 10px 2px 43px 2px
    margin-top 60px
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
                border-radius 3px
                .countDelete,.countAdd
                  display inline-block
                  width 20px
                  height 20px
                  line-height 20px
                  text-align center
                .countDelete
                  border-right 1px solid #d0d0d0
                .countNumber
                  display inline-block
                  width 40px
                  text-align center
                  font-size 16px
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
      margin-top 15px
      p
        span
          font-size 16px
          color #252525
          margin-right 13px
      .totalCount
        margin-top 1px
        strong
           color #ff3333
           font-size 16px
    .jiesuanCount
      width 100px
      height 50px
      line-height 50px
      position absolute
      right 0
      text-align center
      &.not-enough
        background-color #d9d9d9
      &.enough
        background-color #fd5a5b
      span
        font-size 16px
        color #fff
</style>
