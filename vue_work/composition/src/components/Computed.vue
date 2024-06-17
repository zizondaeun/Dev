<template>
    <input type="text" v-model="firstname">
    <input type="text" v-model="lastname">
    <div>{{ fullname }}</div>
    <hr/>

    <input type="text" v-model="name.firstname">
    <input type="text" v-model="name.lastname">
    <div>{{ fullname2 }}</div>
    <hr/>

    <input type="text" v-model="reactivename.firstname">
    <input type="text" v-model="reactivename.lastname">
    <div>{{ fullname3 }}</div>
</template>
<script setup>
    import {ref, computed, reactive} from 'vue';

    let firstname = ref("gildong");
    let lastname = ref("Hong");
    let fullname =  computed(() => { firstname.value + ' ' + lastname.value })
    //ref .value필요해
    let name = ref({ firstname : '길동', lastname : '홍' })
    let fullname2 = computed(() => { name.value.firstname + ' ' + name.value.lastname })
    //reactive는 .value필요없어
    let reactivename = reactive({ firstname : '몽룡', lastname : '이' })
    let fullname3 = computed(() => { reactivename.firstname + ' ' + reactivename.lastname })
</script>