//쿼리문 mapper.xml처럼 여기에 모아
module.exports = {
    boardList : 'select * from t_board_board order by no', 
    boardGet : 'select * from t_board_board where no = ?', //단건 조회
    boardInsert : 'insert into t_board_board set ?',
    boardUpdate : 'update t_board_board set ? where no = ?', //물음표가 여러개면 배열로 묶어 보내
    boardDelete : 'delete from t_board_board where no = ?',
};