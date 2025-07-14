<template>
    <!-- 主体区域 -->
    <section id="app">
        <AppA/>
        <AppB/>
        <button @click="msg = '1231'">点击</button>
        <button @click="obj.name = '恶大大'">点击</button>
    </section>
</template>

<script>
import AppA from './components/AppA.vue'
import AppB from './components/AppB.vue'

export default {
    components: {
        AppA,
        AppB
    },
    provide() {
        return {
            msg: this.msg,
            obj: this.obj
        }
    },
    data() {
        return {
            msg: 'hello world',
            obj: {
                name: '张三'
            }
        }
    }
}
</script>

<style>

</style>
