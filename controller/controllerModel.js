const catalog = require('../data/schema');

// CRUD 
const create = async (req, res) => { /* 🆗  */
  try {
    const createModel = await catalog.create(req.body)
    createModel.emoji // new implementation . 
    res.status(201).json({ message: "created !!!" })
  } catch (err) {
    res.status(404).json(err)
  }
}


const readForId = async (req, res) => {
  const { id } = req.params
  const productId = await catalog.findById(id)

  try {
    res.status(200).find(id);
  } catch (err) {
    res.status(404).json({ message: "404 not found" })

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
  const {id} = req.params
  try {
  const updateModel = await catalog.findByIdAndUpdate(id , req.body);

  if(!updateModel){
    res.status(404).json({message:'not found'})
  }

    res.status(200).json({ message:"update !!!" })
  } catch (err) {
    res.status(404).json(err)
  }
}

const destroy = async (req, res) => {

  // code here 
}





// id CRUD 

module.exports = { create, read, readForId, update, destroy } 