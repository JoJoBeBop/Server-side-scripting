'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async () => {
  console.log("get cats");
  try {
    const [rows] = await promisePool.query('SELECT * FROM `tables`');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

module.exports = {
  getAllCats,
};

/*const cats = [
  {
    "id": '1',
    "name": 'Frank',
    "age": '6',
    "weight": '5',
    "owner": '1',
    "filename": 'http://placekitten.com/400/300',
  },
  {
    "id": '2',
    "name": 'James',
    "age": '4',
    "weight": '11',
    "owner": '2',
    "filename": 'http://placekitten.com/400/302',
  },
]


module.exports = {
  cats,
};*/
