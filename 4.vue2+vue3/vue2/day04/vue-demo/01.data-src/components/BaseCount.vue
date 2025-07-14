<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>

<template>
    <div class="base-count">
        <button @click="count -- ">-</button>
        <span>{{ count }}</span>
        <button @click="count ++">+</button>
    </div>
</template>

<style scoped>
</style>