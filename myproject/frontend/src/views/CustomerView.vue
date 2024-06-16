<template>
    <div>고객관리</div>
    <div class="row">
        <div class="col-md-12 col-lg-7 border p-3">
            <select v-model="pageUnit" @change="goPage(1)">
                <option>3</option>
                <option>5</option>
                <option>10</option>
            </select>
        <!--
        <div class="p-3">
            <button><router-link to="/customerForm">고객등록</router-link></button>
        </div>-->
        <table class="table table-hover">
            <thead>
            <tr>
                <th>id</th><th>name</th><th>email</th><th>phone</th><th>address</th><th>delete</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers">
                    <td>{{customer.id}}</td>
                    <td @click="infoHandler(customer.id)">{{customer.name}}</td>
                    <td @click="updateHandler(customer)">{{customer.email}}</td>
                    <td>{{customer.phone}}</td>
                    <td>{{customer.address}}</td>
                    <td><button @click="delHandler(customer.id)" class="btn btn-success">삭제</button></td>
                </tr>
            </tbody>
        </table>
        <PagingComponent v-bind="page" @go-page="goPage"/>
        </div>    
        <div class="col-md-12 col-lg-5 border p-3">
            <CustomerForm :customerdata="customer" ref="CustomerForm" @go-page="goPage"></CustomerForm><!-- v-bind="customers"-->
        </div>
    </div>
</template>
<script>
    import PageMixins from '../mixins.js';
    import axios from 'axios';
    import PagingComponent from '@/components/PagingComponent.vue';
    import CustomerForm from '@/views/CustomerForm.vue';

    export default {
        mixins : [PageMixins],
        components : {
            PagingComponent, CustomerForm
        },
    data(){
        return{
            customers : [], customer : {}, page : {}, pageUnit : 5
        };
    },
    created(){
        this.goPage(1);
    },
    methods : {
        async delHandler(id){
            console.log(id);
            await axios.delete('/api/customer/' + id)
            .then( json => {  //this.$router.get("/customer")
                let data = this.customers.filter(a => a.id != id)
                console.log(data)
                this.customers = data;
            });
        },
        infoHandler(id){
            this.$router.push({
                name: 'customerInfo' , query: {id: id}
            });
        },
        updateHandler(customer){
            this.customer = customer; //-> props => data /this.cus는 데이터안의 cus이고 =뒤의 cus 위의 for의 cus
            //this.$refs.CustomerForm.customers = {... customer};
        },
        async goPage(page){
                try{
                    let pageUnit = this.pageUnit;
                    let result = await axios.get(`/api/customer?pageUnit=${pageUnit}&page=${page}`);
                    this.customers = result.data.list;
                    this.page = this.pageCalc(page, result.data.count, 5, pageUnit)
                    console.log(this.page);
                }catch(err){
                    console.log(err);
                }
            }
        },
    } 
</script>
<style>
    span{
        display: inline-block;
        width: 20%;
    }
</style>