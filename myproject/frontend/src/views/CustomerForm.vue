<template>
    <div>고객등록</div>
    <form>
        <div>
            <div>name : <input v-model="customers.name"></div>
            <div>email : <input v-model="customers.email"></div>
            <div>phone : <input v-model="customers.phone"></div>
            <div>address : <input v-model="customers.address"></div>
        </div>
        <div>
            <button @click="addHandler">등록</button>
        </div>
    </form>
</template>
<script>
    import axios from 'axios';

    export default {
    data(){
    return{
        customers : { name : '', email : '', phone : '', address : ''}
    };
    },
    created(){
    },
    methods : {
        async addHandler(){
            await axios.post("/api/customer", this.customers)
            .then(this.$router.push("/customer"));
        }
    }
    }
</script>
<style>
</style>