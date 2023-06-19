const { Schema, model } = require("mongoose");

const catalogNewSet = new Schema({
  catalogName: {
    type: String,
    required: true,
  },
  itemLow: {
    type: String,
    required: true,
  },
  Lanches: {
    type: String,
    required: true,
  },
  outros: {
    type: String,
    required: true,
  },
});

const catalogModel = model("catalog", catalogNewSet);

module.exports = catalogModel;
