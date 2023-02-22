const { Schema, model } = require("mongoose");


const catalogNewSet = new Schema({
  catalogName: String,
  nested: {
    catalogInit: String,
    catalogMid: String,
    catalogLow: String,
  },
  premiumItens: {
    additionaInitilItem: {type: String},
    additionalMidItem: {type: String},
    additionalLowItem: {type: String}
  }
})



const catalogModel = model("catalog", catalogNewSet)

module.exports = catalogModel;  