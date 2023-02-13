const mongoose = require('mongoose');


mongoose.set('strictQuery', false);

async function startDB() {

    await mongoose.connect('mongodb://adm-adm:xDYmeC0CSu4wLaR2@ac-scrukgq-shard-00-00.hb9i782.mongodb.net:27017,ac-scrukgq-shard-00-01.hb9i782.mongodb.net:27017,ac-scrukgq-shard-00-02.hb9i782.mongodb.net:27017/?ssl=true&replicaSet=atlas-232nl0-shard-0&authSource=admin&retryWrites=true&w=majority')
      .then(err => console.log(err))
      .then(() => console.log('mongoose running'))

}






module.exports = startDB; 