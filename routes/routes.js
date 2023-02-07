const express = require('express');
const router = express.Router();
const value = require('../data/data');

router.get(/home/, (req, res, next) => {
  res.send('test')
});

router.post(/home/ , (req,res,next) => {
 req.status(200).json(value) 
 next() ; 
}
 )

module.exports = router