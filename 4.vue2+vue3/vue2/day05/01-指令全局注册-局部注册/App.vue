<template>
  <div>
    <h1>自定义指令</h1>
    <input v-focus ref="inp" type="text">
  </div>
</template>

<script>
export default {
  // mounted () {
  //   this.$refs.inp.focus()
  // }
  
  // 2. 局部注册指令
  directives: {
    // 指令名：指令的配置项
    focus: {
      //inserted会在指令所在的元素被插入到页面中时执行
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style>

</style>