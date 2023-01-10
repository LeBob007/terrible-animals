const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/animals');

const animalSchema = new mongoose.Schema({
  name: String,
  photo: String,
  terribleFacts: [
    {
      fact: String,
      author: String,
      likes: Number,
    },
  ],
  funFacts: [
    {
      fact: String,
      author: String,
      likes: Number,
    },
  ],
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
