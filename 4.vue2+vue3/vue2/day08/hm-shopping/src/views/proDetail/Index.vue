<script lang="ts">
import CommentSection from '@/components/CommentSection.vue'
export default ({
  name: 'ProDetailIndex',
  components: { CommentSection }
})
</script>

<template>
  <div>
    <div>商品详情</div>
    <comment-section :target-id="$route.params.id" />
  </div>
</template>

<style scoped>

</style>
