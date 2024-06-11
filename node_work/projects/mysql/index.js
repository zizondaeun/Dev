const mysql = require("mysql2");
const sql = require("./sql");
require('dotenv').config({path:'mysql/.env'});

const conn = { //mysql 접속 설정
    connectionLimit : process.env.MYSQL_LIMIT, //default 가 10개라 생략 가능
    host : process.env.MYSQL_HOST, //localhost
    port : process.env.MYSQL_PORT, 
    user : process.env.MYSQL_USERNAME, 
    password : process.env.MYSQL_PASSWORD, 
    database : process.env.MYSQL_DATABASE
};
const pool = mysql.createPool(conn);

function query( alias, values ){
    return new Promise((resolve, reject) => pool.query(sql[alias], values, function(err, results){ //(쿼리, 파라미터, 콜백함수) 
        if(err) {
            console.log(err);
            reject({err});
        }
        else resolve(results)
    })
    )
}
// query("customerList", [])
// .then(results => console.log(results)); //resolve의 값 확인하려고
module.exports = query;