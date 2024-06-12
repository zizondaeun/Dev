//쿼리문 mapper.xml처럼 여기에 모아
const boardsql = require('./boardSql');
const todosql = require('./todoSql');
const customersql = require('./customerSql');

module.exports = {
    ...boardsql,
    ...todosql,
    ...customersql
};