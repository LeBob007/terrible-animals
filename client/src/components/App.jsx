import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Search from './Search';
import AddAnimal from './AddAnimal';

const App = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get('/animals').then((data) => {
      setAnimals(data.data);
      console.log(animals);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <Search />
      {animals.length === 0
        ? <AddAnimal />
        : animals.map((animal) => <Card key={animal._id} />)}
    </div>
  );
};

export default App;
