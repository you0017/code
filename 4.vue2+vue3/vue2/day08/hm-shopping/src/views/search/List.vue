<script lang="ts">
import { getList } from '@/api/search'
import { Toast } from 'vant'

export default ({
  name: 'ListIndex',
  data () {
    return {
      value: '',
      list: []
    }
  },
  methods: {
    async getList (this: any) {
      try {
        const res = await getList(this.value)
        this.list = res?.data?.list?.data
      } catch (error: any) {
        Toast.fail(error)
      }
      console.log(this.list)
    }
  },
  mounted (this: any) {
    this.value = this.$route.params.searchValue
    this.getList()
  }
})
</script>

<template>
  <div>
    <van-nav-bar
      title="商品列表"
      left-arrow
      @click-left="$router.back()"
    />

    <van-search
      v-model="value"
      placeholder=""
      @click="$router.push(`/search/`)"
    />

    <template v-if="list">
      <van-card
        v-for="(value, index) in list"
        :key="index"
        :price="value.goods_price_max"
        :title="value.goods_name"
        :thumb="value.goods_images[0].preview_url"
        :origin-price="value.goods_price_min"
        @click="$router.push(`/proDetail/${value.goods_id}`)"
      />
    </template>
  </div>
</template>

<style scoped>

</style>
