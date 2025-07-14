<template>
    <div class="app">
        <div class="base-chart-box">
            这是一个捣乱的盒子
        </div>
        <button @click="handleClick">点击</button>
        <BaseChart ref="box"/>
    </div>
</template>

<script>
import BaseChart from './components/BaseChart.vue'

export default {
    components: {
        BaseChart
    },
    methods: {
        handleClick() {
            this.$refs.box.wr()
        }
    }
}
</script>

<style>
.base-chart-box {
    width: 300px;
    height: 200px;
}
</style>