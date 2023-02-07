const { default: mongoose } = require("mongoose");

const catalogSchema = new mongoose.Schema({
  catalogName: String , 
  catalogInit: String , 
  catalogMid: String , 
  catalogLow: String , 
})

const testingValue = new catalogSchema({
  catalogName:'Bebidas' , 
  catalogInit:'1',
  catalogMid: '2', 
  catalogLow: '3'
})


module.exports = {catalogSchema , testingValue}