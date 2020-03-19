'use strict';
const express = require('express');
const cors = require("cors")
const app = express();
const passport = require('./utils/pass');
const cats = require("./routes/catRoute");
const users = require("./routes/userRoute");

const port = 3000;

const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/form');
  }
};




app.use(cors());
app.use("/cat", cats);
app.use("/user", users);
app.use(passport.initialize());
app.use(passport.session());

// modify app.post('/login',...
app.post('/login',
  passport.authenticate('local', {failureRedirect: '/form'}),
  (req, res) => {
    console.log('success');
    res.redirect('/secret');
  });

// modify app.get('/secret',...
app.get('/secret', loggedIn, (req, res) => {
  res.render('secret');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
