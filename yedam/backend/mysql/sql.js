const customersql = require('./customerSql');
const boardsql = require('./boardSql');
const ordersql = require('./orderSql');

module.exports = {
    ...customersql,
    ...boardsql,
    ...ordersql
}; //쿼리문쓰게 exports하는거