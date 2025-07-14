<script>

export default {
    name: "AppA",
    inject: [
        "obj", "msg"
    ]
}
</script>

<template>
    <div class="app">
        {{ msg }}
        <br/>
        {{ obj.name }}
    </div>
</template>

<style scoped>

</style>