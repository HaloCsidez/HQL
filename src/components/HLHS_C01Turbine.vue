<template>
    <div class="hello">
      <img style="width: 100%;" src="../assets/HLHS_C01Turbine.png">
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  const baseURL = 'http://localhost:8888/';
  export default {
    name: 'HLHS_C01Turbine',
    
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
          baseURL, timeout: 5000,
        }).post('/modbus/writeMultipleRegisters', wsDto).then(
          response=>{
            console.log(response)
          }
        )
      },
      button_log: function(){
        
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
  </style>
  