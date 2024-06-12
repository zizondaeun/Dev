var express = require('express');
var path = require("path"); //패스 넣어줘
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express', username: '홍길동' });
  //res.redirect("/prod"); //localhost:3000/에 prod를 안쳐도 이동됨
  
  //res.send("hello");
  //res.end();
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
  // const filepath = 'D:/upload/4a127c7d7978e29774a12dfafe63a810';  //파일다운로드
  // const filename = 'img.jpg'
  // res.setHeader('Content-Disposition', `attachment; filename=${filename}`); // 이게 핵심 /filename사용자가 보는 파일이름
  // res.sendFile(filepath);
});

router.get('/prod', function(req, res, next){
  let data = [{no: 1, name: '키보드', price: 1000},
              {no: 2, name: '모니터', price: 3000},
              {no: 3, name: '본체', price: 2000}
            ]
            res.render('productList', {list: data})
})

module.exports = router;
