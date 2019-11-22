<template>
  <div class="SortShopContainer"> 
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
        </div>
        <div class="shop_filtrate">
          <span class="shop_filtrate_left">酒仙配送</span>
          <span class="shop_filtrate_right">CLUB会员</span>
        </div>
      </header>   
      <!--搜索详情-->
      <div class="shop_container">
        <ul class="shop_list">
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="https://img06.jiuxian.com/2019/0902/29e4f1ce36eb46678ba34c7be529e5d52.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <p class="shop_title">
                    <span class="shop_title_drink">何以解忧唯有杜康52°白水杜康一坛老酒1000ml</span>
                  </p>
                  <p class="shop_bottom">
                    <span>买赠</span>
                    <span>限时抢购</span>
                  </p>
                </section>
                <section class="shop_rating_order">
                  <p>¥50</p>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span class="scalping">酒自营</span>
                    <span class="segmentation">99%好评</span>
                    <span>26275人评论</span>
                  </p>
                </section>
              </div>
            </a>
            <a>
              <div class="shop_left">
                <img class="shop_img" src="https://img06.jiuxian.com/2019/0902/29e4f1ce36eb46678ba34c7be529e5d52.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <p class="shop_title">
                    <span class="shop_title_drink">何以解忧唯有杜康52°白水杜康一坛老酒1000ml</span>
                  </p>
                  <p class="shop_bottom">
                    <span>买赠</span>
                    <span>限时抢购</span>
                  </p>
                </section>
                <section class="shop_rating_order">
                  <p>¥50</p>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span class="scalping">酒自营</span>
                    <span class="segmentation">99%好评</span>
                    <span>26275人评论</span>
                  </p>
                </section>
              </div>
            </a>
            <a>
              <div class="shop_left">
                <img class="shop_img" src="https://img06.jiuxian.com/2019/0902/29e4f1ce36eb46678ba34c7be529e5d52.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <p class="shop_title">
                    <span class="shop_title_drink">何以解忧唯有杜康52°白水杜康一坛老酒1000ml</span>
                  </p>
                  <p class="shop_bottom">
                    <span>买赠</span>
                    <span>限时抢购</span>
                  </p>
                </section>
                <section class="shop_rating_order">
                  <p>¥50</p>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span class="scalping">酒自营</span>
                    <span class="segmentation">99%好评</span>
                    <span>26275人评论</span>
                  </p>
                </section>
              </div>
            </a>
            <a>
              <div class="shop_left">
                <img class="shop_img" src="https://img06.jiuxian.com/2019/0902/29e4f1ce36eb46678ba34c7be529e5d52.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <p class="shop_title">
                    <span class="shop_title_drink">何以解忧唯有杜康52°白水杜康一坛老酒1000ml</span>
                  </p>
                  <p class="shop_bottom">
                    <span>买赠</span>
                    <span>限时抢购</span>
                  </p>
                </section>
                <section class="shop_rating_order">
                  <p>¥50</p>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span class="scalping">酒自营</span>
                    <span class="segmentation">99%好评</span>
                    <span>26275人评论</span>
                  </p>
                </section>
              </div>
            </a>
            <a>
              <div class="shop_left">
                <img class="shop_img" src="https://img06.jiuxian.com/2019/0902/29e4f1ce36eb46678ba34c7be529e5d52.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <p class="shop_title">
                    <span class="shop_title_drink">何以解忧唯有杜康52°白水杜康一坛老酒1000ml</span>
                  </p>
                  <p class="shop_bottom">
                    <span>买赠</span>
                    <span>限时抢购</span>
                  </p>
                </section>
                <section class="shop_rating_order">
                  <p>¥50</p>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span class="scalping">酒自营</span>
                    <span class="segmentation">99%好评</span>
                    <span>26275人评论</span>
                  </p>
                </section>
              </div>
            </a>
            <a>
              <div class="shop_left">
                <img class="shop_img" src="https://img06.jiuxian.com/2019/0902/29e4f1ce36eb46678ba34c7be529e5d52.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <p class="shop_title">
                    <span class="shop_title_drink">何以解忧唯有杜康52°白水杜康一坛老酒1000ml</span>
                  </p>
                  <p class="shop_bottom">
                    <span>买赠</span>
                    <span>限时抢购</span>
                  </p>
                </section>
                <section class="shop_rating_order">
                  <p>¥50</p>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span class="scalping">酒自营</span>
                    <span class="segmentation">99%好评</span>
                    <span>26275人评论</span>
                  </p>
                </section>
              </div>
            </a>
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
        active:''
      }
    },
    async mounted(){
      console.log(this.$store)
      this.$store.dispatch('getWinesAction')
    },
    methods:{
      selected(name){
        this.active = name;
      }
    },
    computed:{
      ...mapState({
        wines:state => state.wines,
        wpList:state => state.wpList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .SortShopContainer
    .SortHeader
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
        padding 3px 15px 0
        background-color #fff
        span
          position relative
          display inline-block
          height 26px
          line-height 26px
          font-size 12px
          background-color #f6f6f6
          border-radius 13px
          margin-right 10px
          margin-top 40px
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
      margin-top 120px
      width 100%
      height 120px
      .shop_list
        .shop_li
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
            border-bottom 1px solid #eee
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
                  -webkit-line-clamp 2
                  -webkit-box-orient vertical
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
