const express = require("express");
const app = express();
const port = 3000; 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

var boardRouter = require('./routes/board');
var replyRouter = require('./routes/reply');

app.use('/api/board', boardRouter);
app.use('/api/reply', replyRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });

