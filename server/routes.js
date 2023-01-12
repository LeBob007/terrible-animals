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
  console.log(req.body);
  const fact = { fact: req.body.fact, author: req.body.author };
  Animal.find({ name: req.body.name }).then((data) => {
    if (req.body.type === 'Terrible') {
      console.log('adding terrible fact');
      data[0].terribleFacts.push(fact);
      data[0].save().then(() => {
        res.status(204).send();
      }).catch((err) => {
        res.status(500).send(err);
      });
    } else if (req.body.type === 'Fun') {
      console.log('adding fun fact');
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

router.delete('/animals/:_id', (req, res) => {
  if (req.body.type === 'Terrible') {
    Animal.updateOne({ name: req.body.name }, { $pull: { terribleFacts: { _id: req.params._id } } })
      .then(() => {
        res.status(204).send();
      }).catch((err) => {
        res.status(500).send(err);
      });
  } else if (req.body.type === 'Fun') {
    Animal.updateOne({ name: req.body.name }, { $pull: { funFacts: { _id: req.params._id } } })
      .then(() => {
        res.status(204).send();
      }).catch((err) => {
        res.status(500).send(err);
      });
  }
});

module.exports = router;
