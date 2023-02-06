const catalog = require('../data/data');
const path = require('path');


const generateCatalog = (req, res) => {
  return res.status(200).json(catalog)
}

const generateUrl = (req, res) => { 
  const options = {
    root: path.join(__dirname)
  }
// event for POST request | onclick 
  const generate = (url) => {
    return window.location = `http://localhost:5555/${catalog.catalogName}`
  }
  return generate(options)
}






module.exports = generateCatalog 