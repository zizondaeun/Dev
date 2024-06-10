let pattern = /[0-9]/ ; // or \\d
let str = 'abc9012';
let result = pattern.test(str);
console.log(result);