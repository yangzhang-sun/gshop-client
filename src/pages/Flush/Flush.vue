<template>
  <div>
    <div class="w-headerTitle"></div>
    <div class="w-Flushbody">
      <img class="w-datu" src="../../common/images/qingcang/datu.jpg" alt="">
      <div class="w-Container">
        <img class="w-headerImage" src="../../common/images/qingcang/yaxianghaohuodatu.jpg" alt="">
        <div class="w-goodListContain">
          <ul class="w-goodList" @click="goPath('/wdetail')">
            <li class="w-List" v-for="(item,index) in cuxiao1" :key="index">
              <img :src="item.image_url" alt="">
              <p>{{item.description}}</p>
              <span class="w-price">￥{{item.price}}</span>
              <button style="border: none;" class="w-btn">点击购买</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-Container">
        <img class="w-headerImage" src="../../common/images/qingcang/chaodidatu.jpg" alt="">
        <div class="w-goodListContain">
          <ul class="w-goodList"  @click="goPath('/wdetail')">
            <li class="w-List" v-for="(itme,index) in cuxiao2" key="index">
              <img :src="itme.image_url" alt="">
              <p>{{itme.description}}</p>
              <span class="w-price">￥{{itme.price}}</span>
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
import {mapState} from 'vuex'
  export default {
    mounted() {
       this.$store.dispatch('getCuXiao1Action'),
       this.$store.dispatch('getCuXiao2Action')
    },
    methods: {
      goPath(path){
        this.$router.replace(path)
      },
    },
    computed:{
     ...mapState({
       cuxiao1:state => state.cuxiao1
     }),
     ...mapState({
       cuxiao2:state => state.cuxiao2
     })
   },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
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
                white-space nowrap 
                overflow hidden
                text-overflow ellipsis 
              .w-price
                position absolute 
                left 10px
              
                color red
                font-size 15px
                font-weight bold
              .w-btn
                border-radius 10%
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
