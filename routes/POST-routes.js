const express = require('express');
const mongoose = require('mongoose');
const catalog = require('../data/schema');
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
router.use(express.json())


const instanceModel = async (req, res) => {
  const { catalogName, catalogInit, catalogMid, catalogLow } = req.body
  const instanceCatalog = new catalog({
    catalogName,
    catalogInit,
    catalogMid,
    catalogLow,
    id: uuidv4()
  })
  try {
    await instanceCatalog.save()
    res.status(201).json({
      data: instanceCatalog.id, 
      data: Date.now()
    })
  } catch (err) {
res.status(404).json({
  error: err => console.log(err)
})
  }

}

const showModel = async(req,res) => {
  const showInstanceModel = catalog.find({});

  return res.status(200).json({message:'showModel ',showInstanceModel});  
}





module.exports = {instanceModel, showModel}