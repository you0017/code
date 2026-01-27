<script lang="ts">
export default ({
  name: 'NotFoundView'
})
</script>

<template>
  <div class="not-found">
    <div class="bg" />

    <van-nav-bar
      title="页面不存在"
      left-arrow
      fixed
      placeholder
      @click-left="$router.back()"
      class="nav"
    />

    <div class="content">
      <div class="code">404</div>
      <div class="title">页面走丢了</div>
      <div class="desc">你访问的页面可能已被删除或暂时不可用</div>

      <van-empty image="error" description="" class="empty">
        <van-button class="btn" round block type="primary" @click="$router.replace('/')">返回首页</van-button>
        <van-button class="btn-ghost" round block plain type="primary" @click="$router.back()">返回上一页</van-button>
      </van-empty>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  position: relative;
  min-height: 100vh;
  background: #fff;
  overflow: hidden;
}

.bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(260px 260px at 8% 18%, rgba(255, 183, 88, 0.26), rgba(255, 183, 88, 0)),
    radial-gradient(320px 320px at 92% 22%, rgba(105, 195, 255, 0.22), rgba(105, 195, 255, 0)),
    radial-gradient(420px 420px at 50% 92%, rgba(255, 129, 107, 0.14), rgba(255, 129, 107, 0));
  pointer-events: none;
}

.nav ::v-deep .van-nav-bar__title {
  font-weight: 600;
  color: #333;
}

.nav ::v-deep .van-nav-bar__arrow {
  color: #333;
}

.content {
  position: relative;
  padding: 28px 16px 0;
  text-align: center;
}

.code {
  font-size: 60px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 2px;
  background-image: linear-gradient(90deg, #ffb54b, #ff8a3d);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.title {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  color: #222;
}

.desc {
  margin-top: 6px;
  font-size: 13px;
  color: #9aa0a6;
}

.empty {
  margin-top: 18px;
}

.empty ::v-deep .van-empty__image {
  width: 200px;
  height: 160px;
}

.btn {
  margin-top: 10px;
  height: 44px;
  border: 0;
  background-image: linear-gradient(90deg, #ffb54b, #ff8a3d);
  box-shadow: 0 8px 18px rgba(255, 138, 61, 0.25);
}

.btn-ghost {
  margin-top: 10px;
  height: 44px;
}
</style>
