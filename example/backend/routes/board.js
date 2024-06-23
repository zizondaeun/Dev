const express = require('express');
const router = express.Router();
const query = require("../mysql/index"); 

//전체조회
router.get("/", (req, res) => { 
    query("boardList")
    .then(result => res.send(result))
})
//단건조회
router.get("/:no", (req, res) => {
    query("boardGet", req.params.no)
    .then(result => res.send(result))
});
//게시글 등록
router.post("/", (req, res) => {
    query("boardInsert", req.body)
    .then(result => console.log(result))
    //res.send(result)
});
//게시글 삭제
router.delete("/:no", (req, res) => {
    query("boardDelete", req.params.no)
    .then(result => res.send(result))
});
//게시글 수정
router.put("/:no", (req, res) => {
    query("boardUpdate", [req.body, req.params.no])
    .then(result => res.send(result))
});

module.exports = router;
