const catalog = require("../data/schema");

const verifyCatalog = async (req, res) => {
  const { catalogName } = req.body;
  const catalogCheck = await catalog.findOne({catalogName});
  if (catalogCheck) {
    return res
      .status(404)
      .json({ message: "This item has already been created . try another" });
  }
};

module.exports = verifyCatalog;
