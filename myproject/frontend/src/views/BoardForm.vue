<template>
    <div>게시글등록</div>
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
    <div class="mb-3 p-2">
        <input type="file" ref="file" v-on:change="onChangeFileUpload()">
    </div>
    <div>
        <button class="btn btn-secondary" @click="addHandler" v-if="account">등록</button>
        <button class="btn btn-danger" @click.prevent="cancelHandler">취소</button>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data(){
            return{
                board : {}, file : {}
            };
        },
        computed :{
            account(){
                return this.$store.state.user.userid; //store.js에 있는 user임 
            }
        },
        created(){

        },
        methods : {
            async addHandler(){
                // //파일없을때 기본 글 등록 시
                // axios.post('/api/board', this.board)
                // .then(this.$router.push('/board'));

                //board안에 title,writer,content를 담아 json형태로 파싱해서 formdata에 append해줘서 file,board를 밸류값으로 보내는거
                let formData = new FormData();
                formData.append('file', this.file);
                formData.append('board', JSON.stringify(this.board)); 
                await axios.post('/api/board', formData,
                    { headers: { 'Content-Type': 'multipart/form-data' }   }
                )
                .then(result => { 
                    if(result.data.affectedRows == 1){
                        alert(result.data.insertId + '번으로 글이 등록되었습니다.')
                        this.$router.push('/board'); //페이지 이동
                    }else{
                        alert('글 등록에 실패했습니다.')
                    }
                })
            },
            onChangeFileUpload(){
            this.file = this.$refs.file.files[0];
            console.log(this.file)
            },
            cancelHandler(){
                this.board = {}; //취소버튼을 누르면 화면에 입력한 값들이 초기화되고 
                this.$router.push('/board'); //목록 페이지로 이동해야하니까
            }
        }
    }
</script>
<style>
</style>