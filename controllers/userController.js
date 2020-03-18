'use strict';
// catController
const userModel = require("../models/userModel");

const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

/*const cat_get = (req, res) => {
  console.log("cat id param ", req.params);
  const cat = cats.filter(cat => cat.id === req.params.id.pop());
  res.json(cat)
};*/

const user_get = (req, res) => {
  console.log("user id param ", req.params);
  const user = users.filter(user => user.id === req.params.id).pop();
  res.json(user)
};

/*const cat_get = (req, res) => {
  console.log("cat id param: ", req.params.id);
  res.send('From this endpoint you can requested cat whose id is: ' + req.params.id)
};*/

module.exports = {
  user_list_get,
  user_get,
}
