const express = require('express');
const app = express()
const router = require('./routes/routes');
const port = 5555; 
const generateCatalog = require('./services/generate-services');





app.use(router)
// app.use('/' , generateCatalog)

app.get('/' ,    (res,req) => {
  req.send('ok')
  next();
  
} , (req,res,next) => {
  req.console.log(generateCatalog)
  next('route';)
} )




app.listen(port , (req,res) => {
  console.log('Running')
})



