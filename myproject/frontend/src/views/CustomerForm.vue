<template>
    <div>고객등록</div>
    <div class="mb-3 p-2" v-if="customers.id != null">
        <label for="exampleFormControlInput1" class="form-label">Id</label>
        <input type="text" readonly class="form-control" id="id" v-model="customers.id">
    </div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="customers.name">
    </div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input type="text" class="form-control" id="email" v-model="customers.email" placeholder="ex) daeun123@naver.com">
        <p
          v-show="valid.email"
          class="input-error">
          이메일 주소를 정확히 입력해주세요.
        </p>
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
            customers : {...this.customerdata},
            valid: {
                        email: false
                    }
                    }

    },
    watch : {
        customerdata(newQuestion, oldQuesion){
            this.customers = {...newQuestion};
        },
        'customers.email': function() {
            this.checkEmail()
            }
    },
    created(){
        this.customers = this.customerdata;
    },
    methods : {
        checkEmail() {
        //이메일 형식 검사
        const validateEmail = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/;

        if (!validateEmail.test(this.customers.email) || !this.customers.email) {
                this.valid.email = true
                return
            } this.valid.email = false
        },
        async addHandler(){
            let del = {...this.customers}
            delete del.id;
            if(this.check()){
                await axios.post("/api/customer", del)
                //.then(this.$router.push("/customer"));
                this.customers = {};
                this.$emit('go-page', 1)
            }
        },
        async modHandler(){
            if(this.check()){
                await axios.put(`/api/customer/${this.customers.id}`, this.customers)
                //.then(this.$router.push("/customer"));
                this.customers = {};
                this.$emit('go-page', 1);
            }
        },
        check(){
            if(this.customers.name == ''){
                alert('이름을 입력하세요')
                return false;
            }
            else if(this.customers.email == ''){
                alert('이메일을 입력하세요')
                return false;
            }
            else if(this.customers.phone == ''){
                alert('휴대폰번호를 입력하세요')
                return false;
            }
            else if(this.customers.address == ''){
                alert('주소를 입력하세요')
                return false;
            }
            else if(this.valid.email){
                alert('이메일 형식을 확인하세요')
                return false;
            }
            return true;
        },
        resetHandler(){
            this.customers = {};
            this.$emit('go-page', 1);

        },
        async delHandler(){
            await axios.delete(`/api/customer/${this.customers.id}`, this.customers.id)
            this.customers = {};
            this.$emit('go-page', 1);
        }
    }
    }
</script>
<style>
</style>