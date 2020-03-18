'use strict';
const express = require('express');

const cors = require("cors")
const app = express();
const port = 3000;
const cats = require("./routes/catRoute");


app.use(cors());
app.use("/cat", cats);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
