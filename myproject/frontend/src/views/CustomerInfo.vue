<template>
    <div>
        <h1>고객 상세 정보</h1>
    </div>
    <table>
        <thead>
            <tr>
                <th>id</th><th>name</th><th>email</th><th>phone</th><th>address</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td v-text="customers.id"></td>
                <td>{{customers.name}}</td>
                <td>{{customers.email}}</td>
                <td>{{customers.phone}}</td>
                <td>{{customers.address}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    import axios from 'axios';

    export default {
    data(){
    return{
        customers : {}
    };
    },
    created(){
        axios.get('/api/customer/' + this.$route.query.id)
        .then(json => this.customers = json.data[0])
    },
    methods : {
    }
    }
</script>