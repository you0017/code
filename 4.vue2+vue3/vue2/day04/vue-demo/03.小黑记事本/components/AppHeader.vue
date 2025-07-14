<script>
export default ({
    data() {
        return {
            title: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.title)
        }
    }
})
</script>

<template>
    <!-- 输入框 -->
    <header class="header">
        <h1>小黑记事本</h1>
        <input placeholder="请输入任务" class="new-todo" v-model="title"/>
        <button class="add" @click="add">添加任务</button>
    </header>
</template>

<style scoped>

</style>