import headers from "./header.js";
import footers from "./footer.js";
import routes from "./router.js";
// import dataBinding from "./dataBinding.js"; 
// import fors from "./for.js";
// import ifs from "./if.js";
// import events from "./event.js";
// import posts from "./post.js";
//import todos from "./todo.js";

const { createApp } = Vue
const template = /*html */`<div>
                                <headers/>
                                <!--<dataBinding/>-->
                                <!--<fors/>--> 
                                <!--<ifs/>-->
                                <!--<events/>-->
                                <!--<posts/>-->
                                <!--<todos/>-->
                                <RouterView/>
                                <footers/>
                           </div>` //화면 view
//vue 인스턴스 생성
const component = {
    template ,
    name : "모듈연습", //name은 생략가능
    //components : {headers, dataBinding, fors, ifs, events, posts, todos, footers},
    components : {headers, footers},
    data(){ return { name:'홍길동', msg:'안녕하세요~~~~' } }, //함수/model
    methods : { //객체/function
        funca(){},
    },
    created(){  },
    mounted(){  },
    computed : { //객체
        fullname(){},
    }, 
}
createApp(component)
.use(routes)
.mount('#app');