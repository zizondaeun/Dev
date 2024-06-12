module.exports = {
    customerList : 'select * from customers',
    customerGet : 'select * from customers where id = ?',
    customerInsert : 'insert into customers set ? ',
    customerUpdate : 'update customers set ? where id = ?', //물음표가 여러개면 배열로 묶어 보내
    customerDelete : 'delete from customers where id = ?',
}; //쿼리문 모아두는거