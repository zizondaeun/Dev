/*
    array_sort.js 6(p.46)
*/
let fruit = ['banana', '오렌지', '망고', 'apple']
//fruit.sort((a,b) => a.length - b.length);
//fruit.sort((a,b) => b.length - a.length);
fruit.sort((a,b) => {
    if (a > b) return -1;
    else if (a == b) return 0;
    else return 1;
});
console.log(fruit);

//객체 배열 정렬
let arrEmp = [
    {empName : 'scott', dept : '개발', hireDate : '2019-11-01', score : 90},
    {empName : 'hong', dept : '기획', hireDate : '2018-11-01', score : 95},
    {empName : 'choi', dept : '총무', hireDate : '2017-11-01', score : 100}
]

//이름(문자)
arrEmp.sort((a,b) => {
    if(a.empName > b.empName) return 1;
    else if(a.empName == b.empName) return 0;
    else return -1;
});
console.log(arrEmp);

//score(숫자) : 내림차순
arrEmp.sort((a,b) => { //b.score - a.score
    if(a.score > b.score) return -1;
    else if(a.score == b.score) return 0;
    else return 1;
})
console.log('성적순', arrEmp);

//filter(부분만 보고싶어)p.47 - 필터는 배열 다 돌아
//let result = arrEmp.filter(emp => emp.dept == '개발'); //개발 아닌 사람 !=
// let result = arrEmp.filter(emp => emp.score >= 95); 
// console.log('성적', result);

//find 는 한건만 조회/개수가 다름(find는 최초 한개만 리턴)
let result = arrEmp.find(emp => emp.score >= 95); 
console.log('성적', result);


