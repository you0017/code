<script lang="js">
export default ({
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isEdit: false
        }
    },
    methods: {
        dclick() {
            this.isEdit = !this.isEdit
            /* //异步dom更新，需要等待一下
            this.$nextTick(() => { 
                this.$refs.inp.focus()
            }) */
        },
        handleChange(value) {
            this.$emit('input',value)
            this.isEdit = false
        }
    }
})
</script>

<template>
    <div id="myTable">
        <div class="my-tag">
            <input 
                v-if="isEdit"
                ref="inp"
                class="input" 
                type="text" 
                placeholder="输入标签" 
                v-focus
                :value="value"
                @blur="isEdit = false"
                @keyup.enter="handleChange($event.target.value)"
            />
            <div v-else class="text" @dblclick="dclick">{{ value }}</div>
        </div>
    </div>
</template>

<style scoped>
.my-tag {
    cursor: pointer;

    .input {
        appearance: none;
        outline: none;
        border: 1px solid #ccc;
        width: 100px;
        height: 40px;
        box-sizing: border-box;
        padding: 10px;
        color: #666;

        &::placeholder {
            color: #666;
        }
    }
}
</style>