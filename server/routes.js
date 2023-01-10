const router = require('express').Router();
const Animal = require('./db');

router.get('/animals', (req, res) => {
  Animal.find().then((data) => {
    res.status(200).send(data);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

module.exports = router;
