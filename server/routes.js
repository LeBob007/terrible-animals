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

router.get('/animal', (req, res) => {
  Animal.find(req.query).then((data) => {
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

router.patch('/animals', (req, res) => {
  const fact = { fact: req.body.fact, author: req.body.author };
  Animal.find({ name: req.body.name }).then((data) => {
    if (req.body.type === 'terrible') {
      data[0].terribleFacts.push(fact);
      data[0].save().then(() => {
        res.status(204).send();
      }).catch((err) => {
        res.status(500).send(err);
      });
    } else {
      data[0].funFacts.push(fact);
      data[0].save().then(() => {
        res.status(204).send();
      }).catch((err) => {
        res.status(500).send(err);
      });
    }
  }).catch((err) => {
    res.status(500).send(err);
  });
});

module.exports = router;
