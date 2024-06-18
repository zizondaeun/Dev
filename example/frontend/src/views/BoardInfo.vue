<template>
    <div><h4>게시글 상세</h4></div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlInput1" class="form-label">제목</label>
        <input type="text" class="form-control" id="title" v-model="board.title">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">내용</label>
        <textarea class="form-control" id="content" rows="3" v-model="board.content"></textarea>
    </div>
    <div>
        <button @click="modHandler" class="btn btn-primary">수정</button>
        <button @click="delHandler(board.no)" class="btn btn-danger">삭제</button>
        <button @click="cancelHandler" class="btn btn-secondary">취소</button>
    </div>
    <div>
        <ReplyView></ReplyView>
    </div>
</template>
<script>
    import axios from 'axios';
    import ReplyView from '@/components/ReplyView.vue'

    export default {
        components: {
            ReplyView
        },
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
                let no = this.board.no;
                let title = this.board.title;
                let content = this.board.content; 
                await axios.put(`/api/board/${this.board.no}`, {no, title, content})
                .then(this.$router.push('/board'));
            },
            async delHandler(no){
                await axios.delete(`/api/board/${this.board.no}`, {
                    headers: { 'Cache-Control': 'no-cache' } 
                });
                this.$router.push('/board');
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