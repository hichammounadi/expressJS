const { response } = require('express');
const express = require('express');
const app = express();
const { products } = require('./data');






app.listen(5000, () => {
  console.log('server listening on port 5000...');
});
