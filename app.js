// const generateCatalog = require('./services/generate-services');
const express = require('express');
const app = express();
const router = require('./routes/routes');
const port = 7777;
const Loaders = require('./loaders/index');
const dotEnv = require('dotenv').config();





Loaders.start();


app.use(express.json())
app.use(router);


app.get('/', (req, res) => {
  res.send('ok')
})














app.listen(port, (req, res) => {
  console.log('Running');

});



