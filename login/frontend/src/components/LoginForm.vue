<template>
    <div v-if="account">
        {{ $store.state.user.userid }}
        <button @click.prevent="logoutHandler">로그아웃</button>
    </div>
    <div v-else> 
        Id : <input v-model="form.userid">
        Pw : <input v-model="form.userpw">
        <button @click.prevent="loginHandler">로그인</button>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data(){
            return{
                form : {userid : '', userpw : ''} ,
                //loginid : ''
            };
        },
        computed :{
            account(){
                return this.$store.state.user.userid; //store.js에 있는 user임 
            }
        },
        created(){
            axios.get("/api/account")
            .then(result => {
                this.$store.commit('user', result.data);
            }).catch((err) => {console.log(err)});
        },
        methods : {
            loginHandler(){
                axios.post("/api/login" , this.form)
                .then((result) => {
                    this.$store.commit('user', result.data);
                    alert('로그인 성공')
                    this.form = {};
                }) 
                //로그인 정보를 받아오는거니까 빈값으로 (),
                //result넣으면 result가 정의되지않았기때문에 오브젝트로 뜨고 오류남
                //result => console.log(result.data)
                .catch((err) => {
                    console.log(err);
                    alert('로그인 실패')
                })
            },
            logoutHandler(){
                axios.post("/api/logout", this.form)
                .then(() => {
                    this.$store.commit('user', {});
                    alert('로그아웃 성공')
                })
                .catch((err) => {
                    console.log(err)
                    alert('로그아웃 실패')
                })
            }
        }
    }
</script>
<style>
</style>