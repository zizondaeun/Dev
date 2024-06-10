/*
함수 매개변수에 rest 연산자
*/
function total(num,...arr){
    let result = num;
    //합계계산
    // for(let i=0; i<arr.length; i++) {
    //    result += arr[i]
    // };

    // for(n of arr){
    //     result += n;
    // }

    // for (idx in arr){ //배열
    //     result += arr[idx]
    // }
    
    //reduce
    result = arr.reduce((acc, ele) => {return acc + ele} , num) //num 이 초기값(,여기 위치)/return 해주던가 {}지우던가 둘 중 하나

    console.log('합계=' , result);
    //console.log(num, arr);
}
total(10);
total(10,20);
total(10,20,30);