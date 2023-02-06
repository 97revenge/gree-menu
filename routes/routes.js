// const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();


router.get(/home/, (req, res) => {
  res.send('test')
});







module.exports = router