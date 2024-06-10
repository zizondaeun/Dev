/*
rest: 나머지 연산자(...) 2
*/
//구조분해
const chars = ['sun','mon','thu','fri','sat']
//let a = chars[0]
//let b = chars[1]
let [a,b, ...arr] = chars
console.log(a,b, arr[0])



