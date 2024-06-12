<template>
    <div>
        <h1>고객관리</h1>
    </div>
    <div>
        <button><router-link to="/customerForm">고객등록</router-link></button>
    </div>
    <table>
        <thead>
        <tr>
            <th>id</th><th>name</th><th>email</th><th>phone</th><th>address</th><th>delete</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="customer in customers">
                <td>{{customer.id}}</td>
                <td @click="">{{customer.name}}</td>
                <td>{{customer.email}}</td>
                <td>{{customer.phone}}</td>
                <td>{{customer.address}}</td>
                <td><button @click="delHandler">삭제</button></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    import axios from 'axios';

    export default {
    data(){
    return{
        customers : []
    };
    },
    created(){
        //프론트에서는 원래가지고있던 포트를 보여줘야하기때문에
        const url = '/api/customer'; //http://localhost:8080/customer
        axios.get(url)
        .then(json => {this.customers = json.data })
    },
    methods : {
        delHandler(){

        }
    }
    }
</script>
<style>
    span{
        display: inline-block;
        width: 20%;
    }
</style>