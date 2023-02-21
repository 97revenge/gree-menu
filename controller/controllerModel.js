const catalog = require('../data/schema');
const catalogModel = require('../data/updated-schema');
const verify = require('../services/verifycatalog');
// CRUD 
const create = async (req, res) => {
  verify
  try {
    const createModel = await catalogModel.create(req.body)

    createModel.emoji // new implementation . 
    res.status(201).json({ message: "created !!!" })
  } catch (err) {
    res.status(404).json(err)
  }
}


const readForId = async (req, res) => {
  const { id } = req.params
  const productId = await catalogModel.findById(id)

  try {
    res.status(200).json({message:productId});
  } catch (err) {
    res.status(404).json({ message: "404 not found" })

  }
}

const read = async (req, res) => {
  try {
    const readModel = await catalogModel.find(req.body);
    res.status(200).json({ catalog: readModel })
  } catch (err) {
    res.status(404).json(err)
  }
}

const update = async (req, res) => {
  const { id } = req.params
  try {
    const updateModel = await catalogModel.findByIdAndUpdate(id, req.body);

    if (!updateModel) {
      res.status(404).json({ message: 'not found' })
    }

    res.status(200).json({ message: "update !!!" })
  } catch (err) {
    res.status(404).json(err)
  }
}

const destroy = async (req, res) => {
  const { id } = req.params; 
  const destroyModel = await catalogModel.findByIdAndDelete(id); 
  try {
    res.status(200).json({message:"deleted !!!"} , destroyModel )
  } catch (err) {
    res.status(404).json(err); 
  }
  
}

const updateDestroy = async () => {
  const destroyedModel = await catalogModel.find(req.body)
}



// id CRUD 

module.exports = { create, read, readForId, update, destroy } 