const express = require('express');
const { create, read,readForId, update, destroy } = require('../controller/controllerModel');
const router = express.Router();
const generatePath = require('../services/generatePath');






router.use(express.json());

const instanceHomeUrl = generatePath('home');


router.post(instanceHomeUrl, create);
router.all(instanceHomeUrl, read);
router.all('/home/:id' , readForId)
router.all(instanceHomeUrl, update)
router.all(instanceHomeUrl, destroy)
// router.get(instanceInitUrl , async (req,res) => {
//   const {} = req.body
//   res.json({data:`${}`})
// })


router.get(instanceHomeUrl, (req, res) => {
  res.send('ok')
})













module.exports = router