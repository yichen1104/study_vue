<template>
  <div>
      <!-- 子轉父傳值 -->
      子傳父的方法:
      <br>
      父組件:
      <span>{{ name }}</span>
      <br>
      <br>
      <!-- 引入子组件 定义一个on的方法監聽子组件的狀態-->
      <child v-on:childByValue="childByValue_fu"></child>
     <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
     <!-- 非父子組件傳值 -->
     <br>
     共用組件的方法:<br>
     A組件:
     <span>{{ elementValue }}</span><br><br>
    <el-button type="success" icon="el-icon-check" circle @click="elementByValue"></el-button>
  </div>
</template>

<script>
// 引入子組件使用
import child from './study2-1'
// 引入共用bus.js 來做中間傳輸的工具(用來輸入值)
import Bus from '../bus'
export default {
    components:{
        child
    },
    data(){
        return{
            name:'',elementValue:4
        }
    },
    methods:{
        // 子傳父
        childByValue_fu: function(childValue){
            console.log("接收:"+childValue),
            // childValue就是子组件傳過来的值
            this.name = childValue
        },
        // 共用傳值
        elementByValue: function(){
            Bus.$emit('val',this.elementValue)
        }
    }

}
</script>

<style>

</style>