/**
 * @User:Bonnie
 * @Date:2018/1/9
 * @Describe:
 */
import axios from 'axios'
import webStorageCache from 'web-storage-cache'
import {
  Message
} from 'element-ui'
var wsCache = new webStorageCache();
export const login=({commit},option)=>{
  axios({
    method: 'post',
    url: '/data/analysis/login',
    params: {
      username:option.username,
      password:option.password,
      captcha:option.captcha,
    },
    responseType: 'json',
  }).then(r=>{
    if(r.data.code==200){
      wsCache.set('islogin',true,60*30);
      wsCache.set('accessToken',r.data.data.object.accessToken,60*30);
      wsCache.set('refreshToken',r.data.data.object.refreshToken,60*30);
      commit({type:"getLogin",isLogin:true});
    }else{
      Message.error(r.data.msg);
    }

  })
}
