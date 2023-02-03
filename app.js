const express = require('express');
const app = express()
const router = require('./routes/routes');
const port = 5555;
const generateCatalog = require('./services/generate-services');
const catalog = require('./data/data');




app.use(express.json());
app.use(router);
// app.use('/' , generateCatalog)

app.get('/', generateCatalog, (req, res,) => {
  res.send('tanto faz');
})

app.post('/', (req, res) => {
  const { catalogName, catalogInit, catalogMid, CatalogLow } = req.body
  const catalogValue = {
    catalogName,
    catalogInit,
    catalogMid,
    CatalogLow
  }

  return catalog.push(req.json(catalogValue))
next();
} , (req,res,next) => {
  console.log(req.body)
  next('route')
})


app.listen(port, (req, res) => {
  console.log('Running');
})



