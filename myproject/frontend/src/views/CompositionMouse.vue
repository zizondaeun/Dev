<script setup>
import { useMouse } from '../mouse'
const {x, y} = useMouse();
</script>

<template>마우스 위치: {{ x }}, {{ y }}</template>
