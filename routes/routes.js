const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const value = require('../data/data');

router.get(/home/, (req, res, next) => {
  res.send('test')
});

router.post(/home/ , (req,res,next) => {
 req.status(200).json(value) 
 next() ; 
}, (req,res,next) => {
  console.log(req.method)
  res.send({message:'/route status 200 /'})
  next();
} )

module.exports = router