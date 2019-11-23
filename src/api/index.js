/*
 *@Description: 所有的请求组件
 *@ClassAuthor: 卡奇007
 *@Date: 2019-11-22 13:16:01
 *@NO BUG!!! It is better to be clear than to be clever
*/

import ajax from './ajax'

// 获取酒仙分类列表
export const getWines = ()=>ajax({
  url:'/index_category',
  
})

// /* 用户名密码登陆 */
// export const loginWithPassword = (name, pwd, captcha) => ajax({
//   url: '/login_pwd',
//   method: 'POST',
//   data: {
//     name,
//     pwd,
//     captcha
//   }
// })


// /* 手机号验证码登陆 */
// export const loginWithPhone = (phone, code) => ajax({
//   url: '/login_sms',
//   method: 'POST',
//   data: {
//     phone,
//     code
//   }
// })


// /* 发送短信验证码 */
// export const sendCode = phone => ajax({
//   url: '/sendcode',
//   params: {
//     phone
//   }
// })
// /*  自动登录 */
// export const autoLogin = () => ajax({
//   url:'/auto_login',
//   headers: {
//     needToken: true
//   }
// })