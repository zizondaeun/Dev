//쿼리문 mapper.xml처럼 여기에 모아
module.exports = {
    replyList : 'select * from t_comment_board order by cno', 
    // replyInsert : 'insert into t_comment_board set ?',
    // replyUpdate : 'update t_comment_board set ? where cno = ?', 
    // replyDelete : 'delete from t_comment_board where cno = ?',
};