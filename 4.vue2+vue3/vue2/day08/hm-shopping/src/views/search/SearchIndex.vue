<script>
import GoodsItem from '@/components/GoodsItem.vue'
import {getSearchData} from "@/api/search";
export default {
  name: 'SearchIndex',
  components: {
    GoodsItem
  },
  data() {
    return {
      list: [],
      page: 1
    }
  },
  computed: {
    querySearch() {
      return this.$route.query.search
    }
  },
  methods: {
    async goSearch(sort) {
      const obj = {
        categoryId: this.$route.query.categoryId,
        goodsName: this.$route.query.search,
        page: this.page,
        sort: sort,
        sortPrice: 1
      }
      const res = await getSearchData(obj)
      this.list = res.data.list.data
      console.log(this.list)
    }
  },
  created() {
    this.goSearch()
  }
}
</script>

<template>
  <div class="search">
    <van-nav-bar fixed title="商品列表" left-arrow @click-left="$router.go(-1)" />

    <van-search
      readonly
      shape="round"
      background="#ffffff"
      :value="querySearch || '搜索商品'"
      show-action
      @click="$router.push('/search')"
    >
      <template #action>
        <van-icon class="tool" name="apps-o" />
      </template>
    </van-search>

    <!-- 排序选项按钮 -->
    <div class="sort-btns">
      <div class="sort-item" @click="goSearch('all')">综合</div>
      <div class="sort-item" @click="goSearch('sales')">销量</div>
      <div class="sort-item" @click="goSearch('price')">价格 </div>
    </div>

    <div class="goods-list" v-if="list.length > 0">
      <GoodsItem v-for="(item,index) in list" :key="index" :item="item"></GoodsItem>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
    }
  }
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
