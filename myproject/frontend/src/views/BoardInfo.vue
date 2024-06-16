<template>
    <div>
        <h1>게시글 수정 화면</h1>
    </div>
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
                await axios.put(`/api/board/${this.board.no}`, this.board, {
                    headers: { 'Cache-Control': 'no-cache' }
                });
                this.$router.push('/board');
                console.log(this.board, 'ddddddddd');
                //this.board = {};
                //window.location.reload();
            },
            async delHandler(no){
                console.log(this.board.no, '넘버');
                await axios.delete(`/api/board/${this.board.no}`, {
                    headers: { 'Cache-Control': 'no-cache' } //원래 갖고있던 캐시 쓰지마
                    //boardview의 goPage함수가 다시 불러와지는데 이미 캐싱에 저장을 해둬서 
                    //다시 삭제되기전의 데이터를 불러와서 목록에 띄어지는거 그래서 캐시를 사용하지않겠다라고 해줘야해
                    //캐시 장점 : 응답속도인데 우리는 값의 변화가 빠르니까 안맞아 그래서 nocache를 해줬어
                });
                this.$router.push('/board');
            },
            cancelHandler(){
                this.$router.push('/board');
            }
        }
    }
</script>