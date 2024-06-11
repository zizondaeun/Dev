const mysql = require('mysql2'); //mysql 모듈 로드

const conn = { //mysql 접속 설정
    connectionLimit : 10, //default 가 10개라 생략 가능
    host : '127.0.0.1', //localhost
    port : '3306', 
    user : 'hr', 
    password : 'hr', 
    database : 'test'
};

//자바에서 statement, prepareStatement랑 같음
const pool = mysql.createPool(conn);
let name = '홍길동';
let email = 'qqq@email.com';
let phone = '010-3333-3333';
//const sql = "INSERT INTO customers(name, email, phone) VALUES (?, ?, ?)"; //'parkjisung', 'sss@email.com', '010-2222-2222'
const sql = "INSERT INTO customers set ? ";
const params = {name : '성춘향', email : 'ttt@email.com', phone : '010-4444-4444', address : '대구 동구'}
pool.query(sql, params, function(err, results, fields){ //파라미터 배열로 받아[name, email, phone]
    if(err) console.log(err);
    console.log(results);
})