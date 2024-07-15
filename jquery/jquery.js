//jQuery => 추상화, 모든 문법의 결과가 대체로 jQuery 객체 / 추상화 = 인터페이스(기능을 하지만 그 코드가 가려져있는)
/*jQuery 태그 탐색 : $(''); - 함수(값을 리턴함)/메소드 x/필드가 거의 존재하지 x->메소드로 접근 가능
    => css selector 를 사용
        # : id 속성
        . : class 속성
        tagName : tag 검색

        [attribute] : 일반속성 /타입속성때 보통 씀
            -> [attribute='value'] : 특정 속성 값이 value인 경우
            -> [attribute^='value'] : 특정 속성 값이 value로 시작하는 경우
            -> [attribute$='value'] : 특정 속성 값이 value로 끝나는 경우
            -> [attribute*='value'] : 특정 속성 값이 value를 포함하는 경우

        :checked     : checked 속성이 true인 태그 검색
        
        공백 : 하위요소 ex) tr input
        >    : 자식요소    ex) tr > input /이런 경우는 잘 없지만
        공백이 없는 경우 : 해당 태그가 특정 속성값을 가지는 경우 ex) table.list /테이블 태그의 클래스가 list인 경우

        ========================= /메소드로 접근 가능
        부모 : parent()
        자식 : children(), first(), last()
        형제 : prev(), next()

*/

$(function(){ //js의 DOMContentLoaded : jQuery의 ready / 콜백함수로 function으로 바로 넣어서 씀 
    //DOM이 완성되는 경우 수행할 코드
    
    //on() : 이벤트 핸들러 등록 메소드
    //+ 버튼
    $('#insertBtn').on('click', insertTrTag); //.on(어떤 이벤트인지 이름 , 동작하고 하는 함수)
    //전송 버튼
    $('button#ajaxBtn').on('click', ajaxData);

    //trList
    $('tbody > tr, [type="text"]').on('click', function(e){ //jQuery는 모든 tr에(여러개의 태그에) 동일한 이벤트 걸수있음(js와 달리*) /, [type="text"] 그룹선택자도 넣을수있음
        if(e.target.tagName == 'SELECT') return;

        console.log('target Tag', e.target);
        console.log('currentTarget Tag', e.currentTarget);
        console.log('this', this);
    })
});

function insertTrTag(event){ //우선 없는 태그를 생성해야함(새로운 tr을 만들게)
    //$('<tagName />'); /createElement = $('<>') 이 표시가 있어야 태그 생성 /$('#')은 검색 시
    //or $('<tagName id="name" class="sel input"></tagName>');

    /* 메소드로 접근
        innerHtml : html()
        textContent : text()
        class : addClass()/클래스를 추가, removeClass()/클래스를 제거, hasClass()/존재 유무 확인, toggleClass()/있으면 없으면
        value : val()
        style : css()
        기타  : attr(), prop()
    */

    //tr생성(속성안넣고 생성했음..)
    let trTag = $('<tr/>'); //생성할 태그를 $('<>')만들면 됨

    //함수 굳이 안만들고 생성
    //체크박스
    let tdTag = $('<td/>');
    let inputTag = $('<input/>').prop('type', 'checkbox'); //기타속성인 prop('','') 메소드를 써서 값을 세팅함(매개값 2개)
    console.log(inputTag.prop('type')); //특정 속성값을 가지고 올때는 매개값 1개만 넣어줌 /호출방식이 위, 아래가 다름을 알고있기
    //closest() : 상위(조상) 요소 중 해당 조건을 만족하는 첫번째 태그 /나랑 가장 가까운 조상 input.closest('tr')
    tdTag.append(inputTag); //jquery꺼
    trTag.append(tdTag);

    //No
    tdTag = $('<td/>').text(100);
    trTag.append(tdTag);

    //아이디
    trTag.append(
        $('<td/>').append(
            $('<input/>').prop('type', 'text').prop('name', 'id')
        )
    );

    //비밀번호(아이디 생성때 방법보다 이 방법을 권장하지만 재활용성이 떨어짐)
    trTag.append(`<td><input type="password" name="password"></td>`);

    //구분(하위요소를 먼저 만들고 상위로 가는 방법..)
    let firstOpt = $('<option/>').text('남자').val('Male');
    let secondOpt = $('<option/>').text('여자').val('Female');
    let selectTag = $('<select/>').prop('name', 'gender')
                                    .append(firstOpt)
                                    .append(secondOpt);
    tdTag = $('<td/>').append(selectTag)
    trTag.append(tdTag);

    //이름
    trTag.append(`<td><input type="text" name="name"></td>`);
    // inputTag = $('<input/>').prop('type', 'text')
    //                         .prop('name', 'name');
    // tdTag = $('<td/>').append(inputTag);
    // trTag.append(tdTag);

    //가입날짜(재활용성b)
    //trTag.append(`<td><input type="date" name="joinDate"></td>`);
    inputTag = $('<input/>').prop('type', 'date')
                            .prop('name', 'joinDate');
    tdTag = $('<td/>').append(inputTag);
    trTag.append(tdTag);

    //최종 table에 등록
    $('tbody').append(trTag);
};

function ajaxData(event){
    let userAray = getCheckedUsers();

    printTable();
};

//태그들 다 가져와보려고
function printTable(){
    let table = $('table');

    console.log(table.html()); //innerHtml
    console.log(table.text()); //태그 제외한 텍스트 속성
    console.log(table.find('input[type="password"]').val()); //input에서 type이 password인것중에 젤 첫번째값 = val
    console.log(table.css('border')); //css는 표준속성 기준으로 사용하고, 불러올때는 매개값 1개
    $('table tr:even').css('background-color', 'skyblue'); //값 세팅할때는 매개값 2개
    console.log(table.find('select:eq(1)').prop('name'));
}

function getCheckedUsers(){
    //let chList = $('input[type="radio"]').filter(':checked').not('#allChk'); //필터는 배열 다 찾아,파인드는 하나
    let chList = $('input:checked').not('#allChk'); //input태그 중에서 checked된 대상의 정보만 가져오기 /not은 jquery꺼
    console.log(chList[0].type);
    let array = [];
    chList.each((idx, tag) => { //each는 순서가 다름 each(index, inputaTag)첫번째가 무조건 index, 두번째가 값/forEach는 매개값으로 (value, index)
        //console.log(idx, tag);
        //중요한 사항) 반복문 안에서 jQuery 객체는 깨짐./반복문 안 or 인덱스를 사용하는 경우 깨짐
        //여기는 지금 자바스크립트 공간이라 자바스크립트 문법을 사용해야함(find못씀)
        //해당 tag 변수를 활용해서 <tr/>태그를 찾아 trTag 변수에 담기
        let trTag = tag.closest('tr');
        //trTag 변수를 활용해서 하위 요소 중 입력태그를 검색하기
        let dataTag = trTag.querySelectorAll('input, select'); //find사용못함 / input이랑 select둘다 가져오려고 할때

        let obj = {};
        dataTag.forEach(tag => { //foreach는 함수단위
            if(tag.name == '') return; //continue,break 사용 못함 /함수에서 중단은 return으로 
            obj[tag.name] = tag.value;
        });
        array.push(obj);
    });

    console.log(array);
    return array;
}

