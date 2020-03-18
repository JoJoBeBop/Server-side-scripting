'use strict';
// catRoute

const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.user_list_get);

router.get("/:id", userController.user_get);

router.post('/', (req, res) => {
  res.send('From this endpoint you can ADD user.')
});

router.put('/', (req, res) => {
  res.send('From this endpoint you can EDIT user.')
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can DELETE user.')
});

module.exports = router;