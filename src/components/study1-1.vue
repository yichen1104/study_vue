<template>
  <div>
      <!-- 父傳子傳值 -->
      子組件:
      <span> {{ inputName }}</span>
  </div>

</template>

<script>
export default {
    //接收父組件的值
    props: {
        inputName: String,
    }
}
</script>

<style>

</style>