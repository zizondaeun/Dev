    // 자바스크립트 DOM 탐색 
    /*
      -- 메소드
      document.getElementById()
      document.getElementsByTagName()   : 배열
      document.getElementsByName()      : 배열
      document.getElementsByClassName() : 배열

      document.querySelector()
      document.querySelectorAll()       : 배열

      ========================= /필드로 접근 가능
      -- 관계 관련 속성 
      부모 : parentElement
      자식 : children, firstElementChild, lastElementChild
      형제 : previousElementSibling, nextElementSibling

    */
   
      document.addEventListener('DOMContentLoaded', function(event){ //DOM이 완성되는 경우 수행할 코드
        /*
          -- 필드                  .self(event.target == event.currentTarget)
          event.target;            //고정(바뀌지않음)
          event.currentTarget;     //유동(거슬러올라가는 .. 바뀔수있는) => 이벤트 핸들러가 등록된 태그(내가 등록한) / this.는 currentTarget을 의미함.

          -- 메소드 .prevent, .stop
          event.preventDefault();  //각 이벤트의 기본 동작을 일시정지
          event.stopPropagation(); //이벤트 버블링을 정지

        */

        let trList = document.querySelectorAll('tbody > tr'); //배열타입에서는 for문 돌려야함
        for(let tr of trList){
          tr.addEventListener('click', function(e){
            if(e.target.tagName == 'SELECT') return; //select태그에 이벤트 동작 막는거 .stop
            console.log('target Tag', e.target);
            console.log('currentTarget Tag', e.currentTarget);
          })
        }

        // + 버튼
        document.getElementById('insertBtn')
                .addEventListener('click', insertTrTag);
        // 전송 버튼
        document.getElementById('ajaxBtn')
                .addEventListener('click', ajaxData);
      
      });
      
      // 추가될 <tr/> 생성 및 등록
      function insertTrTag(event){
        let trTag = document.createElement('tr');
        trTag.addEventListener('click', function(e){ //tr에서 trTag로 변경
          if(e.target.tagName == 'SELECT') return; //select태그에 이벤트 동작 막는거 .stop
          console.log('target Tag', e.target);
          console.log('currentTarget Tag', e.currentTarget);
        })
        
        //체크박스
        let tdTag = createTdTag('checkbox');
        trTag.append(tdTag);
      
        //No.
        tdTag = document.createElement('td');
        tdTag.textContent = getNextNo();
        trTag.append(tdTag);
      
        //아이디(type,name)
        tdTag = createTdTag('text', 'id');
        trTag.append(tdTag);
      
        //비밀번호(type,name)
        tdTag = createTdTag('password', 'password');
        trTag.append(tdTag);
        
        //구분
        tdTag = createTdTag('select');
        trTag.append(tdTag);
      
        //이름
        tdTag = createTdTag('text', 'name');
        trTag.append(tdTag);
      
        //가입날짜
        tdTag = createTdTag('text', 'joinDate');
        trTag.append(tdTag);
      
        console.log(trTag);
        //최종 table에 등록
        document.querySelector('tbody').append(trTag);
      
      };
      
      // <tr/> 태그 생성
      function createTdTag(type, name){
        let tdTag = document.createElement('td');
        // type에 따라 <input/> 태그 혹은 <select/> 태그 생성
        let innerTag = type == 'select' ? createSelectTag() : createInputTag(type, name);
        tdTag.append(innerTag);
        return tdTag;
      }
      
      // <input /> 태그 생성
      function createInputTag(type, name){
        let inputTag = document.createElement('input');
        inputTag.type= type;
        if(!name) inputTag.name= name;
      
        return inputTag;
      }
      
      // <select /> 태그 생성
      function createSelectTag(){
        let selectTag = document.createElement('select');
        selectTag.name = 'gender';
      
        let optionTag = createOptionTag('남자', 'Male');
        selectTag.append(optionTag);
      
        optionTag = createOptionTag('여자', 'FeMale');
        selectTag.append(optionTag);
      
        return selectTag;
      }
      
      // <option /> 태그 생성
      function createOptionTag(text, value){
        let optionTag = document.createElement('option');
        optionTag.textContent = text;
        optionTag.value= value;
        return optionTag;
      }
      
      // 이전 <tr/> 태그의 No 정보를 기반으로 자동 번호 생성
      function getNextNo(){
        let noList = document.querySelectorAll('tbody > tr >  td:nth-of-type(2)');
        
        return ('00' + (Number(noList[noList.length-1].textContent) + 1)).slice(-3);
      };
      
      // AJAX 전송 함수
      function ajaxData(e){
        
        //1) data 정리
        let userAray = getCheckedUsers();
      
        console.log(userAray);
      
        //2) AJAX 전송
      }
      
      // 체크한 <tr/> 정보 가져오기
      function getCheckedUsers(){
        let chList = Array.from(document.querySelectorAll('input:checked'))
                          .filter(tag => tag.id != 'allChk');
        let aray = [];
        chList.forEach(inputTag => {
          let trTag = inputTag.closest('tr');
          // <tr/> 태그 중 데이터를 들고 있는 입력태그만 따로 검색
          let dataTag = trTag.querySelectorAll('input, select');
      
          // 개별 입력태그를 모아서 하나의 객체로 변환
          let obj = {};
          for(tag of dataTag){
            if(tag.name == '') continue;
            obj[tag.name] = tag.value;
          }
          aray.push(obj);
        });
      
        return aray;
      }
      