<script>
import { Notify } from 'vant'

export default {
  name: 'LayOut',
  methods: {
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<template>
  <div id="layOut">
    <router-view/>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/category">分类页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>

</style>
