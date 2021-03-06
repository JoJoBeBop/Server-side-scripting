'use strict';
const express = require('express');
const cors = require("cors")
const app = express();
const port = 3000;
const cats = require("./routes/catRoute");
const users = require("./routes/userRoute");


app.use(cors());
app.use("/cat", cats);
app.use("/user", users);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
