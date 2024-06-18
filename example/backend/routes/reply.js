const express = require('express');
const router = express.Router();
const query = require("../mysql/index"); 

//전체조회
router.get("/", (req, res) => { 
    query("replyList")
    .then(result => res.send(result))
})

module.exports = router;