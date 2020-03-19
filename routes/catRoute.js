'use strict';
// catRoute

const express = require('express');
const router = express.Router();
const catController = require("../controllers/catController");

const bodyParser = require('body-parser')
const multer = require('multer');
const upload = multer({dest:'uploads/'});

router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

/*File upload*/
router.post('/upload', upload.single('file'), (req, res) => {
  console.log("Uploaded");
  try {
    res.send(req.file);
  }catch(err) {
    res.send(400);
  }
});

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