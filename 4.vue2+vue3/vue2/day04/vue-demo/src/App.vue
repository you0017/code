<template>
    <div class="app">
        <span v-if="isShow">{{title}}</span>
        <input v-else type="text" ref="inp">
        <button @click="handleEdit()">点击</button>
      <AppA :title.sync="title"/>
      <div ref="abc">待修改</div>
      <button @click="$refs.abc.innerText = '1111'">ref修改</button>
    </div>
</template>

<script>
import AppA from "@/components/AppA.vue";

export default {
  components: {AppA: AppA},
    data() {
        return {
            title: '标题',
            isShow: true
        }
    },
    methods: {
        handleEdit() {
            this.isShow = !this.isShow
            //异步，等待上面执行完在执行
            this.$nextTick(()=>{
                console.log(this.$refs.inp)
                this.$refs.inp.focus()
            })
        }
    }
}
</script>

<style>
</style>