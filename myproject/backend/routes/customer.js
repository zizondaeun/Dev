const express = require('express');
const router = express.Router();
const query = require("../mysql/index"); // /index생략가능

router.get('/', async (req, res) => {
    let page = Number(req.query.page);
    let pageUnit = Number(req.query.pageUnit);

    if(!page){ page = 1; }
    if(!pageUnit){ pageUnit = 10; }

    let offset = (page - 1) * pageUnit;

    let list = await query("customerList", [offset, pageUnit]);
    let count = await query("customerCount");
    count = count[0].cnt; //0번째의 컬럼명
    //.then(result => res.send(result))
    res.send({list, count})
});

router.get('/:id', (req, res) => {
    query("customerGet", req.params.id)
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
    let result = await query("customerUpdate", [req.body, req.params.id]) //물음표가 두개니까 배열로 [req.body, req.params.id] 부메랑의 data를 배열로 
    res.send(result);
    //res.send('update 라우트 루트')
}); 

router.delete('/:id', (req, res) => {
    query("customerDelete", req.params.id)
    .then(result => res.send(result))
    //res.send('delete 라우트 루트')
});

module.exports = router;