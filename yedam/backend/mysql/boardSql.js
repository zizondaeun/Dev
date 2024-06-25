//쿼리문 mapper.xml처럼 여기에 모아
module.exports = {
    boardList : 'select * from board order by no desc limit ?, ?', //페이징
    boardCount : 'select count(*) cnt from board', 
    boardGet : 'select * from board where no = ?', //단건 조회
    boardInsert : 'insert into board set ?',
    boardUpdate : 'update board set ? where no = ?', //물음표가 여러개면 배열로 묶어 보내
    boardDelete : 'delete from board where no = ?',
};