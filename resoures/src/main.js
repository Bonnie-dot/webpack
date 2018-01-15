// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
import  axios from 'axios'
import webStorageCache from 'web-storage-cache'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
//全局配置baseUrl
axios.defaults.baseURL = '/api'
const wsCache = new webStorageCache;
//拦截器
axios.interceptors.request.use(config => {
  if (config.method === "post") {
    config.headers['x-access-token'] = (wsCache.get('refreshToken') || {});
  }
  return config;
}, err => {
  return Promise.reject(err);
});
axios.interceptors.response.use(response => {
  if (response.data.needRefresh&&response.data.code===200) {
    let token = wsCache.get('refreshToken');
    axios.get('/refreshToken/' + token).then(data => {
      if(data.data.code===200){
        let refreshToken = data.data.data.object.refreshToken;
        wsCache.set('refreshToken', refreshToken);
      }

    })
  }
    return response

}, err => {
  return Promise.reject(err);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
