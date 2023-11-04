<template>
  <div class="hello">
    <el-row>
        <el-col :span="16">
          <img style="width: 100%;" src="../assets/CYRD_6Turbine.png">
        </el-col>
        <el-col :span="8">
          <el-row>
            <div ref="chart1" style="width: 100%; height: 200px;"></div>
          </el-row>
          <el-row>
            <div ref="chart2" style="width: 100%; height: 200px;"></div>
          </el-row>
          <el-row>
            <div ref="chart3" style="width: 100%; height: 200px;"></div>
          </el-row>
          <el-row>
            <div ref="chart4" style="width: 100%; height: 200px;"></div>
          </el-row>
          
        </el-col>
      </el-row>



    <!-- <img style="width: 100%;" src="../assets/CYRD_6Turbine.png"> -->
    <!-- <div ref="chart" style="width: 100%; height: 400px;"></div> -->
  </div>
  
</template>

<script>
import axios from 'axios';
const baseURL = 'http://localhost:8888/';
import * as echarts from 'echarts';
export default {
  name: 'CYRD_6Turbine',
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      result:'11',
      angle: 180,
      myChart: null,
      testChart1: null,
      testChart2: null,
      testChart3: null,
      date: [],
      data: [Math.random() * 150],
      base: new Date(2014, 9, 3),
      oneDay: 24 * 3600 * 1000,
      now: new Date()
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
    },
    computerCosine(angle) {
      this.cosineValue = Math.cos((angle * Math.PI)/180).toFixed(4)*100 + 115 + Math.random()*5
    },

    addData(shift, angle) {
      this.now = [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/');
      this.date.push(this.now);
      this.computerCosine(angle)
      this.data.push(this.cosineValue);
      if (shift) {
        this.date.shift();
        this.data.shift();
      }
      this.now = new Date(+new Date(this.now) + this.oneDay);
    },
    startUpdating() {
      setInterval(() => {
        this.addData(true, this.angle++);
        this.myChart.setOption({
          xAxis: {
            data: this.date
          },
          series: [
            {
              name: '成交',
              data: this.data
            }
          ]
        });
        this.testChart1.setOption({
          xAxis: {
            data: this.date
          },
          series: [
            {
              name: '成交',
              data: this.data
            }
          ]
        });
        this.testChart2.setOption({
          xAxis: {
            data: this.date
          },
          series: [
            {
              name: '成交',
              data: this.data
            }
          ]
        });
        this.testChart3.setOption({
          xAxis: {
            data: this.date
          },
          series: [
            {
              name: '成交',
              data: this.data
            }
          ]
        });
        // console.log(this.data)
      }, 500);
      
    }
  },
  mounted(){

    this.myChart = echarts.init(this.$refs.chart1);
    this.testChart1 = echarts.init(this.$refs.chart2);
    this.testChart2 = echarts.init(this.$refs.chart3);
    this.testChart3 = echarts.init(this.$refs.chart4);
    for (let i = 1; i < 100; i++) {
      this.addData();
    }

    
    const option = {
      xAxis: {
        name: '时间',
        // type: 'category',
        boundaryGap: false,
        data: this.date
      },
      yAxis: {
        // boundaryGap: [0, '50%'],
        name: '通频(T)',
        type: 'value',
        min: 0,
        max: 200,
        // interval: 2.5 // 指定刻度间隔
      },
      series: [
        {
          name: '成交',
          type: 'line',
          smooth: false,
          // symbol: 'none',
          // stack: 'a',
          data: this.data,
          label: {
            show: true,
            position: 'bottom',
            formatter: function (params) {
                return params.value.toFixed(2)
            },
            textStyle: {
              fontSize: 10
            }
          }
        }
      ]
    };
    this.myChart.setOption(option);
    this.testChart1.setOption(option);
    this.testChart2.setOption(option);
    this.testChart3.setOption(option);

    this.startUpdating();
  },
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
