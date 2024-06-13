<template>
    <div>고객등록</div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlInput1" class="form-label">Id</label>
        <input type="text" readonly class="form-control" id="id" v-model="customers.id">
    </div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="customers.name">
    </div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="customers.email">
    </div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlInput1" class="form-label">Phone</label>
        <input type="text" class="form-control" id="phone" v-model="customers.phone">
    </div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlTextarea1" class="form-label">Address</label>
        <input type="text" class="form-control" id="address" v-model="customers.address">
    </div>
        <div>
            <button v-if="customers.id == null" @click.prevent="addHandler" class="btn btn-secondary">등록</button>
            <button type="button" v-if="customers.id != null" @click="modHandler" class="btn btn-primary">수정</button>
            <button @click.prevent="resetHandler" class="btn btn-warning">초기화</button>
            <button type="button" @click="delHandler" class="btn btn-danger">삭제</button>
        </div>
</template>
<script>
    import axios from 'axios';

    export default {
    props : {
        customerdata : {
            type : Object
        }
    },
    data(){
        return{
            customers : {...this.customerdata}
        };
    },
    watch :{
        customerdata(newQuestion, oldQuesion){
            this.customers = {...newQuestion};
        }
    },
    created(){
        this.customers = this.customerdata;
    },
    methods : {
        async addHandler(){
            let del = {...this.customers}
            delete del.id;
            await axios.post("/api/customer", del)
            .then(this.$router.push("/customer"));
            //this.$emit(this.customers)
        },
        async modHandler(){
            if(check()){
                await axios.put(`/api/customer/${this.customers.id}`, this.customers)
                .then(this.$router.push("/customer"));
            }
        },
        check(){
            if(!this.customers.name == ''){
                alert('이름입력')
                return false;
            }
            else if(this.customers.email == ''){
                alert('이메일입력')
                return false;
            }
            // else if(this.customers.phone == ''){
            //     alert('휴대폰번호입력')
            //     return false;
            // }
            // else if(this.customers.address == ''){
            //     alert('주소입력')
            //     return false;
            // }
            return true;
        },
        resetHandler(){
            this.customers = '';

        },
        delHandler(){
            axios.delete(`/api/customer/${this.customers.id}`, this.customers.id)
            document.location.href = document.location.href;
            document.location.reload();
        }
    }
    }
</script>
<style>
</style>