<script lang="ts">
export default ({
  name: 'CategoryIndex',
  data () {
    return {
      activeKey: 0
    }
  },
  props: {
    page: Object
  },
  methods: {
    to (this: any, path: string) {
      this.$router.push(path)
    }
  },
  mounted (this: any) {
  }
})
</script>

<template>
  <div class="category">
    <aside class="sidebar">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
    </aside>
    <main class="content">
      <van-grid :column-num="3" :gutter="8">
        <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
      </van-grid>
    </main>
  </div>
</template>

<style scoped>
.category {
  display: flex;
  min-height: 100%;
  background: #fff;
}
.sidebar {
  background: #f7f8fa;
  border-right: 1px solid #f0f0f0;
}
.content {
  flex: 1;
  padding: 12px;
}

</style>
