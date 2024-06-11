const express = require('express');
const router = express.Router();
const query = require("../mysql/index") // /index생략가능

router.get('/', (req, res) => {
    query("customerList")
    .then(result => res.send(result))
    //res.send('customer 라우트 루트')
});

router.post('/', (req, res) => {
    console.log(req.body);
    query("customerInsert", req.body)
    .then(result => res.send(result))
    //res.send('insert 라우트 루트')
});

// router.put('/:id', (req, res) => {  //물음표 :id
//     //console.log(req.body);
//     query("customerUpdate", [req.body, req.params.id]) //물음표가 두개니까 배열로 req.body, req.params.id
//     .then(result => res.send(result))
//     //res.send('update 라우트 루트')
// });

//async await
router.put('/:id', async(req, res) => {  //물음표 :id
    //console.log(req.body);
    let result = await query("customerUpdate", req.body.data) //물음표가 두개니까 배열로 [req.body, req.params.id] 부메랑의 data를 배열로 
    res.send(result);
    //res.send('update 라우트 루트')
}); 

router.delete('/:id', (req, res) => {
    query("customerDelete", req.params.id)
    .then(result => res.send(result))
    //res.send('delete 라우트 루트')
});

module.exports = router;