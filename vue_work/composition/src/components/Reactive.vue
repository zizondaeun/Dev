<template>
    <div>{{ state.nested.count }}</div>
    <button @click="increase">증가</button>
    <button @click="decrease">감소</button>
    <hr />
    <div>{{ state.arr[0] }}</div>
</template>
<script setup>
    import {reactive} from 'vue';

    let state = reactive({   
                            nested: { count: 10 },
                            arr: ['foo', 'bar'] 
                        })
    const increase = () => {
        state.nested.count++;
    }
    const decrease = () => {
        state.nested.count--;
    }
</script>