<template>
  <div>
     <!-- 子轉父傳值 -->
      子組件:
      <span>{{ childValue }}</span>
      <!-- 定義一個子組件傳值的方法 -->
      <br>
      <br>
      <input type="button" value="點擊觸發" style="width:110px" @click="childClick">
  </div>
</template>

<script>
export default {
    data(){
        return{
            childValue: '我是子組件的數據'
        }
    },
    methods:{
        childClick() {
            // childByValue是在父组件on監聽的方法
            // 第二个参数this.childValue是需要傳的值
            this.$emit('childByValue',this.childValue)
            console.log('傳送:' + this.childValue)
        }
    }
}
</script>

<style>

</style>