<script>
import Bus from "@/utils/EventBus.ts";

export default {
    name: "AppA",
    created() {
        Bus.$on('sendMsg',(msg)=>{
            console.log(msg)
        })
    }
}
</script>

<template>
    <div></div>
</template>

<style scoped>

</style>