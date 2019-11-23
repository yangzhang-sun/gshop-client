// 对axios进行二次封装
import qs from 'qs'
import axios from 'axios'
import {MessageBox} from 'mint-ui'

const instance = axios.create({
  baseURL: '/api'
})


// 1. 添加请求拦截器
instance.interceptors.request.use(config => {
  if(config.method.toUpperCase() === 'POST' && config.data instanceof Object){
    config.data = qs.stringify(config.data) 
  }
  return config
})


// 2. 添加响应拦截器
instance.interceptors.response.use(
  response => response.data,
  error => {
      MessageBox.alert('请求失败')
      return new Promise(() => {}) 
    }

)



export default instance
