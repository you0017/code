<script lang="ts">
import { getSearchHistory, setSearchHistory } from '@/utils/history'

export default ({
  name: 'SearchIndex',
  data () {
    return {
      history: getSearchHistory(),
      searchValue: ''
    }
  },
  methods: {
    onSearch (this: any) {
      if (!this.searchValue || !this.searchValue.trim()) {
        return
      }
      const index = this.history.indexOf(this.searchValue)
      if (index > -1) {
        this.history.splice(index, 1)
      }
      this.history.unshift(this.searchValue)
      setSearchHistory(this.history)

      this.$router.push(`/searchList/${this.searchValue}`)
    }
  }
})
</script>

<template>
  <div>
    <van-nav-bar
      title="商品搜索"
      left-arrow
      @click-left="$router.back()"
    />

    <van-search
      v-model="searchValue"
      show-action
      :placeholder="$route.params.placeholder"
      @search="onSearch"
    >
      <template #action>
        <div
          @click="onSearch"
          style="color: white; background-color: orange; padding: 0; width: 100%">搜索</div>
      </template>
    </van-search>

    <div class="search-bar">
      <p>最近搜索</p>
      <van-icon name="delete-o" @click="history = []" />
    </div>

    <van-grid :gutter="10" class="rounded-grid">
      <van-grid-item v-for="(item, index) in history" :key="item" :text="item" @click="onSearch(searchValue = item)" />
    </van-grid>
  </div>
</template>

<style scoped>
.van-search__action {
  color: white;
  background-color: orange;
}

.van-search {
  padding: 0 12px
}

.search-bar {
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  width: 90%;
}

.rounded-grid ::v-deep .van-grid-item__content {
  border-radius: 12px;
  border: 2px solid #eee;
  overflow: hidden;
  background: #fff;
  padding: 3px;
}
</style>
