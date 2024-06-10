const express = require('express');
const router = express.Router();

//let no = 2;
board = [{
    "no": 1,
    "title": "dada's book",
    "writer": "kimdada",
    "content": "content test"
  },
  {
    "no": 2,
    "title": "dada's book2",
    "writer": "kimdada",
    "content": "content test2"
  }
];

router.get("/", (req, res) => { //전체조회
    //console.log(new Date(req.requestTime).toLocaleString());
    res.send(board)
})
router.get("/:no", (req, res) => { 
    console.log("no:" , req.params.no)
    const no = req.params.no;
    let result = board.find(a => a.no == no) //a는 board의 no
    console.log(result)
    res.send(result)
})
router.post("/", (req, res) => {
    console.log(req.body);
    board.push(req.body)
    res.send("board insert 라우트")
})
router.put("/:no", (req, res) => {
    const no = req.params.no;
    board = board.map(obj => obj.no == no ? {...obj, ...req.body} : obj )
    res.send("board update 라우트")
})
router.delete("/:no", (req, res) => {
    //indexOf -> split
    //board = board.filter
    board = board.filter(obj => obj.no != no)
    res.send("board delete 라우트")
})
///뒤에 다빼면 부메랑에서 /board까지만
module.exports = router;
