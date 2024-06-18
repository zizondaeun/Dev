<template>
    <div><h4>게시글 등록</h4></div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlInput1" class="form-label">이름</label>
        <input type="text" class="form-control" id="writer" v-model="board.writer">
    </div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlInput1" class="form-label">제목</label>
        <input type="text" class="form-control" id="title" v-model="board.title">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">내용</label>
        <textarea class="form-control" id="content" rows="3" v-model="board.content"></textarea>
    </div>
    <div>
        <button class="btn btn-secondary" @click="addHandler">등록</button>
        <button class="btn btn-danger" @click.prevent="cancelHandler">취소</button>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data(){
            return{
                board : {}
            };
        },
        created(){

        },
        methods : {
            async addHandler(){
                await axios.post('/api/board', this.board)
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