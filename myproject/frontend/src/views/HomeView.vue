<template>
  <div class="home">
    <!--동적 데이터 전달 (v-bind or ':' 사용)-->
    <PageTitle title="컴포넌트 사용 예제" :menuno="10" />
    <!--<img alt="Vue logo" src="../assets/logo.png">-->

    <!--배열 전달-->
    <MenuBar :menu="['신발', '상의', '하의']" />

    <!--객체 전달 속성명과 데이터 이름이 같으면 생략 가능-->
    <HelloWorld :user/>
    <!--v-bind:username="user.username" :msg="user.msg"-->

    <!--부모가 자식 컴포넌트 이벤트 직접 발생 -->
    <ChildComponent ref="child_component" />
    
    <!--자식 컴포넌트에서 부모 컴포넌트로 이벤트/데이터 전달-->
    <hr />
    <ChildComponent4 @send-message="sendMessage"/>
    
    <!--이름있는 slot-->
    <SlotModalLayout>
      <template v-slot:header>
        팝업타이틀
      </template>
      <template v-slot:default>
        팝업컨텐츠
      </template>
      <template v-slot:footer>
        <button>닫기</button>
      </template>
    </SlotModalLayout>

    <!--<FooterTitle>Copyright slot 실습</FooterTitle>-->

    <hr />
    <ProvideInjectChild></ProvideInjectChild>

    <hr />
    <PagingComponent v-bind="page" @go-page="goPage"/>
    
    <!-- <hr />
      count : {{ count }}
      <button type="button" @click="increment">store count 증가</button> -->
  </div><!--HelloWorld가 자식-->
</template>

<script>
// @ is an alias to /src
import "bootstrap" 
import "bootstrap/dist/css/bootstrap.min.css"
import HelloWorld from '@/components/HelloWorld.vue'
import PageTitle from '@/components/PageTitle.vue'
import MenuBar from '@/components/MenuBar.vue'
import ChildComponent from '@/components/ChildComponent.vue'
import ChildComponent4 from '@/components/ChildComponent4.vue'
import SlotModalLayout from '@/components/SlotModalLayout.vue'
import ProvideInjectChild from '@/components/ProvideInjectChild.vue'
import PagingComponent from "@/components/PagingComponent.vue"

export default {
  name: 'HomeView',
  components: {
    HelloWorld, PageTitle, 
    MenuBar, ChildComponent, 
    ChildComponent4, SlotModalLayout, 
    ProvideInjectChild, PagingComponent
  },
  data(){
    return { user : { username : 'dada', msg : 'hi' },
              page : {} //{ firstPage, lastPage, startIdx, endIdx }
            }; 
  },
  provide(){
    return {itemLength : 4}
  },
  created (){
    //fetch => total, cp (나중에 db에서 )
    this.page = this.pageCalc(6, 124, 5, 10);
  },
  computed : {
    count(){
      return 0; //this.$store.state.count;
    }
  },
  methods : {
    goPage(page){
      //원래는 fetch로
      console.log('parent event', page)
    },
    sendMessage(msg){
      console.log(msg);
    },
    pageCalc(currentPage, total, pageSize = 10, pageUnit = 10) {
      let firstPage = 1;
      let lastPage = //전체건수에서 몇건씩보일건지를 나누고 거기에 나머지가 있으면 +1을 더해
        Math.floor(total / pageUnit) + (total % pageUnit == 0 ? 0 : 1);
      let startIdx = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
      let endIdx = startIdx + pageSize - 1;
      if (endIdx > lastPage) {
        endIdx = lastPage;
      }
      console.log(currentPage, firstPage, lastPage, startIdx, endIdx);
      return { currentPage, firstPage, lastPage, startIdx, endIdx };
    },
    increment(){
      this.$store.commit('increment');
    }
  },
  mounted(){ 
    this.$refs.child_component.childFunc(); 
    this.$refs.child_component.$refs.username.value = 'aaa';
    this.$refs.child_component.$refs.username.focus();
  }
}
</script><!--본인의 레퍼런스(위) /클릭이벤트의 레퍼런스-->
