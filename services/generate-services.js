const catalog = require('../data/data');






const generateCatalog = (req, res) => {
return res.status(200).json(catalog)
}





module.exports = generateCatalog