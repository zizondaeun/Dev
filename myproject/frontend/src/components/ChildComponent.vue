<template>
    <input ref="username">
    <button type="click" @click="childFunc" ref="btn">click</button>
</template>
<script>
    export default {
        methods : {
            childFunc(){
                console.log('부모 컴포넌트에서 직접 실행')
            }
        },
        mounted(){
            //this.$refs.username.focus();
        }
    }
</script>
<style>
</style>