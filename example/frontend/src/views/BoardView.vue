<template>
    <div>게시판</div>
    <div class="row">
        <div class="col-md-12 border p-3">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>No.</th><th>제목</th><th>작성자</th><th>작성일자</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="b in board" @click="infoHandler(b.no)">
                        <td>{{b.no}}</td>
                        <td>{{b.title}}</td>
                        <td>{{b.writer}}</td>
                        <td>{{b.created_date}}</td>
                    </tr>
                </tbody>
            </table>
        </div>    
    </div>
</template>
<script>
    import axios from 'axios';
    import _ from 'lodash';

    export default {
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