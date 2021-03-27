<template>
  <div oncontextmenu="return false" v-loading="loading">
    <div>
      <!-- 父傳子傳值 -->
        父傳給子:<br>
        父組件:
        <el-input v-model="input" style="width:110px"></el-input>
        <br>
        <br>
        <!--引用子組件-->
        <child :inputName="input"></child>
         <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
         <!--  引入共用bus.js 來做中間傳輸的工具(用來輸入值) -->
         <br>
         <br>
         共用組件的方法:<br>
         B組件:
         
         <span>{{ name }}</span>
         <br>
         <el-button type="success" icon="el-icon-check" circle @click="getData"></el-button>
          <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
         <study-2></study-2>

         
         
  
         

    </div>
  </div>
</template>

<script>
//引用子組件使用
import child from './study1-1'
import study2 from './study2'
// 引入共用bus.js 來做中間傳輸的工具(用來接收值)
import Bus from '../bus'
export default {
  components:{
    child,study2
  },
  data(){
    return{
    input:'',name:0, loading:false,
    }
  },

  //bus使用
mounted:function(){
    // 用$on事件來接收參數
    Bus.$on('val',(data) => {
      console.log("收到的值:"+data)
      this.name = data
    })
  },
  methods:{
      getData: function(){
        this.name++
      }
    }
  }
</script>

<style>

</style>