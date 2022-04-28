const express = require('express');
const { User } = require('../models');
const router = express.Router();

const { addPage } = require('../views');

router.get('/', (req, res, next) => {
  res.send('Hello Wiki');
});

router.post('/', async (req, res, next) => {
  try {
    res.send('got to POST /wiki');
  } catch (err) {
    console.log(err);
  }
});

router.get('/add', (req, res) => {
  res.send(addPage());
});

module.exports = router;
