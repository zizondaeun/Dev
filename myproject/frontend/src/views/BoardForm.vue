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
            <button class="btn btn-secondary" @click="addHandler">등록</button>
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
        created(){

        },
        methods : {
            async addHandler(){
                let formData = new FormData();
                formData.append('file', this.file);
                formData.append('board', JSON.stringify(this.board));
                await axios.post('/api/board', formData,
                    { headers: { 'Content-Type': 'multipart/form-data' }   }
                )
                .then(result => { 
                    if(result.data.affectedRows == 1){
                        alert(result.data.insertId + '번으로 글이 등록되었습니다.')
                        this.$router.push('/board');
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
                this.board = {};
                this.$router.push('/board');
            }
        }
    }
</script>
<style>
</style>