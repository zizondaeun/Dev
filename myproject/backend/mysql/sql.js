const customersql = require('./customerSql');
const boardsql = require('./boardSql');
const ordersql = require('./orderSql');
const cartsql = require('./cartSql');

module.exports = {
    ...customersql,
    ...boardsql,
    ...ordersql,
    ...cartsql
}; //쿼리문쓰게 exports하는거