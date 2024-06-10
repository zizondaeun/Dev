const fs = require('fs');

//비동기(async)-default(node)
fs.readFile('./process.js', 'utf8', (err, data) => {
    if(err) console.log(err);
    //console.log(data);
})
//console.log("1. start");

//동기(sync)
let text = fs.readFileSync('./path.js', 'utf8');
//console.log(text);

//write 파일 출력
let data = '파일 쓰기 테스트';
fs.writeFile('./temp.txt', data, 'utf8', (err) => {
    if(err) console.log(err);
    //부가 명령
})

//동기
data = '파일 쓰기 테스트 동기식';
fs.writeFileSync('./temp2.txt', data, 'utf8');
//부가 명령