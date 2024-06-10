import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
//index.js에서 정의된 router를 이렇게 main.js에 등록해줘야 실제 적용이 되어 사용할수있음

createApp(App) //최상위 컴포넌트인 App.vue로 app을 생성하고 
.use(router) //App.vue에서 router가 사용될수있도록 추가
//.component() //전역컴포넌트 등록하는거
.mount('#app') 
//App.vue를 public폴더의 index.html에 정의되어있는 id="app"인 html element에 마운트 시킴
