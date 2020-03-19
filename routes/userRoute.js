'use strict';
// catRoute

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const multer = require('multer');
const upload = multer({dest:'uploads/'});

const userController = require("../controllers/userController");

router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

/*Get all*/
router.get("/", userController.user_list_get);

/*Get by id*/
router.get("/:id", userController.user_get);

/*New user*/
/*router.post('/', (req, res) => {
  console.log("D");
  console.log(req.body)

  const body = req.body

/!*  if (body.content === undefined || body.content === "") {
    return res.status(400).json({ error: 'content missing' })
  }*!/

/!*  const user = new User({
    name: body.name,
    email: body.email,
    password: body.password
  })*!/


  res.json(req.body)
});*/


router.post('/', upload.array(), function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})

/*Edit user*/
router.put('/', (req, res) => {
  res.send('From this endpoint you can EDIT user.')
});

/*Delete user*/
router.delete('/', (req, res) => {
  res.send('From this endpoint you can DELETE user.')
});

module.exports = router;