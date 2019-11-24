<template>
  <!-- 头部 -->
  <div class="loginContainer">
    <HeaderGuide title="用户登录">
      <span @click="$router.replace('/Home')" slot="left" class="header_search">
        <i class="iconfont icon-zuozhishi"></i>
      </span>
    </HeaderGuide>
    <!-- 开始登陆 -->
    <div class="loginInner">
      <div class="login_header">
        <div class="login_header_title">
          <a
            href="javascript:;"
            :class="{on:!isPassWrrldLogin}"
            @click="isPassWrrldLogin=false"
          >手机动态登录</a>
          <a href="javascript:;" :class="{on:isPassWrrldLogin}" 
          @click="isPassWrrldLogin=true">
          账号登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on:!isPassWrrldLogin}">
            <section class="login_message">
              <input
                v-model="name"
                name="username"
                v-validate="'required|phone'"
                type="tel"
                maxlength="11"
                placeholder="手机号"
              />
              <span style="color: red;" v-show="errors.has('username')">{{errors.first('username')}}</span>
              <button @click.prevent="facode" :disabled="!Isthisright" class="get_verification" :class="{light_this_liang : Isthisright}">获取验证码</button>
            </section>

             <section class="login_verification">
                <input 
                v-model="captcha"
                name="captcha"
                type="tel" 
                maxlength="8" 
                placeholder="验证码" />
                <span style="color: red;" v-show="errors.has('captcha')">{{errors.first('captcha')}}</span>
              </section>

          </div>
          <div :class="{on:isPassWrrldLogin}">
            <section>
              <section class="login_message">
                <input  v-model="phone" v-validate="'required|phone'" type="tel" maxlength="11" name="phone" placeholder="手机/邮件/用户名" />
                   <span style="color: red;" v-show="errors.has('phone')">{{errors.first('phone')}}</span>
              </section>

              <section class="login_verification">
              <input
                v-model="pwd"
                v-validate="'required'"
                :type=" isShowPassword?'tel':'password'"
                maxlength="8"
                placeholder="密码"
                name="pwd"
              />
              <span style="color: red;" v-show="errors.has('pwd')">{{errors.first('pwd')}}</span>

              <div
                @click="isShowPassword=!isShowPassword"
                class="switch_button"
                :class="isShowPassword?'on':'off'"
              >
                <div class="switch_circle" :class="{right:isShowPassword}"></div>
                <span class="switch_text">{{isShowPassword?'abc':'...'}}</span>
              </div>
            </section>
             
              <section class="login_message">
                <input  v-model="code" v-validate="'required|code'" type="text" maxlength="11" name="code" placeholder="请输入验证码" />
                <span style="color: red;" v-show="errors.has('code')">{{errors.first('code')}}</span>
                <img 
                 ref="captcha"
                 class="get_verification"  
                 @click="updateCaptcha" 
                 src="http://localhost:4000/captcha" 
                 alt="captcha" />
                <!-- <span class="switch_text">{{isShowPassword?'abc':'...'}}</span>     -->
                <!-- ../../common/images/captcha.svg -->
              </section>
            </section>
          </div>

          <!-- 登陆按钮 -->
          <!-- 直接跳转个人中心 -->
          <!-- <mt-button class="login_submit" type="danger" @click="goPost('/Mine')">立即登录</mt-button> -->
          <mt-button class="login_submit" type="danger" @click.prevent="Login">立即登录</mt-button>
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
import {loginWithPassword, loginWithPhone} from '../../api'
import { Button } from "mint-ui";
import { log } from 'util';
export default {
  data() {
    return {
      isPassWrrldLogin: true, //标识是否是用户名 / 密码登录
      isShowPassword: false, //是否显示密码
      name: '',
      pwd: '',
      captcha : '',
      phone: '',
      code: ''
    }
  },
  methods: {
    // goPost(path) {
    //   this.$route.path !== path && this.$router.replace(path);
    //   console.log('111')
    // }, //直接跳转个人中心
     updateCaptcha() {
      this.$refs.captcha.src ="http://localhost:4000/captcha?time=" + Date.now();
       
    },
   
   async Login(){
        //提出表单
        let {isPassWordLogin , name , pwd, captcha , phone, code} = this
        let names = isPassWordLogin ? ["username", "captcha"] : ["phone", "code", "pwd"];
        const success = await this.$validator.validateAll(names) //对所有表单进行验证
        // console.log(success)
        if(success){
          alert('前端验证成功')
          //手机前端数据，发送请求进行后端验证
          let result = await loginWithPassword (phone, code, pwd)
          console.log(result)
        }else {
          alert('前端验证失败')
        } 
     },
    facode (){
        console.log('发送验证码')
   }
  }, 
  computed :{
     Isthisright (){  
         //验证手机号是否满足要求
          return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.name) 
       }
   
  }
     
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;

  .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;

    .login_header {
      .login_header_title {
        padding-top: 40px;
        text-align: center;

        >a {
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;

          &:first-child {
            margin-right: 40px;
          }

          &.on {
            color: #DE4B45;
            font-weight: 700;
            border-bottom: 2px solid #DE4B45;
          }
        }
      }
    }

    .login_content {
      >form {
        >div {
          display: none;

          &.on {
            display: block;
          }

          input {
            width: 100%;
            height: 100%;
            padding-left: 25px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;

            &:focus {
              border: 1px solid #de4b45;
            }
          }

          .login_message {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .get_verification {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              font-size: 14px;
              background: transparent;

               &.light_this_liang {
                color: #333;
              }
          
            }
          }

          .login_verification {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .switch_button {
              font-size: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              transition: background-color 0.3s, border-color 0.3s;
              padding: 0 6px;
              width: 30px;
              height: 16px;
              line-height: 16px;
              color: #fff;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);

              &.off {
                background: #fff;

                .switch_text {
                  float: right;
                  color: #ddd;
                }
              }

              &.on {
                background: #de4943;
              }

              >.switch_circle {
                position: absolute;
                top: -1px;
                left: -1px;
                width: 16px;
                height: 16px;
                border: 1px solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;

                &.right {
                  transform: translateX(27px);
                }
              }
            }
          }
        }

        .login_submit {
          display: block;
          width: 100%;
          height: 42px;
          margin-top: 30px;
          border-radius: 4px;
          background: #DE4B45;
          color: #fff;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
          border: 0;
        }
      }

      .about_us {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }

    .go_back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;

      >.iconfont {
        font-size: 20px;
        color: #999;
      }
    }
  }
}
</style>

