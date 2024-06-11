module.exports = {
    todoList : 'select * from todos', //페이징
    //todoGet : 'select * from todos where no = ?', //단건 조회
    todoInsert : 'insert into todos set ? ',
    todoUpdate : 'update todos set ? where no = ?', //물음표가 여러개면 배열로 묶어 보내
    todoDelete : 'delete from todos where no = ?',
};