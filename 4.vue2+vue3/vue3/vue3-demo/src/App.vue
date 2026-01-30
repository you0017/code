<script setup>
import MyInput from '@/components/my-input.vue'
import {provide, ref} from 'vue'
const txt = ref('123456')
const a = ref(1)
provide('a', a)
provide('changeA', (newVal) => {
  console.log(newVal)
  a.value = newVal
})
</script>

<template>
<div>
  <MyInput v-model="txt"></MyInput>
  {{ txt }}
</div>
</template>



