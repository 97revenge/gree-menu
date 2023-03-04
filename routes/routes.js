const express = require("express");
const {
  create,
  read,
  readForId,
  update,
  destroy,
} = require("../controller/controllerModel");
const router = express.Router();
const generatePath = require("../services/generatePath");

router.use(express.json());

const createInstanceUrl = generatePath("create");
const menuInstanceUrl = generatePath("menu");
const userIntanceUrl = generatePath("user"); // 2.0.0

router.post(createInstanceUrl, create);
// create catalog .
router.get(menuInstanceUrl, read);
// catalog in document.
router.get("/menu/:id", readForId);
// id of each catalog .
router.put("/menu/:id", update);
router.delete("/menu/:id", destroy);
// delete and update based on id.
// router.all('/menu/:id' , update)

module.exports = router;
