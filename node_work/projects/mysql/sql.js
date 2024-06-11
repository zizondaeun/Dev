//쿼리문 mapper.xml처럼 여기에 모아
const boardsql = require('./boardSql');
const todosql = require('./todoSql');

module.exports = {
    customerList : 'select * from customers',
    customerInsert : 'insert into customers set ? ',
    customerUpdate : 'update customers set ? where id = ?', //물음표가 여러개면 배열로 묶어 보내
    customerDelete : 'delete from customers where id = ?',
    ...boardsql,
    ...todosql
};