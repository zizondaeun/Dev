<template>
    <div>게시판</div>
    <div class="row">
        <div class="col-md-12 border p-3">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>no</th><th>title</th><th>writer</th><th>content</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="b in board" @click="infoHandler(b.no)">
                        <td>{{b.no}}</td>
                        <td>{{b.title}}</td>
                        <td>{{b.writer}}</td>
                        <td>{{b.content}}</td>
                    </tr>
                </tbody>
                <div class="container">
                    <router-link to="/boardForm"><button class="btn btn-primary">등록</button></router-link>
                </div>
            </table>
        </div>    
    </div>
</template>
<script>
    import axios from 'axios';
    import BoardForm from '@/views/BoardForm.vue';
    import _ from 'lodash';

    export default {
        components : {
            BoardForm
        },
        data(){
            return{
                board : []
            };
        },
        created(){
            axios.get('/api/board/')
            .then(result => {
                this.board = result.data
            })
        },
        methods : {
            infoHandler(no){
                this.$router.push({
                    name: 'boardInfo' , query: {no: no}
                });
            }
        }
    }
</script>
<style>
</style>