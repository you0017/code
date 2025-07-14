<script>
import Bus from "@/utils/EventBus.ts";

export default {
    name: "AppA",
    methods: {
        sendMsg(msg) {
            Bus.$emit('sendMsg',msg)
        }
    }
}
</script>

<template>
    <div class="app">
        <button @click="sendMsg('hello')">发送</button>
    </div>
</template>

<style scoped>

</style>