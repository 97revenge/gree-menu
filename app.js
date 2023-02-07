// const generateCatalog = require('./services/generate-services');
const express = require('express');
const app = express();
const router = require('./routes/routes');
const port = 5555;
const generateCatalog = require('./services/generate-services');
app.use(router);

app.get('/', generateCatalog, (req, res,) => {
  res.send('tanto faz');
})



app.use(router);

app.get('/', (res, req) => {
  req.send('ok');
});









app.listen(port, (req, res) => {
  console.log('Running');

});



