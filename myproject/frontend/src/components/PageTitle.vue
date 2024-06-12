<template>
    <h1> {{menuno}} : {{title}} </h1>
</template>
<script>
    export default { //자세하게 적고싶을때 객체 
        props : { 'title' : { 
                    type : String, 
                    default : '페이지 제목입니다.'
                },
                 'menuno' : {
                    type : Number,
                    default : 1
                }
    }
    }
</script>
<style>
</style>