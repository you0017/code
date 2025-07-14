<script>

export default {
    name: "AppA",
    props: {
        /*selectValue: {
            type: String
        }*/
        value: {
            type: String
        }
    },
    methods: {
        /*handleSelect(value) {
            console.log(value)
            this.$emit('input', value)
        },*/
        handleSelect(e) {
            //console.log(e)
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<template>
    <div class="app">
<!--        <select :value="selectValue" style="width: 200px;height: 100px" @change="handleSelect($event.target.value)">-->
<!--        <select :value="selectValue" style="width: 200px;height: 100px" @change="handleSelect">-->
        <select :value="value" style="width: 200px;height: 100px" @change="handleSelect">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    </div>
</template>

<style scoped>

</style>