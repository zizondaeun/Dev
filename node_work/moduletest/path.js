const path = require('path'); // "start" : "node path.js",

console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.extname('index.html')); //확장자

console.log(path.join('/temp','upload','abc.txt')); //폴더 합치는거
let file = path.parse('/temp/upload/abc.txt');
console.log(file);