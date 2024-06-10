const process = require('process'); 
const os = require('os');
//import process from 'process'; //- package.json 에서 type=module일때 이렇게 씀///"type" : "module",
//프로세스 이벤트

process.on('beforeExit', (code) => {
    console.log('2. 종료 직전 : ', code);
});

process.on('exit', (code) => {
    console.log('3. 종료될 때 : ', code);
});
//process.exit(); /프로그램 끝낼때
console.log('1. 첫번째 메시지 ');
//console.log(process.env);
console.log('hostname', os.hostname());
console.log('type', os.type());
console.log('homedir', os.homedir());

//end(package.json에서 "start" : "node process.js",)