<template>
  <div class="home">
    <!--동적 데이터 전달 (v-bind or ':' 사용)-->
    <PageTitle title="컴포넌트 사용 예제" menuno="10" />
    <!--<img alt="Vue logo" src="../assets/logo.png">-->

    <!--배열 전달-->
    <MenuBar :menu="['신발', '상의', '하의']" />

    <!--객체 전달 속성명과 데이터 이름이 같으면 생략 가능-->
    <HelloWorld :user/>
    <!--v-bind:username="user.username" :msg="user.msg"-->

    <!--부모가 자식 컴포넌트 이벤트 직접 발생 -->
    <ChildComponent ref="child_component" />

    <!--카피라이트 slot 실습-->
    <!--<FooterTitle />Copyright-->
  </div><!--HelloWorld가 자식-->
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PageTitle from '@/components/PageTitle.vue'
import MenuBar from '@/components/MenuBar.vue'
import ChildComponent from '@/components/ChildComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, PageTitle, MenuBar, ChildComponent
  },
  data(){
    return { user : { username : 'dada', msg : 'hi' } };
  },
  mounted(){ 
    this.$refs.child_component.childFunc(); 
    this.$refs.child_component.$refs.username.value = 'aaa';
    this.$refs.child_component.$refs.username.focus();
  }
}
</script><!--본인의 레퍼런스(위) /클릭이벤트의 레퍼런스-->
