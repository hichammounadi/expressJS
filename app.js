const { response } = require('express');
const express = require('express');
const app = express();
const { products } = require('./data');

//req >====> middleware >=====> res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
//   res.send('Testing')
    next()
};

app.get('/', logger, (req, res) => {
  res.send('Home');
});

app.get('/about', logger, (req, res) => {
  res.send('about');
});

//HERE THE SERVER
app.listen(5000, () => {
  console.log('server listening on port 5000...');
});
