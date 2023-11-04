<template>
  <dv-full-screen-container style="width: 100%; height: 100%; flex-direction: column; display: flex;">

    

    
    <dv-border-box-11 title="杭汽集团监测平台" style="flex-direction: column; display: flex;">
      <!-- <el-row>
        <el-col :span="24">
          <el-header style="text-align: center;font-size: xx-large;">杭汽集团监测平台</el-header>
        </el-col>
      </el-row> -->
      
      <el-row style="width: auto; height: max-content; display: flex; margin: 4% 2% 0%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        </el-breadcrumb>
      </el-row>
      <!-- <dv-decoration-5 style="width:300px;height:40px; display: flex; justify-self: center; margin: 0% 42% 0%;" /> -->

      
        <el-row style="height: auto; display: flex; margin: 1% 1%;" >
          <!-- <el-col :span="1">

          </el-col> -->
          <el-col :span="4">
            <el-aside style="height: 800px; width: auto;">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                style="height: 100%; white-space: normal; word-wrap: break-all; line-height: normal;">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>设备信息</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">杭汽集团</template>
                    <el-submenu index="1-1">
                      <template slot="title">长源热电有限公司</template>
                      <el-menu-item index="1-1-1" @click="changeView('cyrd_6turbine')">6号汽轮机发电机组</el-menu-item>
                    </el-submenu>

                    <el-submenu index="1-2">
                      <template slot="title">华鲁恒升</template>
                      <el-menu-item index="1-2-1" @click="changeView('hlhs_c01turbine')">动力岛C01</el-menu-item>
                    </el-submenu>

                    <el-submenu index="1-3">
                      <template slot="title">灌南宏耀环保能源有限公司</template>
                      <el-menu-item index="1-3-1" style="white-space: normal; word-wrap: break-all; line-height: normal;"  @click="changeView('hlhs_c01turbine')">10MW高温高压非可调抽汽背压式汽轮机</el-menu-item>
                    </el-submenu>
                  </el-menu-item-group>
                  
                </el-submenu>
                <el-menu-item index="2" @click="changeView('fms')">
                  <i class="el-icon-menu"></i>
                  <span slot="title">故障模拟</span>
                </el-menu-item>
              </el-menu>
            </el-aside>
          </el-col>
          <el-col :span="20">

            <router-view></router-view>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-footer>Footer</el-footer>
          </el-col>
        </el-row>

    </dv-border-box-11>

</dv-full-screen-container>
</template>

<script>
import CYRD_6Turbine from './components/CYRD_6Turbine'
import Index from './components/Index.vue';
import FMSimulation from './components/FMSimulation.vue';
import HLHS_C01Turbine from './components/HLHS_C01Turbine.vue';
import HNHY_10MWTurbine from './components/HNHY_10MWTurbine.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    CYRD_6Turbine,
    Index,
    FMSimulation,
    HLHS_C01Turbine,
    HNHY_10MWTurbine
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeView: function(path) {
      this.$router.push({
        name: path,
      })
    }
  }
}


</script>

<style>

  body {
    background-color: #000;
    color: #fff;
    margin: 0%;
  }
  .el-header {
    /* background-color: #363636; */
    color: #307DCD;
    line-height: 60px;
    font-size: large;
  }
  .el-breadcrumb {
    /* background-color: #B3C0D1; */
    /* color: #333333; */
    /* line-height: 300px;
    padding: 0 20px; */
  }
  .el-aside {
    /* color: #333; */
  }

  .el-menu-item {
    /* white-space: normal;  */
    word-wrap: break-all; 
    /* line-height: normal; */
  }
</style>
