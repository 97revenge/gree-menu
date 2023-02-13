const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const catalogDB = new Schema({
  catalogName: String,
  catalogInit: String,
  catalogMid: String,
  catalogLow: String,

})
const catalog = model('catalogDB', catalogDB)


module.exports = catalog