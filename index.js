const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('*', (req, res, next) => {
  // 设置允许跨域的域名,*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*');
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type');
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/user', (req, res) => {
  res.send({
    code: 200,
    msg: req.body,
  });
});

app.listen(port, () => {
  console.log('App on 3000');
});
