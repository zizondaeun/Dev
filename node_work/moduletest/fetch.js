const axios = require('axios');
let url = 'http://localhost:3000/posts';

let data = {"id" : "7" , "title" : "test7 update axios"}
//fetchpost(); //호이스팅(끌어올리기)-밑에 함수를 여기서 호출가능한 이유는 
//axiospost();
//fetchput();
//axiosput();
//axiosdelete();
fetchdelete();

//axios post
function axiospost(){
    axios.post(url, data)
    //.then(json => console.log(json))
}

//axios put
function axiosput(){
    axios.put(url + "/7", data)
}

//axios delete
function axiosdelete(){
    axios.delete(url + "/7", data)
}

//fetch put(수정)
function fetchput(){
    fetch(url + "/7", {
        method : "put",
        headers : { "content-type" : "application/json; charset=UTF-8" },
        body : JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}

//fetch post
function fetchpost(){
    fetch(url, {
        method : "post",
        headers : { "content-type" : "application/json; charset=UTF-8" },
        body : JSON.stringify(data)
    })
    .then(response => response.json())
    //.then(json => console.log(json))
    //.catch(err => console.log(err));
}

//fetch get
function fetchget(){
    fetch(url)
    .then(response => response.json())
    //.then(json => console.log(json))
}

//fetch delete
function fetchdelete(){
    fetch(url + "/6", {
        method : "delete"
    })
    
}

function axiosget(){
    axios.get(url)
    //.then(json => console.log(json.data))
}
