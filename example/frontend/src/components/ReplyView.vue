<template>
    <hr/>
    <div><h4>댓글 목록</h4></div>
    <div class="row">
        <div class="col-md-12 border p-3">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>내용</th><th>작성자</th><th>작성일자</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="r in reply">
                        <td>{{r.content}}</td>
                        <td>{{r.writer}}</td>
                        <td>{{r.created_date}}</td>
                    </tr>
                </tbody>
            </table>
        </div>    
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                reply : []
            };
        },
        created(){
            axios.get('/api/board/')
            .then(result => {
                this.reply = result.data
            })
            axios.get('/api/reply/')
            .then(result => {
                this.reply = result.data
            })
        },
        methods : {}
    }
</script>
<style>
</style>