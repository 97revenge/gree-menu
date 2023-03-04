const catalog = require("../data/schema");
// CRUD
const create = async (req, res) => {
  try {
    const { catalogName } = req.body;
    const catalogDuplicated = await catalog.findOne({ catalogName });
    if (catalogDuplicated) {
      res.status(404).json({ message: "this catalog already exists" });
    }
    if (!catalogName) {
      res.status(404).json({ message: "the title of catalog is required" });
    }
    const createModel = await catalog.create(req.body);
    res.status(201).json({ message: "created !!!" });
  } catch (err) {
    res.status(404).json(err);
  }
};

const readForId = async (req, res) => {
  try {
    const { id } = req.params;
    const productId = await catalog.findById(id);
    res.status(200).json({ catalog: productId });
  } catch (err) {
    res.status(404).json({ message: "404 not found" });
  }
};

const read = async (req, res) => {
  try {
    const readModel = await catalog.find(req.body);
    res.status(200).json({ catalog: readModel });
  } catch (err) {
    res.status(404).json(err);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedModel = await catalog.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ message: "updated !!!" });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const destroyModel = await catalog.findByIdAndDelete(id);
    return res.status(200).json({ message: "deleted !!!" });
  } catch (err) {
    return res.status(404).json(err);
  }
};

module.exports = { create, read, update, readForId, destroy };
