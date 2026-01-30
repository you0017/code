<script setup>
import {defineModel, inject, ref} from 'vue'
const modelValue = defineModel()
const c = ref('1')
const a = inject('a');
const changeA = inject('changeA');
</script>

<template>
<div>
  <input 
    type="text"
    :value="modelValue"
    @input="e => modelValue = e.target.value"
  >
  {{ c }}
  <input
    type="text"
    @input="e => changeA(e.target.value)"
  >
  {{ a }}
</div>
</template>



