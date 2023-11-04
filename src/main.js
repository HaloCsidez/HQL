// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//-------------element UI
import Vue from 'vue'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'
// import './element-variables.scss'

//-------------dataV
import dataV from '@jiaminghi/data-view'
import App from './App'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import router from './router/router.js'


Vue.use(ElementUI)
Vue.use(dataV)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
