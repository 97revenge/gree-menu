const catalog = require('../data/schema');
const verifyCatalog = require('../services/verifycatalog');
// CRUD 
const create = async (req, res) => {
  verifyCatalog
  const { catalogName } = req.body
  try {
    const createModel = await catalog.create(req.body)
    res.status(201).json({ createModel: "created !!!" })
  } catch (err) {
    res.status(404).json(err)
  }
}


const readForId = async (req, res) => {
  try {
    const { id } = req.params
    const productId = await catalog.findById(id);
    res.status(200).json({   catalog: productId });
  } catch (err) {
    res.status(404).json({ message: "404 not found" });

  }
}

const read = async (req, res) => {
  try {
    const readModel = await catalog.find(req.body);
    res.status(200).json({ catalog: readModel })
  } catch (err) {
    res.status(404).json(err)
  }
}

const update = async (req, res) => {
 try{
  const {id} = req.params;
  const updatedModel = await catalog.findByIdAndUpdate(id, req.body); 

  return res.status(200).json({message:updatedModel})
 }catch(err){
  res.status(404).json({message:err});
 }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const destroyModel = await catalog.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted !!!" }, destroyModel)
  } catch (err) {
    res.status(404).json(err);
  }

}



// id CRUD 

module.exports = { create, read, readForId, update, destroy } 