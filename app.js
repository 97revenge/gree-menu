const express = require('express');
const app = express()
const router = require('./routes/routes');
const port = 5555;
const generateCatalog = require('./services/generate-services');
app.use(router);

app.get('/', generateCatalog, (req, res,) => {
  res.send('tanto faz');
})




app.listen(port, (req, res) => {
  console.log('Running');
})



