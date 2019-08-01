import Vue from 'vue'
import Router from 'vue-router'
import indexList from '@/components/indexList'
import articleContent from '@/components/articleContent'
import userInfo from '@/components/userInfo'
import essenceList from '@/components/essenceList'
import shareList from '@/components/shareList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexList',
      components: {
        main:indexList
      }
    },{
      path: '/articleContent/:id&:name',
      name: 'articleContent',
      components: {
        main:articleContent
      }
    },{
      path: '/userInfo/:name',
      name: 'userInfo',
      components: {
        main:userInfo
      }
    },
    {
      path: '/essenceList',
      name: 'essenceList',
      components: {
        main:essenceList
      }
    },
    {
      path: '/shareList',
      name: 'shareList',
      components: {
        main:shareList
      }
    }
  ]
})
