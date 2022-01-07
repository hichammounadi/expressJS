// const req = require('express/lib/request');

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'hicham') {
    req.user = { name: 'hicham', id: 3 };
    next()
  } else{
      res.status(401).send('Unauthorized')
  }
};

module.exports = authorize;
