const express = require('express');
const router = express.Router();
const query = require("../mysql/index"); 

const multer = require('multer');
const upload = multer({ dest: 'd:/upload/' });

// let no = 2;
// board = [{
//     "no": 1,
//     "title": "dada's book",
//     "writer": "kimdada",
//     "content": "content test"
//   },
//   {
//     "no": 2,
//     "title": "dada's book2",
//     "writer": "kimdada",
//     "content": "content test2"
//   }
// ];

// router.get("/", (req, res) => { //전체조회
//     //console.log(new Date(req.requestTime).toLocaleString());
//     res.send(board)
// })
// router.get("/:no", (req, res) => { 
//     console.log("no:" , req.params.no)
//     const no = req.params.no;
//     let result = board.find(a => a.no == no) //a는 board의 no
//     console.log(result)
//     res.send(result)
// })
// router.post("/", (req, res) => {
//     console.log(req.body);
//     board.push(req.body)
//     res.send("board insert 라우트")
// })
// router.put("/:no", (req, res) => {
//     const no = req.params.no;
//     board = board.map(obj => obj.no == no ? {...obj, ...req.body} : obj )
//     res.send("board update 라우트")
// })
// router.delete("/:no", (req, res) => {
//     //indexOf -> split
//     //board = board.filter
//     board = board.filter(obj => obj.no != no)
//     res.send("board delete 라우트")
// })
// //뒤에 다빼면 부메랑에서 /board까지만

// router.get("/", (req, res) => {
//     let page = Number(req.query.page)
//     page = (page - 1) * 10
//     query("boardList", page)
//     .then(result => res.send(result))
// });
router.get("/", (req, res) => {
    let p = Number(req.query.page) //limit은 숫자타입으로만 넣어야하기때문에 타입변환해줘야함
    p = (p - 1) * 10 //원래는 req.query인데 거기에 url에 page를 우리가 직접 입력하는 그 page
    query("boardList", p) //우리가 실행할 쿼리는
    .then(result => res.send(result))
});
router.get("/:no", (req, res) => {
    query("boardGet", req.params.no)
    .then(result => res.send(result))
});
// router.post("/", (req, res) => {
//     query("boardInsert", req.body)
//     .then(result => res.send(result))
// });
router.put("/:no", (req, res) => {
    query("boardUpdate", [req.body, req.params.no])
    .then(result => res.send(result))
});
router.delete("/:no", (req, res) => {
    query("boardDelete", req.params.no)
    .then(result => res.send(result))
});

//과제(첨부파일 삽입)
router.post("/", upload.single('avatar'), (req, res) => {
    //첨부파일이 있으면
    let data = {...req.body};
    if(req.file != null){
        data.filename = req.file.originalname;
        data.uploadfilename = req.file.filename;
    }
    query("boardInsert", data)
    .then(result => res.send(result))
});

module.exports = router;
