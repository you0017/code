<script setup>
import SonVue from './components/SonVue.vue'
import {ref} from "vue";


const title = ref('这是标题')

const changeFn = (click) => {
  title.value = click
}

const number = ref(0)

const add = () => {
  number.value++
}
</script>

<template>
  <div id="app">
      <!-- 父传子 -->
    <SonVue :title="title" :number="number" @changeTitle="changeFn" @add="add()"/>
  </div>
</template>

<style>
</style>
