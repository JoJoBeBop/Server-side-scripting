'use strict';
// catRoute

const express = require('express');
const router = express.Router();
const catController = require("../controllers/catController");

router.get("/", catController.cat_list_get);

router.get("/:id", catController.cat_get);

router.post('/', (req, res) => {
  res.send('From this endpoint you can ADD cats.')
});

router.put('/', (req, res) => {
  res.send('From this endpoint you can EDIT cats.')
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can DELETE cats.')
});

module.exports = router;