var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var customerRouter = require('./routes/customer');
var boardRouter = require('./routes/board');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //저 폴더위치
app.set('view engine', 'ejs'); //ejs로 바꿔서 (jade,pug에서)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session'); 
const fileStore = require('session-file-store')(session);

app.use(session({
  secret: 'secret key', //암호화하는 데 쓰일 키
  resave: false, // 세션에 변경사항이 없어도 항상 다시 저장할지 여부
  saveUninitialized: true, // 초기화되지 않은 세션을 스토어(저장소)에 강제로 저장할지 여부
  cookie: { // 세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
      httpOnly: true, // true 이면 클라이언트 자바스크립트에서 document.cookie로 쿠키 정보를 볼 수 없음
      secure: true, // true 이면 https 환경에서만 쿠키 정보를 주고 받도록 처리,
      maxAge: 60000 // 쿠키가 유지되는 시간 (밀리세컨드 단위)
  },
  store: new fileStore() // 세션 저장소로 fileStore 사용
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/customer', customerRouter); //패치주소랑 일치시켜야해서 api
app.use('/api/board', boardRouter);

const members = [
  { userid: "user1", userpw: "1111" },
  { userid: "user2", userpw: "2222" },
  { userid: "user3", userpw: "3333" },
];

app.get("/api/account", (req, res) => {
  //if(req.cookies && req.cookies.account){
  console.log('account', req.session.is_logined, req.session.userid);
  if(req.session.is_logined){
      const member = JSON.parse({userid : req.session.userid});
      return res.send(member);
  }else{
      res.send(401);
  }
});

app.post("/api/logout", (req, res) => {
  //res.clearCookie("account");
  req.session.destroy();
  res.send(200);
})

app.post("/api/login", (req, res) =>{ //2.값 넘어가는지 확인
  const userid = req.body.userid;
  const userpw = req.body.userpw;
  //console.log(req.body); /id,pw를 구분하기위해
  console.log(userid, userpw);
  const member = members.find(a => a.userid === userid && a.userpw === userpw) //===엄격하게 비교하기위해
  if(member){
      // const options = {
      //     domain : "localhost",
      //     path : "/", 
      //     maxAge : 10000, //쿠키 유효시간
      //     httpOnly : true
      // };
      // res.cookie("account", JSON.stringify(member), options); //입력받은 로그인 정보를 쿠키에 저장할거야
      
      req.session.userid = userid; // 세션에 사용자 이메일 정보 저장
      req.session.is_logined = true; // 세션에 로그인 여부 저장
      req.session.save(err => { // 세션 저장
      if(err) throw err;
      res.send(member); // 로그인 후 홈화면으로 이동
      });
  }
  else{
      res.send(401); //로그인실패 에러
  }
  //res.send({userid, userpw});
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
