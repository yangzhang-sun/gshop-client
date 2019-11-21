<template>

  <div class="loginContainer">
    <HeaderGuide title="用户登录">
      <span slot="left" class="header_search">
        <i class="iconfont icon-zuozhishi"></i>
      </span>

    </HeaderGuide>

    <div class="loginInner">
      <div class="login_header">
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:!isPassWrrldLogin}" @click="isPassWrrldLogin=false">账号登录</a>
          <a href="javascript:;" :class="{on:isPassWrrldLogin}" @click="isPassWrrldLogin=true">手机动态登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on:!isPassWrrldLogin}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="用户名/邮箱/手机号">
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="密码">
            </section>
            
          </div>
          <div :class="{on:isPassWrrldLogin}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="请输入手机号，新用户将自动登录">
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="请以此点击">
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="请输入验证码">         
              </section>
            </section>
          </div>
          <button class="login_submit">立即登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{
      isPassWrrldLogin:false  //标识
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #DE4B45
              font-weight 700
              border-bottom 2px solid #DE4B45
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
            
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #DE4B45
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>

