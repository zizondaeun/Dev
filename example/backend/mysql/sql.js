const boardsql = require('./boardSql');
const replysql = require('./replySql');

module.exports = {
    ...boardsql,
    ...replysql
}; //쿼리문쓰게 exports하는거