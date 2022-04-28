const express = require('express');
const router = express.Router();

const { addPage } = require('../views');

router.get('/add', (req, res) => {
  res.send(addPage());
});

module.exports = router;
