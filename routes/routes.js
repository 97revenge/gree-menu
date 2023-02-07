const express = require('express');
const router = express.Router();
const value = require('../data/data');


router.use(express.json())

router.get(/home/, (req, res, next) => {
  res.send('test')
});

router.post(/home/, (req, res, next) => {
  req.status(201).send(value.json())
}
)

module.exports = router