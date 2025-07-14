<script>
export default {
    //获取父组件传入的数据
    /*props: [
        "title"
    ],*/
    /*props: {
        title: String
    },*/
    props: {
        title: {
            type: String,
            required: true,
            default: '默认值',
            validator(value) {
                return value.length > 0
            }
        },
        number: {
            type: Number
        }
    },
    methods: {
        handleClick() {
            this.$emit('changeTitle', 'click')
        },
        handleAdd() {
            this.$emit('add')
        }
    }
}
</script>

<template>
    <div class="son">
        {{ title }}
        <button @click="handleClick">修改title</button>
        <br/>
        {{ number }}
        <button @click="handleAdd()">+</button>
    </div>
</template>

<style scoped>
</style>