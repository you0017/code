<template>
  <div id="app">
      <AppHeader/>
      <AppMain/>
      <AppFooter/>
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "@/components/AppHeader.vue";
import AppMain from "@/components/AppMain.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<style>
#app {
    width: 400px;
    height: 400px;
    background-color: red;
}
</style>
