<script>
import GoodsItem from '@/components/GoodsItem.vue'
import {getHomeData} from "@/api/home";
export default {
  name: 'Home',
  components: {
    GoodsItem
  },
  data() {
    return {
      pageData: {},
      page: [],
      banner: [],
      navBar: [],
      image: {},
      richText: {}
    }
  },
  methods: {
    async getHomeData() {
      const res = await getHomeData();
      this.pageData = res.data.pageData
      this.pageData.items.forEach(item => {
        if (item.type === 'banner') {
          this.banner = item.data
        }
        if (item.type === 'navBar') {
          this.navBar = item.data
        }
        if (item.type === 'image') {
          this.image = item.data
        }
        if (item.type === 'richText') {
          this.richText = item.params
        }
        if (item.type === 'goods') {
          this.page = item.data
        }
      })
    }
  },
  created() {
    this.getHomeData();
  }
}
</script>

<template>
  <div class="home">
    <!-- 导航条 -->
    <van-nav-bar title="智慧商城" fixed />

    <!-- 搜索框 -->
    <van-search
      readonly
      shape="round"
      background="#f1f1f2"
      placeholder="请在此输入搜索关键词"
      @click="$router.push('/search')"
    />

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banner" :key="index" @click="$router.push(`${item.link.param.url}`)">
        <img :src="item.imgUrl" :alt="item.imgName">
      </van-swipe-item>
    </van-swipe>

    <!-- 导航 -->
    <van-grid column-num="5" icon-size="40">
      <van-grid-item
        v-for="(item,index) in navBar" :key="index"
        :icon="item.imgUrl"
        :text="item.text"
        @click="$router.push(`${item.link.param.url}`)"
      />
    </van-grid>

    <!-- 主会场 -->
    <div class="main">
      <img v-for="(item,index) in image" :src="`${item.imgUrl}`" :alt="item.imgName" @click="$router.push(`${item.link.param.url}`)"/>
    </div>

    <!-- 猜你喜欢 -->
    <div class="guess">
      <p v-html="richText.content"></p>

      <div class="goods-list">
        <GoodsItem v-for="(item,index) in page" :key="index" :item="item"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 主题 padding
.home {
  padding-top: 100px;
  padding-bottom: 50px;
}

// 导航条样式定制
.van-nav-bar {
  z-index: 999;
  background-color: #c21401;
  ::v-deep .van-nav-bar__title {
    color: #fff;
  }
}

// 搜索框样式定制
.van-search {
  position: fixed;
  width: 100%;
  top: 46px;
  z-index: 999;
}

// 分类导航部分
.my-swipe .van-swipe-item {
  height: 185px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 185px;
}

// 主会场
.main img {
  display: block;
  width: 100%;
}

// 猜你喜欢
.guess .guess-title {
  height: 40px;
  line-height: 40px;
  text-align: center;
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
