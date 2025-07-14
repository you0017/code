<template>
    <!-- 主体区域 -->
    <section id="app">
        <AppA/>
        <AppB/>
    </section>
</template>

<script>
import AppA from './components/AppA.vue'
import AppB from './components/AppB.vue'

export default {
    components: {
        AppA,
        AppB
    }
}
</script>

<style>

</style>
