const { Schema, model } = require("mongoose");




const catalogDB = new Schema({
  catalogName: String,
  catalogInit: String,
  catalogMid: String,
  catalogLow: String,

})



catalogDB.virtual("emoji", () => { }).get(() => {
  typeof this.catalogName == "string" ? this.catalogName.concat("☀") : "not a compatible name."
})
const catalog = model('catalogDB', catalogDB)



module.exports = catalog