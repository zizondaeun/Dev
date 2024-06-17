<template>
    <div>게시글 상세</div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" v-model="board.title">
    </div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlInput1" class="form-label">Writer</label>
        <input type="text" class="form-control" id="writer" v-model="board.writer">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Content</label>
        <textarea class="form-control" id="content" rows="3" v-model="board.content"></textarea>
    </div>
    <div>
        <button @click="modHandler" class="btn btn-primary">수정</button>
        <button @click="delHandler(board.no)" class="btn btn-danger">삭제</button>
        <button @click="cancelHandler" class="btn btn-secondary">취소</button>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data(){
            return{
                board : {}, 
            };
        },
        created(){
            axios.get('/api/board/' + this.$route.query.no)
            .then(json => this.board = json.data[0])
        },
        methods : {
            async modHandler(){
                await axios.put(`/api/board/${this.board.no}`, this.board)
                .then(this.$router.push('/board'));
            },
            delHandler(no){
                axios.delete(`/api/board/${this.board.no}`, this.board)
                .then(this.$router.push('/board'));
            },
            cancelHandler(){
                this.board = {};
                this.$router.push('/board');
            }
        }
    }
</script>
<style>
</style>