<template>
  <div class="whiteJiuContainer">
    <div class="headerBox">
      <header class="WhileHeader">
        <span class="header_search">
          <i class="iconfont icon-zuozhishi" @click="goOther('/home')"></i>
        </span>
        <a class="header_title">
          <span class="header_title_text ellipsis">白酒</span>
        </a>
        <span class="header_menu">
          <i class="iconfont icon-webicon03" @click="toggleHideList"></i>
        </span>
      </header>
      <div class="hideList" v-show="isHideList">
        <div @click="goOther('/home')">首页</div>
        <div @click="goOther('/sort')">搜索</div>
        <div @click="toggleHideList">购物车</div>
        <div @click="goOther('/flush')">我的酒仙</div>
      </div>
    </div>
    <div class="whiteJiuContent">
      <div class="maotaizhuangchang">
        <a class="">
          <img
            class="shengxiaomaotai"
            src="../../../common/images/cart/WhiteJiuImgs/maotai01.jpg"
            alt=""
          />
        </a>
        <a>
          <img
            class="targpleWhite"
            src="../../../common/images/cart/WhiteJiuImgs/maotai02.jpg"
            alt=""
          />
        </a>
        <a>
          <img
            class="high-quality"
            src="../../../common/images/cart/WhiteJiuImgs/maotai04.jpg"
            alt=""
          />
        </a>
      </div>
      <div class="maitaiList">
        <ul class="wineSortUl">
          <li>
            <a>茅台</a>
          </li>
          <li>
            <a>五粮液</a>
          </li>
          <li>
            <a>汾酒</a>
          </li>
          <li>
            <a>泸州老窖</a>
          </li>
        </ul>
        <ul class="wineTasteUl">
          <li>
            <a>酱香</a>
          </li>
          <li>
            <a>清香</a>
          </li>
          <li>
            <a>浓香</a>
          </li>
          <li>
            <a class="watchAll">查看全部</a>
          </li>
        </ul>
      </div>
      <div class="whiteWineBox">
        <div class="whiteWineTitle">
          <div class="miniLine">
            <span>精品推荐</span>
          </div>
          <div class="fleWineDetail">
            <ul class="fleWineDetailUl">
              <li class="fleWineDetailLi">
                <img
                  class="fleWineImg"
                  src="../../../common/images/cart/WhiteJiuImgs/maotao05.jpg"
                  alt="茅台飞天"
                />
                <div class="fleWineIntroduce">
                  <a>43°茅台飞天500ml</a>
                  <p class="fleWineIns">酒仙自营 贵州茅台 国货匠心</p>
                  <p class="fleWinePrice">￥949.00</p>
                </div>
              </li>
              <li class="fleWineDetailLi">
                <img
                  class="fleWineImg"
                  src="../../../common/images/cart/WhiteJiuImgs/maotao05.jpg"
                  alt="茅台飞天"
                />
                <div class="fleWineIntroduce">
                  <a>43°茅台飞天500ml</a>
                  <p class="fleWineIns">酒仙自营 贵州茅台 国货匠心</p>
                  <p class="fleWinePrice">￥949.00</p>
                </div>
              </li>
              <li class="fleWineDetailLi">
                <img
                  class="fleWineImg"
                  src="../../../common/images/cart/WhiteJiuImgs/maotao05.jpg"
                  alt="茅台飞天"
                />
                <div class="fleWineIntroduce">
                  <a>43°茅台飞天500ml</a>
                  <p class="fleWineIns">酒仙自营 贵州茅台 国货匠心</p>
                  <p class="fleWinePrice">￥949.00</p>
                </div>
              </li>
              <li class="fleWineDetailLi">
                <img
                  class="fleWineImg"
                  src="../../../common/images/cart/WhiteJiuImgs/maotao05.jpg"
                  alt="茅台飞天"
                />
                <div class="fleWineIntroduce">
                  <a>43°茅台飞天500ml</a>
                  <p class="fleWineIns">酒仙自营 贵州茅台 国货匠心</p>
                  <p class="fleWinePrice">￥949.00</p>
                </div>
              </li>
              <li class="fleWineDetailLi">
                <img
                  class="fleWineImg"
                  src="../../../common/images/cart/WhiteJiuImgs/maotao05.jpg"
                  alt="茅台飞天"
                />
                <div class="fleWineIntroduce">
                  <a>43°茅台飞天500ml</a>
                  <p class="fleWineIns">酒仙自营 贵州茅台 国货匠心</p>
                  <p class="fleWinePrice">￥949.00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    data () {
        return {
            isHideList: false
        }
    },
    methods: {
        goOther(path){
           this.$route.path !== path && this.$router.replace(path)
        },
        toggleHideList () {
          this.isHideList = !this.isHideList
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.whiteJiuContainer
  .headerBox
      height 40px
      width 100%
      background-color rgba(255,255,255,0)
      .WhileHeader
          background-color #de4943
          position fixed
          z-index 100
          left 0
          top 0
          width 100%
          height 40px
          .header_search
              position absolute
              left 15px
              top 50%
              transform translateY(-50%)
              width 10%
              height 50%
              .icon-zuozhishi
                  font-size 22px
                  color #fff
          .header_menu
              position absolute
              right 15px
              top 50%
              transform translateY(-50%)
              width 10%
              height 50%
              .icon-webicon03
                  font-size 22px
                  color #fff
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
                  color #fff
                  display block
      .hideList
          margin-top 45px
          display flex
          justify-content space-around
          div
              font-size 20px
  .whiteJiuContent
     padding 10px 10px 0
     .maotaizhuangchang
          width 100%
          height 180px
          margin-bottom 15px
          .shengxiaomaotai
             height 180px
             width 213px
             float left
          .targpleWhite
             height 72px
             width  142px
             float left
             margin-bottom 10px
          .high-quality
             float right
             height 72px
             width  142px
     .maitaiList
       width 100%
       height 70px
       .wineSortUl,.wineTasteUl
          float left
          display flex
          li
            width 83px
            height 31px
            line-height 31px
            text-align center
            border 1px solid #333
            margin 0 5px 3px 0
            a
              color #000
              font-size 15px
            .watchAll
              color #de4943
              font-weight 700
      .whiteWineBox

         .whiteWineTitle
            margin-top 35px
            border-top 1px solid #A2A2A2
            position relative
            .miniLine
                height 40px
                width 100px
                line-height 40px
                background-color #fff
                text-align center
                position absolute
                left 50%
                margin-left -50px
                top -22px
                span
                  font-size 18px
                  color #3A3A3A
            .fleWineDetail
              .fleWineDetailUl
                margin-top 20px
                .fleWineDetailLi
                   padding 10px
                   height 110px
                   display flex
                   border-bottom 1px solid #A2A2A2
                   .fleWineImg
                     width 100px
                     height 100px
                     margin-right 15px
                   .fleWineIntroduce
                     a
                       display block
                       height 40px
                       line-height 18px
                     .fleWineIns
                        color #f58f2b
                        height 28px
                     .fleWinePrice
                        font-size 18px
                        color #df4a44
</style>
