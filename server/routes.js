const router = require('express').Router();
const Animal = require('./db');

router.get('/animals', (req, res) => {
  Animal.find().then((data) => {
    res.status(200).send(data);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

router.post('/animals', (req, res) => {
  console.log(req.body);
  Animal.create(req.body).then(() => {
    res.status(201).send();
  }).catch((err) => {
    res.status(500).send(err);
  });
});

module.exports = router;
