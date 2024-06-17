<template>
    <div>
        <input v-model="calc.num1"> +
        <input v-model="calc.num2"> =
        <div>{{ calc.result }}</div>
    </div>
</template>
<script setup>
    import { reactive, watch } from 'vue';

    let calc = reactive({ num1 : 0, num2 : 0, result : 0})
    watch(calc, (newNum, oldNum) => 
        newNum.result = parseInt(newNum.num1) + parseInt(newNum.num2)
    );
    // watch(calc, (newNum, oldNum) => {
    //     calc.result = calc.num1 + newNum
    // })
</script>