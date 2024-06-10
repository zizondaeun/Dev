<template>
    <router-link to="/empForm">사원등록</router-link>
    <div>
        <span>employeeId</span><span>firstName</span><span>lastName</span>
    </div>
    <div v-for="employee in employees">
        <span>{{employee.employee_id}}</span>
        <span @click="gotoUpdateForm">{{employee.first_name}}</span>
        <span>{{employee.last_name}}</span>
    </div>
</template>
<script>
    import axios from "axios";

    export default {
    data(){
    return{
        employees: []
    }
    },
    created() {
        const url = 'http://localhost:81/myserver/empSelect';
        axios.get(url).then(json => {
            this.employees = json.data
        })
    },
    methods : {
        gotoUpdateForm(){
            this.$router.push('http://localhost:81/myserver/empUpdateForm');
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