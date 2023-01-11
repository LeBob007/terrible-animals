import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './CardList';
import Search from './Search';
import AddAnimal from './AddAnimal';
import '../assets/styles.css';

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  const getAnimals = () => {
    axios.get('/animals').then((data) => {
      setAnimals(data.data);
      setFilteredAnimals(data.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  const search = (query) => {
    const filter = animals.filter((animal) => (
      animal.name.toLowerCase().includes(query.toLowerCase())
    ));
    setFilteredAnimals(filter);
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div>
      <div className="center-container">
        <div style={{ padding: 10 }}>
          <Search search={search} />
        </div>
        <div>
          {filteredAnimals.length > 0 && <CardList animals={filteredAnimals} />}
        </div>
      </div>
      <div className="center-container">
        {filteredAnimals.length === 0 && <AddAnimal getAnimals={getAnimals} />}
      </div>
    </div>
  );
};

export default App;
