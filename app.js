'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.get('/cat/:id?', (req, res) => {
  console.log("cat id param: ", req.params.id);
  res.send('From this endpoint you can requested cat whose id is: ', + req.params.id)
});

app.get('/cat', (req, res) => {
  res.send('From this endpoint you can GET cats.')
});

app.post('/cat', (req, res) => {
  res.send('From this endpoint you can ADD cats.')
});

app.put('/cat', (req, res) => {
  res.send('From this endpoint you can EDIT cats.')
});

app.delete('/cat', (req, res) => {
  res.send('From this endpoint you can DELETE cats.')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
