const express = require('express');
const { create, read, readForId, update, destroy } = require('../controller/controllerModel');
const router = express.Router();
const generatePath = require('../services/generatePath');

router.use(express.json());







const createInstanceUrl = generatePath("create");
const menuInstanceUrl = generatePath("menu");
const userIntanceUrl = generatePath("user");

router.all(createInstanceUrl, create);
// create catalog . 

router.all(menuInstanceUrl, read);
// catalog in document. 

router.all(createInstanceUrl || menuInstanceUrl, destroy)
router.all(createInstanceUrl || menuInstanceUrl, update)
// delete and update based on id.


router.all('/menu/:id', readForId) // id of each catalog . 













module.exports = router