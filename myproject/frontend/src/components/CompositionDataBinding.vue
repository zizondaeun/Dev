<template>
    <div>마우스 위치: {{ x }}, {{ y }}</div>
    <div>
        <input v-model="num1"> + 
        <input v-model="num2"> =
        <span> {{ result }} </span>
    </div>
</template>
<script setup>
import { plusCalculator } from '@/common';
import { useMouse } from '@/mouse';

let {num1, num2, result} = plusCalculator(); //객체 분해해서 꺼내쓸거야(state. 다 빼) /어느 컴포넌트에서 재사용하게 함수로 plusCalculator()호출해서 쓸거야
let { x, y } = useMouse();
</script>
