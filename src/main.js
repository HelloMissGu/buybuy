import Vue from 'vue'
import App from './App.vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 引入index组件
import index from './components/index.vue'

// 引入goodsinfo组件
import goodsinfo from './components/goodsinfo.vue'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入首页css
import './assets/statics/site/css/style.css';

// 引入懒加载
import VueLazyload from 'vue-lazyload';

import moment from 'moment';

import axios from "axios";
axios.defaults.baseURL="http://47.106.148.205:8899";
 
// 挂载到Vue的原型上->Vue实例化出来的对象 共用 vue-resource this.$http
Vue.prototype.axios = axios;

// 使用懒加载中间件`
Vue.use(VueLazyload,{
  loading:require('./assets/statics/img/01.gif'),
})
// 使用路由中间件
Vue.use(VueRouter);

// 注册路由规则
const router = new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      component:index
    },
    {
      path:"/goodsinfo/:id",//加冒号可直接跳转
      component:goodsinfo
    }
  ]
})


Vue.filter('cutTime',function(value){
  return moment(value).format('YYYY-MM-DD');
})
  



Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  // 选择器
  el:"#app",
  // 挂载到vue
  router,
  // 渲染 App组件
  render: h => h(App)
})
