import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/HomePage.vue'
import chinaTotal from '../views/china/chinaTotal.vue'
import chinaData from '../views/china/chinaData.vue'
import abroadTotal from '../views/abroad/abroadTotal.vue'
import riskArea from '../views/risk/riskArea.vue'
import riskPolicy from '../views/risk/riskPolicy.vue'
import realtimeNews from '../views/news/realtimeNews.vue'
import realtimeRumor from '../views/news/realtimeRumor.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path:'/china/total',
          name:'总体趋势',
          component: chinaTotal,
        },
        {
          path:'/china/data',
          name:'数据概览',
          component: chinaData,
        },
        {
          path:'/abroad/total',
          name:'总体趋势',
          component: abroadTotal,
        },
        {
          path:'/risk/area',
          name:'风险区域',
          component: riskArea,
        },
        {
          path:'/risk/policy',
          name:'出行查询',
          component: riskPolicy,
        },
        {
          path:'/realtime/news',
          name:'实时播报',
          component: realtimeNews,
        },
        {
          path:'/realtime/rumor',
          name:'辟谣信息',
          component: realtimeRumor,
        },
      ]
    },
  ]
})
export default router