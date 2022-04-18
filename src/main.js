import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/_common.scss'
import axios from 'axios'
import echarts from 'echarts'
import 'echarts/map/js/china' 
Vue.prototype.$echarts = echarts

Vue.prototype.$axios = axios
axios.defaults.baseURL = ''
axios.defaults.headers.post['Content-Type'] = 'application/json';

import {postRequest} from "./utils/api";
import {getRequest} from "./utils/api";
import {putRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";

Vue.config.productionTip = false


Vue.prototype.postRequest = postRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  axios,
  echarts,
}).$mount('#app')
