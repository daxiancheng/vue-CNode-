// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})

Vue.filter('listStyle',function(e){
  if(e.good === true){
    return '精华'
  }else if(e.top === true){
    return '置顶'
  }else if(e.tab ==='share'){
    return '分享'
  }else if(e.tab === 'ask'){
    return '问答'
  }
})

Vue.filter('dateTime',function(e){
  if(!e){return ''}
  let lastReply = new Date(e)
  let time = new Date().getTime() - lastReply.getTime()
  let t = time/1000
  if(t <30){
    return '刚刚'
  }else if(t <60){
    return parseInt(t)+'秒前'
  }else if(t/60 <60){
    return parseInt(t/60)+'分钟前'
  }else if(t/3600 <24){
    return parseInt(t/3600)+'小时前'
  }else if(t/86400 <30){
    return parseInt(t/86400)+'天前'
  }else if(t/2592000 <12){
    return parseInt(t/2592000)+'个月前'
  }else{
    return parseInt(t/31104000)+'年前'
  }
})