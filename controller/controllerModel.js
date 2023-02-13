const catalog = require('../data/schema');










// CRUD 
const create = async (req, res) => {

  const createdModel = await catalog.create(req.body);

  try {
    res.status(201).json({ catalog: createdModel });
  } catch (err) {
    res.status(404).json({ err })
  }

}
const read = async (req, res) => {
  const readModel = await catalog.find(req.body);
try{
    res.status(200).json({catalog:readModel})
}catch(err){
  res.status(404).json({err:"error 404"})
}
}
const update = async (req, res) => {
  const updateModel = await catalog.findByIdAndUpdate(req.body);
  try{
    res.status(200).json({catalog:updateModel})
  }catch(err){
    res.status(404).json({err:"error 404"})
  }

}
const destroy = async (req, res) => {
  const destroyModel = await catalog.remove(req.body);

try{
  res.status(200).json({catalog:destroyModel})
}catch(err){
  res.status(404).json({err:"error 404"})

}

}

module.exports = { create, read, update, destroy } 