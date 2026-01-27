<script>
export default {
  name: "AppA",
  props: {
    title: {
      type: String,
      default: "默认标题"
    }
  },
  data() {
    return {
      msg: ''
    }
  },
}
</script>

<template>
  <div class="children">
    <h2>我是子组件</h2>
    <input v-model="msg">
    <button @click="$emit('update:title', msg)">点击</button>
  </div>
</template>

<style scoped>

</style>