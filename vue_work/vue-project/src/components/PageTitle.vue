<template>
    <div> {{title}} </div>
</template>
<script>
    export default {
    props : { 
        //title:String
        title: { type:String, default: '페이지 제목입니다.' }
    },
    data(){
    return{};
    },
    created(){},
    methods : {}
    }
</script>
<style>
</style>