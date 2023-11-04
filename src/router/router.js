import Router from "vue-router";
import Vue from "vue";
import Index from "../components/Index.vue"
import CYRD_6Turbine from "../components/CYRD_6Turbine.vue"
import FMSimulation from "../components/FMSimulation.vue"
import HLHS_C01Turbine from "../components/HLHS_C01Turbine"
import HNHY_10MWTurbine from "../components/HNHY_10MWTurbine"


Vue.use(Router)

// 防止跳转同一路径出异常
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
    mode: 'history', // 可以使用HTML5历史记录，去掉URL中的#
    
    routes: [
        {
            path: '/cyrd_6turbine',
            name: 'cyrd_6turbine',
            component: CYRD_6Turbine
        },{
            path: '/',
            name: 'index',
            component: Index
        },{
            path: '/fms',
            name: 'fms',
            component: FMSimulation,
        },{
            path: '/hlhs_c01turbine',
            name: 'hlhs_c01turbine',
            component: HLHS_C01Turbine,
        },{
            path: '/hnhy_10mwturbine',
            name: 'hnhy_10mwturbine',
            component: HNHY_10MWTurbine,
        }
    ]
})
  
export default router