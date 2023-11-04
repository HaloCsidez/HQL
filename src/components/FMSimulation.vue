<template>
    <div class="hello">
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6" style="text-align: center;">
                <el-button type="success" @click="default_signal()">故障信号重置</el-button>
            </el-col>
            <el-col :span="6" style="text-align: center;">
                <el-button type="danger" @click="bf_signal()">叶片断裂</el-button>
            </el-col>
            <el-col :span="6" style="text-align: center;">
                <el-button type="danger" @click="ofv_signal()">油膜振动</el-button>
            </el-col>
            <el-col :span="6" style="text-align: center;">
                <el-button type="danger" @click="dsf_signal()">动静碰擦</el-button>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6" style="text-align: center;">
                <el-button type="danger" @click="glo_signal()">汽液激振</el-button>
            </el-col>
            <el-col :span="6" style="text-align: center;">
                <el-button type="danger" @click="ri_signal()">转子不平衡</el-button>
            </el-col>
            <el-col :span="6" style="text-align: center;">
                
            </el-col>
            <el-col :span="6" style="text-align: center;">
                
            </el-col>
        </el-row>
      
      
      
      
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
  const baseURL = 'http://localhost:8888/';
  export default {
    name: 'FMSimulation',
    
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        result:'11',
        // wsDto: {},
      }
    },
    methods: {
      default_signal: function(){
        const wsDto = {
          'slaveId': 1,
          "address": 0,
          "quantity": 5,
          "value": 0,
          "values": [0, 0, 0, 0, 0]
        }
        axios.create({
          baseURL, 
          timeout: 5000,
        }).post('/modbus/writeMultipleRegisters', JSON.stringify(wsDto)).then(
          response=>{
            console.log(response)
          }
        )
      },
      bf_signal: function(){
        axios.create({
          baseURL,
          timeout: 5000,
        }).post('/modbus/bladeFracture').then(response => {
          console.log(response)
          this.result = response.data.code
          if (response.data.code == 200) {
            this.$message({
              message: '仿真信号成功发送',
              type: 'success'
            })
          } else {
            this.$message({
              message: '仿真信号成功失败',
              type: 'error'
            })
          }
        });
      },
      ofv_signal: function(){
        axios.create({
          baseURL,
          timeout: 5000,
        }).post('/modbus/oilFilmVibration').then(response => {
          console.log(response)
          this.result = response.data.code
          if (response.data.code == 200) {
            this.$message({
              message: '仿真信号成功发送',
              type: 'success'
            })
          } else {
            this.$message({
              message: '仿真信号成功失败',
              type: 'error'
            })
          }
        });
      },
      dsf_signal: function(){
        axios.create({
          baseURL,
          timeout: 5000,
        }).post('/modbus/dynamicStaticFriction').then(response => {
          console.log(response)
          this.result = response.data.code
          if (response.data.code == 200) {
            this.$message({
              message: '仿真信号成功发送',
              type: 'success'
            })
          } else {
            this.$message({
              message: '仿真信号成功失败',
              type: 'error'
            })
          }
        });
      },
      glo_signal: function(){
        axios.create({
          baseURL,
          timeout: 5000,
        }).post('/modbus/gasLiquidOscillation').then(response => {
          console.log(response)
          this.result = response.data.code
          if (response.data.code == 200) {
            this.$message({
              message: '仿真信号成功发送',
              type: 'success'
            })
          } else {
            this.$message({
              message: '仿真信号成功失败',
              type: 'error'
            })
          }
        });
      },
      ri_signal: function(){
        axios.create({
          baseURL,
          timeout: 5000,
        }).post('/modbus/rotorImbalance').then(response => {
          console.log(response)
          this.result = response.data.code
          if (response.data.code == 200) {
            this.$message({
              message: '仿真信号成功发送',
              type: 'success'
            })
          } else {
            this.$message({
              message: '仿真信号成功失败',
              type: 'error'
            })
          }
        });
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  </style>
  