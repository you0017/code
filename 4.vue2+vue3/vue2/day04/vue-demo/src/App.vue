<template>
    <div class="app">
        <span v-if="isShow">{{title}}</span>
        <input v-else type="text" ref="inp">
        <button @click="handleEdit()">点击</button>
    </div>
</template>

<script>
export default {
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