<template>
  <div class="SortShopContainer" > 
    <div class="Srot_shop_guide">       
    </div>
    <div class="Sort_shop_list">
      <!-- 头部 -->
      <header class="SortHeader">
        <span @click="$router.replace('/Sort')" slot="left" class="header_search">
          <i class="iconfont icon-zuozhishi"></i>
        </span>
        <span @click="isShowNotice=!isShowNotice" slot="right" class="header_menu">
          <i class="iconfont icon-webicon03"></i>
        </span>
        <div class="SortInput">
          <Input/>
        </div>
        <!-- 导航栏 -->
        <div class="shop_tabBar">
          <span v-for="item in wpList" :key="item.name" 
            :class="{'active' : active == item.name}" 
            @click="selected(item.name)">{{item.name}}
          </span>
          <input v-show="isShowInout===true" class="Srot_ipout" type="text">
        </div>
        <div class="shop_filtrate">
          <span class="shop_filtrate_left">酒仙配送</span>
          <span class="shop_filtrate_right">CLUB会员</span>
        </div>
      </header>   
      <!-- 搜索详情 -->
      <div class="shop_container">
        <ul class="shop_list">
          <li class="shop_li border-1px" v-for="(wine, index) in filterPersons" :key="index">
              <div class="shop_left">
                <img class="shop_img" :src='wine.image_url'>
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <p class="shop_title">
                    <span class="shop_title_drink">{{wine.description}}</span>
                  </p>
                  <p class="shop_bottom">
                    <span>{{wine.shop_or_buy}}</span>
                    <span>限时抢购</span>
                  </p>
                </section>
                <section class="shop_rating_order">
                  <p>¥{{wine.price}}</p>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span class="scalping">酒自营</span>
                    <span class="segmentation">{{wine.appraise}}</span>
                    <span>{{wine.comment}}人评论</span>
                  </p>
                </section>
              </div>
          </li>   
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Input from '../../components/Input/Input'
  export default {
    components:{
      Input
    },
    data(){
      return {
        active:'综合',
        isShowInout:false,
      }
    },
    async mounted(){
      this.$store.dispatch('getWinesAction')
    },
    methods:{
      selected(name){
        this.active !== name && (this.active = name)
        if(this.active === '筛选'){
          this.isShowInout = !this.isShowInout
          console.log(this.isShowInout)
        }
      }
    },
    computed:{
      ...mapState({
        wines:state => state.wines,
        wpList:state => state.wpList
      }),
      filterPersons () {
        const { wines, active } =this
        const arr = wines.filter(p => p.price)
        // 有可能要进行排序
        if(active!=='综合'){
          if(active==='价格'){
            arr.sort((p1,p2)=>{
              return p2.price - p1.price
            })
          }else if(active==='销量'){
            arr.sort((p1,p2)=>{
              return p2.comment - p1.comment
            })
          }else if(active==='筛选'){
            arr.sort((p1,p2)=>{
              return p2.id - p1.id
            })
          }
        }
        
        return arr
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .SortShopContainer
    width 100%
    height 100vh
    .Sort_shop_list
      width 100%
      height 100%
      .SortHeader
        height 120px
        background-color #fafafa
        position fixed
        z-index 100
        left 0
        top 0
        width 100%
        height 120px
        .shop_tabBar
          display flex
          width 100%
          height 40px
          position relative
          top 40px
          left 0
          line-height 40px
          background-color #fff
          .Srot_ipout
            position fixed
            width 200px
            height 30px
            left 50%
            transform translateX(-100px)
            background #eee
          span 
            width 26%
            height 40px
            float left
            display inline-block
            text-align center
            color #252525
            overflow hidden
          .active
            color #fc5a5a
          .shop_tabBar_line
            color #eee
        .shop_filtrate
          height 42px
          margin-top 38px
          background-color #fff
          span
            position relative
            display inline-block
            height 26px
            line-height 26px
            font-size 12px
            background-color #f6f6f6
            border-radius 13px
            margin-left 10px
            padding 0 15px
          .shop_filtrate_left
            color #ea0732
          .shop_filtrate_right
            color #000
        .SortInput
          position fixed
          top 6px
          left 42px
        .header_search
          position absolute
          left 15px
          top 30%
          transform translateY(-50%)
          width 10%
          height 50%
          .icon-zuozhishi
            font-size 22px
            color #252525 
        .header_menu
          position absolute
          right 15px
          top 30%
          transform translateY(-50%)
          width 10%
          height 50%
          .icon-webicon03
            font-size 22px
            color #252525 
            margin-left 10px
        .header_title
          position absolute
          top 50%
          left 50%
          transform translate(-50%, -50%)
          width 50%
          color #fff
          text-align center
          .header_title_text
            font-family "宋体"
            font-size 16px
            color #252525
            display block
      .shop_container
        // box-sizing border-box
        margin-top 120px
        width 100%
        height 547px
        .shop_list
          display block
          .shop_li
            display block
            height 120px
            border-top 1px solid #eee
            .shop_left
              float left
              box-sizing border-box
              width 110px
              height 110px
              margin-top 5px
              .shop_img
                display block
                width 100%
                height 100%
            .shop_right
              margin-top 5px
              padding-left 6px
              box-sizing border-box
              float right
              width 265px
              height 115px
              .shop_detail_header
                height 56px
                .shop_title
                  .shop_title_drink
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
                    max-height 36px
                    line-height 18px
                    color #000000
                    font-size 14px
                    vertical-align top
                    display block
                .shop_bottom
                  margin-top 6px
                  span 
                    font-size 10px
                    display inline-block
                    padding 0 2px
                    color #fff
                    height 14px
                    line-height: 14px
                    border-radius 2px
                    margin-left 5px
                    overflow hidden
                    background-color #8888ff
                    &:nth-child(2)
                      background-color #ffa855
              .shop_rating_order
                height 20px
                p
                  color red
                  font-size 16px
              .shop_distance
                height: 18px;
                line-height: 18px;
                white-space: nowrap;
                .shop_delivery_msg
                  .scalping
                    display: inline-block;
                    width: 38px;
                    height: 13px
                    color red
                    margin-right 6px
                  .segmentation
                    color #aaa
                    margin-right 6px
</style>
