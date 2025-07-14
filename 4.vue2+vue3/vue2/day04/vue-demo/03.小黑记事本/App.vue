<template>
    <!-- 主体区域 -->
    <section id="app">
        <AppHeader @add="add"/>
        <AppMain :list="list" @deleteItem="deleteItem"/>
        <AppFooter :list="list" @clear="clear()"/>
    </section>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppMain from './components/AppMain.vue'

export default {
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    data() {
        return {
            list: [
                {
                    id: 1,
                    title: '吃饭'
                }
            ]
        }
    },
    methods: {
        deleteItem(id) {
            this.list = this.list.filter(item => item.id !== id)
        },
        clear() {
            this.list = []
        },
        add(title) {
            console.log(1)
            this.list.push({
                id: +new Date().getDate(),
                title: title
            })
        }
    }
}
</script>

<style>

</style>
