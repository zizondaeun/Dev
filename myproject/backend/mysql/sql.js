const customersql = require('./customerSql');
const boardsql = require('./boardSql');

module.exports = {
    ...customersql,
    ...boardsql
}; //쿼리문쓰게 exports하는거