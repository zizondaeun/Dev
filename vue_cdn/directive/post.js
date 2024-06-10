const template = /*html */`
<div>
    userId<input v-model="post.userId"> 
    title<input v-model="post.title"> 
    body<input v-model="post.body"> 
    <button @click="addHandler">등록</button>
</div>
<table class="table table-spried table-hover">
    <thead>
        <tr>
            <th>userId</th><th>id</th><th>title</th><th>body</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="post in posts">
            <td>{{post.userId}}</td>
            <td>{{post.id}}</td> 
            <td>{{post.title}}</td>
            <td>{{post.body}}</td>
            <td><button @click="delHandler(post.id)">삭제</button></td>
        </tr>
    </tbody>
</table>
`;
const url = 'https://jsonplaceholder.typicode.com/posts';

export default{
    template,
    data(){
        return{ posts:[  ], post:{  } }
    },
    created(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => this.posts = json) //json을 배열로 받아서 [json]에 uri가 posts/1이면 1건만 조회
        axios.get(url)
        .then(json => {
            console.log(json);
            this.posts = json.data
        })
    },
    methods : {
        addHandler(){
            //console.log(this.post);
            //alert(JSON.stringify(this.post))
            axios.post(url, this.post)
            .then(json => this.posts.push(json.data));
        },
        delHandler(id){
            axios.delete(`${url}/${id}`)
            .then(json => {
                let newData = this.posts.filter( a => a.id != id )
                this.posts = newData; //filter - 비파괴함수 / sort,splice - 파괴함수
            });
        }
    }
}