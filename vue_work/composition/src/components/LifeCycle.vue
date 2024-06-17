<template>
    <div>LifeCycle</div>
</template>
<script setup>
    import { onMounted, onUpdated } from 'vue';

    onMounted(() => console.log('마운트됨'))
    onUpdated(() => console.log('업데이트됨'))
    
    //created 훅에 해당함
    console.log('created'); //created는 따로 function 필요x(바로 나오니까)
</script>