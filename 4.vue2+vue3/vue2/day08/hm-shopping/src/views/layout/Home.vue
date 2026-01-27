<script lang="ts">
export default ({
  name: 'HomeIndex',
  data () {
    return {
      value: ''
    }
  },
  props: {
    title: String,
    page: {
      type: Object,
      default: () => ({ items: [] })
    }
  },
  methods: {
  },
  mounted (this: any) {
  }
})
</script>

<template>
  <div>
    <div style="padding: 10px 0; background-color: #00BE9A; font-size: large">
      智慧商城
    </div>

    <van-search
      v-model="value"
      :placeholder="page.items && page.items[0] && page.items[0].params ? page.items[0].params.placeholder : '请输入关键词'"
      @click="$router.push(`/search/${page.items && page.items[0] && page.items[0].params ? page.items[0].params.placeholder : '请输入关键词'}`)"
    />

    <van-swipe v-if="page.items && page.items[1] && page.items[1].data" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in page.items[1].data" :key="index">
        <img alt="#" :src="image.imgUrl" width="100%" />
      </van-swipe-item>
    </van-swipe>

    <van-notice-bar
      v-if="page.items && page.items[2] && page.items[2].params"
      left-icon="volume-o"
      :text="page.items[2].params.text"
    />

    <van-grid :column-num="5">
      <van-grid-item v-for="(value, index) in page.items[3].data" :key="index" :icon="value.imgUrl" :text="value.text" @click="to(value.link.param.path)" />
    </van-grid>

    <template v-if="page.items && page.items[6] && page.items[6].data">
      <van-card
        v-for="(item, index) in page.items[6].data"
        :key="index"
        :price="item.goods_price_max"
        :title="item.goods_name"
        :thumb="item.goods_image"
        :origin-price="item.goods_price_min"
        @click="$router.push(`/proDetail/${item.id}`)"
      />
    </template>
  </div>
</template>

<style scoped>

</style>
