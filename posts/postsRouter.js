const express = require('express');
const db = require('../data/db.js');
const router = express.Router();

router.get('/', (req, res) => {
  db.find()
    .then(posts => res.status(200).json(posts))
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: 'The posts information could not be retrieved' });
    });
  res.send('working');
});

module.exports = router;
