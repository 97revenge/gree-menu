const startDB = require('./mongo-loader');

class Loaders {
  start() {
    startDB();

  }
}
module.exports = new Loaders();