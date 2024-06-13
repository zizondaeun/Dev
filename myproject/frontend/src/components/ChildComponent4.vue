<template>
    <button @click="sendMsg">클릭</button>
</template>
<script>
    export default {
        data(){
        return{
            msg : '자식 컴포넌트에서 부모로 이벤트 전달'
        }
        },
        mounted (){
            //this.$emit('send-message', this.msg);
        },
        methods : {
            sendMsg(){ //버튼을 클릭해야만 부모 호출하게 이벤트 등록
                this.$emit('send-message', this.msg + "!!!");
            }
        }
    }
</script>
<style>
</style>