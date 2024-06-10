/*destructure.js
 객체 구조분해
*/
let emp = {empName : 'scott', dept : '개발', hireDate : '2019-11-01'}
//let empName = emp.empName;
let { empName,dept } = emp
//console.log(emp.empName)
console.log(empName, dept)

//객체 복사
let emp1 = {...emp, dt : '2015'}; //깊은 복사 /let emp1 = emp;는 얕은 복사로 둘다 kim
emp.empName = 'kim';
console.log('객체복사', emp1.empName, emp.empName, emp1.dt); //얕은 복사

//배열 구조분해
let arr = ['a','b','c']
let [first, second, third] = arr;
console.log(first, second, third) //arr[0], arr[1]