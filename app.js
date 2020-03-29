'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models/db');
const cat = require("./models/catModel")
const user = require("./models/userModel")

const port = 3000;


app.get("/", async (req, res) => {
  console.log("Hello");
  res.send( await cat.find().populate("owner"))
});

app.post("/cat", async(req, res) => {
    const myCat = await cat.create({name: "Cat-cat", age: 7, owner: "5e79c7a1eb46931db0be35b3"});
    /*  const myuser = find;
      myuser.cats.push(myCat._id);
      save()*/
    res.send("Cat created with id: " + myCat._id)
  }
);

app.post("/user", async(req, res) => {
  const myuser = await user.create({name: "Mary", email: "m@met.fi", password: "abc"});
  res.send(`user creates with id: ${myuser._id}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))