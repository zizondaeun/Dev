<template>
    <div>
        <h1>고객 상세 정보</h1>
    </div>
    <table class="table table-hover">
        <thead>
            <tr>
                <th>no</th><th>title</th><th>writer</th><th>content</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td v-text="board.no"></td>
                <td>{{board.title}}</td>
                <td>{{board.writer}}</td>
                <td>{{board.content}}</td>
            </tr>
        </tbody>
    </table>
    <img src="D:/upload/1bb37f80bc371432ae271c32dbbf194a">
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
        axios.get('/api/board/' + this.$route.query.no)
        .then(json => this.board = json.data[0])
    },
    methods : {
    }
    }
</script>