var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express', username: '홍길동' });
  res.redirect("/prod"); //localhost:3000/에 prod를 안쳐도 이동됨
});

router.get('/prod', function(req, res, next){
  let data = [{no: 1, name: '키보드', price: 1000},
              {no: 2, name: '모니터', price: 3000},
              {no: 3, name: '본체', price: 2000}
            ]
            res.render('productList', {list: data})
})

module.exports = router;
