const mongoose = require('mongoose');
const uri = require('../loaders/uri');

mongoose.set('strictQuery', false);

async function startDB() {


    await mongoose.connect(uri)
      .then(err => console.log(err))
      .then(() => console.log('mongoose running'))

}






module.exports = startDB; 