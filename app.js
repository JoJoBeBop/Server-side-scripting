'use strict';
const express = require('express');
const cors = require("cors")
const app = express();
const bodyParser = require('body-parser')
const user = require('./routes/userRoute')


const passport = require('./utils/pass');
const cats = require("./routes/catRoute");
const users = require("./routes/userRoute");
const login = require('./routes/authRoute')


const port = 3000;


app.use(cors());
app.use("/cat", cats);
app.use("/user", users);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use('/auth/login', login)


const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/form');
  }
};

/*app.post("/login", (req, res) => {
  console.log(req.body);
})*/

// modify app.post('/login',...
/*app.post('/login',
  passport.authenticate('local', { successRedirect: '/cat', failureRedirect: '/user'}),
  (req, res) => {
    console.log('success');
    res.redirect('/secret');
  });

// modify app.get('/secret',...
app.get('/secret', loggedIn, (req, res) => {
  res.render('secret');
});*/

app.get('/', (req, res) => {
  res.send('Home');
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
