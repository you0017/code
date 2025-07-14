<template>
    <!-- 主体区域 -->
    <section id="app">
<!--        <BaseSelect :selectValue="selectValue" @input="input"/>-->
        <BaseSelect v-model="selectValue"/>
        <button @click="wr()">alert</button>
    </section>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'

export default {
    components: {
        BaseSelect
    },
    data() {
        return {
            selectValue: '1'
        }
    },
    methods: {
        /*input(value) {
            console.log(value)
            this.selectValue = value
        }*/
        wr() {
            console.log(this.selectValue)
        }
    }
}
</script>

<style>

</style>
