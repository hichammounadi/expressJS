const { response } = require('express');
const express = require('express');
const app = express();
const logger = require('./logger')
//req >====> middleware >=====> res

app.use('/api', logger)

app.get('/',  (req, res) => {
  res.send('Home');
});

app.get('/about',  (req, res) => {
  res.send('about');
});

app.get('/api/products',  (req, res)=> {
    res.send('Products')
})

//HERE THE SERVER
app.listen(5000, () => {
  console.log('server listening on port 5000...');
});
