const { Schema, model } = require("mongoose");





const catalogNewSet = new Schema({
  catalogName: { type: String},
  nested: {
    catalogInit: {type: String},
    catalogMid: {type: String},
    catalogLow: {type: String},
  },
  premiumItens: {
    additionaInitilItem: {type: String},
    additionalMidItem: {type: String},
    additionalLowItem: {type: String}
  }
})
const catalogModel = model("catalog", catalogNewSet)

module.exports = catalogModel;  