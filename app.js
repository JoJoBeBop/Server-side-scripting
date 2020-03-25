'use strict';
const express = require('express');
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const passport = require('./utils/pass');
const catRoute = require("./routes/catRoute");
const userRoute = require("./routes/userRoute");
const login = require('./routes/authRoute');
const logout = require('./routes/authRoute');

const port = 3000;

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*app.use("/cat", catRoute);
app.use("/user", userRoute);*/
app.use('/auth/login', login);
app.use('/auth/logout', logout);

app.use("/cat", passport.authenticate("jwt", {session: false}), catRoute);
app.use("/user",passport.authenticate("jwt", {session: false}), userRoute);


app.get('/', (req, res) => {
  res.send('Home');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
