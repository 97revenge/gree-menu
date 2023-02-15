const { Schema, model } = require("mongoose");



const obj = [
  "🔥",
  "🔥",
  "🔥",
  "🔥",
]

const randomObj = Math.floor(Math.random()*obj.lenght);



const upgradeSchema = new Schema({
  catalogName: name => name.concat(randomObj[0]),
  catalogInit: name => name.concat(randomObj[1]),
  catalogName: name => name.concat(randomObj[2]),
  cataloLow: name => name.concat(randomObj[3]),
  premiumCatalog: {
    aditionaInitilItem: String,
    additionalMidItem: String,
    AdditionalLowItem: String
  }

})

const upgradeModel = model("catalog", upgradeSchema)

module.exports = upgradeModel;  