<template>
    <div>게시판</div>
    <div class="row">
        <div class="col-md-12 col-lg-7 border p-3">
            <select v-model="pageUnit" @change="goPage(1)">
                <option>3</option>
                <option>5</option>
                <option>10</option>
            </select>
        <table class="table table-hover">
            <thead>
            <tr>
                <th>no</th><th>title</th><th>writer</th><th>content</th><th>delete</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="b in board">
                    <td>{{b.no}}</td>
                    <td @click="infoHandler(b.no)">{{b.title}}</td>
                    <td @click="updateHandler(b)">{{b.writer}}</td>
                    <td>{{b.content}}</td>
                    <td><button @click="delHandler(b.no)" class="btn btn-success">삭제</button></td>
                </tr>
            </tbody>
            <div class="p-3">
                <button class="btn btn-secondary"><router-link to="/boardForm">글 등록</router-link></button>
            </div>
        </table>
        <PagingComponent v-bind="page" @go-page="goPage"/>
        </div>    
    </div>
</template>
<script>
    import PageMixins from '../mixins.js';
    import axios from 'axios';
    import PagingComponent from '@/components/PagingComponent.vue';
    import BoardForm from '@/views/BoardForm.vue';

    export default {
        mixins : [PageMixins],
        components : {
            PagingComponent, BoardForm
        },
        data(){
            return{
                board : [], b : {}, page : {}, pageUnit : 5
            };
        },
        created(){
            this.goPage(1);
        },
        methods : {
            async delHandler(no){
            console.log(no);
            await axios.delete('/api/board/' + no)
            .then( json => {  
                let data = this.board.filter(a => a.no != no)
                console.log(data)
                this.board = data;
            });
        },
            infoHandler(no){
                this.$router.push({
                    name: 'boardInfo' , query: {no: no}
                });
            },
            updateHandler(b){
                this.b = b; //-> props => data /this.board는 데이터안의 board이고 =뒤의 board 위의 for의 board
            },
            async goPage(page){
                let pageUnit = this.pageUnit;
                let result = await axios.get(`/api/board?pageUnit=${pageUnit}&page=${page}`);
                this.board = result.data.list;
                this.page = this.pageCalc(page, result.data.count, 5, pageUnit)
                console.log(this.page);
            },
            addHandler(){

            }

        }
    }
</script>
<style>
    span{
        display: inline-block;
        width: 20%;
    }
</style>