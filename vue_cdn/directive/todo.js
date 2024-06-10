const template = /*html */`
    <div>
        userId <input v-model="todo.userId">
        title <input v-model="todo.title">
        completed <input v-model="todo.completed">
        <button @click="addHandler" class="btn btn-success">등록</button>
    </div>
    <div>
        조회 <input type="text" v-model="search"><button @click="searchHandler(search)" class="btn btn-warning">조회</button>
    </div>
    <table class="table table-spried table-hover">
        <thead>
            <tr>
                <th>userId</th><th>id</th><th>title</th><th>completed</th><th>삭제</th><th>수정</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="todo in todos">
                <td>{{todo.userId}}</td>
                <td>{{todo.id}}</td>
                <td>{{todo.title}}</td>
                <td>{{todo.completed}}</td>
                <td><button @click="delHandler(todo.id)" v-bind:disabled="!todo.completed" class="btn btn-secondary">삭제</button></td>
                <td><button @click="modHandler" class="btn btn-primary">수정</button></td>
            </tr>
        </tbody>
    </table>
`;
const url = 'https://jsonplaceholder.typicode.com/todos';

export default {
    template,
    data(){
        return{
            todos:[], todo:{}, search:""
        }
    },
    created(){
        axios.get(url)
        .then(json => {
            console.log(json);
            this.todos = json.data
        })
    },
    methods : {
        addHandler(){
            axios.post(url, this.todo)
            .then(json => this.todos.push(json.data));
        },
        delHandler(id){
            axios.delete(`${url}/${id}`)
            .then(json => {
                let newData = this.todos.filter(a => a.id != id)
                this.todos = newData;
            })
        },
        searchHandler(title){
            let search = this.todos;
            let result = search.filter((a) => a.title.indexOf(title) != -1)
                console.log(result)
                this.todos = result;
        },
        modHandler(){

        }
    }
}