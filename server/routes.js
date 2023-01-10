require('dotenv').config();
const axios = require('axios');
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
  const params = {
    client_id: process.env.CLIENTID,
    query: req.body.animal,
  };
  axios.get('https://api.unsplash.com/search/photos', { params }).then((data) => {
    const newAnimal = {
      name: req.body.animal,
      photo: data.data.results[0].urls.raw.split('?')[0],
    };
    Animal.create(newAnimal).then(() => {
      res.status(201).send();
    }).catch((err) => {
      res.status(500).send(err);
    });
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;
