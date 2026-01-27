<script lang="ts">
import { Toast } from 'vant'
import { getIndex } from '@/api/layout'

export default ({
  name: 'LayoutIndex',
  data () {
    return {
      page: {
        items: []
      }
    }
  },
  methods: {
    async getIndex (this: any) {
      try {
        const res = await getIndex()
        this.page = res?.data?.pageData || { items: [] }
      } catch (error: any) {
        Toast(error)
      }
    }
  },
  mounted (this: any) {
    this.getIndex()
  }
})
</script>

<template>
  <div class="layout">
    <router-view :page="page" />
    <van-grid clickable :column-num="4" :square="false" class="grip">
      <van-grid-item icon="home-o" text="首页" to="/" />
      <van-grid-item icon="apps-o" text="分类" to="/category" />
      <van-grid-item icon="cart-o" text="购物车" to="/cart" />
      <van-grid-item icon="https://b.yzcdn.cn/vant/icon-demo-1126.png" text="我的" to="/user" />
    </van-grid>
  </div>
</template>

<style scoped>
.layout {
  padding-bottom: calc(70px + env(safe-area-inset-bottom));
  background: #fff;
  min-height: 100vh;
}
.grip {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 70px;
  background: #fff;
  border-top: 1px solid #f2f2f2;
}
</style>
