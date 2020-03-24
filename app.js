'use strict';
const express = require('express');
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const passport = require('./utils/pass');
const cats = require("./routes/catRoute");
const users = require("./routes/userRoute");
const login = require('./routes/authRoute');
const logout = require('./routes/authRoute');

const port = 3000;

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/cat", cats);
app.use("/user", users);
app.use('/auth/login', login);
app.use('/auth/logout', logout);


app.get('/', (req, res) => {
  res.send('Home');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
