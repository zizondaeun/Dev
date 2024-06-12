<template>
    <ul>
        <li v-for="m in menu">{{ m }}</li>
    </ul>
</template>
<script>
    export default {
        props : {
            'menu' : {
                type : Object
            }
        }
    }
</script>
<style>
</style>