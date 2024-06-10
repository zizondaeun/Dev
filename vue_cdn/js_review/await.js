//비동기, 동기
async function callApi(){
    let post = await fetch('https://jsonplaceholder.typicode.com/posts/1')
                        .then(res => res.json()) //콜백함수
    //.then(res => console.log(res.title)) //2. /콜백 다끝날때까지 기다렸다가 -async,await(동기)
    console.log(post.userId);

    console.log("fetch 호출"); //1. -fetch(비동기)
}

callApi();