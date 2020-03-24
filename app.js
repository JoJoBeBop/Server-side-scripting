'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
const cats = require('./routes/catRoute')
const user = require('./routes/userRoute')
const cors = require("cors")

app.use(cors())

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use('/cat', cats)
app.use('/user', user)

app.get('/', (req, res) => {
  res.send('Home');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));