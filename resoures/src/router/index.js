import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Backend from '@/components/Backend'
import OpenReports from '@/components/OpenReports'
import CustomReport from '@/components/CustomReport'
import ManageReport from '@/components/ManageReport'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/home',
      name:'home',
      component:Home
    },{
      path:'/openReports',
      name:'openReports',
      component:OpenReports
    },{
      path:'/backend',
      name:'backend',
      component:Backend,
      children:[
        {path:'/customReport',name:'customReport',component:CustomReport},
        {path:'/manageReport',name:'manageReport',component:ManageReport}
      ]
    }
  ]
})
