const value = require('../data/data');





const generateCatalog = (req, res) => {
return res.status(200).json(value)
}





module.exports = generateCatalog