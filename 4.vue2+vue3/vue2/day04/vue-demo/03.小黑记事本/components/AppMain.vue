<script>
export default ({
    props: {
        list: {
            type: Array
        }
    },
    methods: {
        handleDel(id) {
            this.$emit('deleteItem',id)
        }
    }
})
</script>

<template>
    <!-- 列表区域 -->
    <section class="main">
        <ul class="todo-list">
            <li class="todo" v-for="(item, index) in list" :key="index">
                <div class="view">
                    <span class="index">{{ item.id }}</span> <label>{{ item.title }}</label>
                    <button class="destroy" @click="handleDel(item.id)"></button>
                </div>
            </li>
        </ul>
    </section>
</template>

<style scoped>

</style>