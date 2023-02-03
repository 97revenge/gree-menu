// const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const path = require('path');
const catalog = require('../data/data');

router.get(/home/, (req, res, next) => {
  res.send('test')
});

router.post(/home/, (req, res, next) => {
  const { catalogName, catalogInit, catalogMid, CatalogLow } = req.body
  const catalogValue = {
    catalogName,
    catalogInit,
    catalogMid,
    CatalogLow
  }
  return catalogValue


  next();
}, (req, res, next) => {
  res.send(JSON.stringify(req.body))
  next('route')
})





module.exports = router