import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../assets/styles.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import TerribleFacts from '../components/Facts/TerribleFacts';
import FunFacts from '../components/Facts/FunFacts';

const Animal = () => {
  const animal = useLocation();
  const properName = animal.state.name.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');

  const [value, setValue] = useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [render, setRender] = useState(false);

  const addNewFact = (newFact) => {
    const fact = newFact;
    fact.name = animal.state.name;
    axios.patch('/animals', fact).then(() => {
      axios.get('/animal', { params: { name: animal.state.name } }).then((data) => {
        // eslint-disable-next-line prefer-destructuring
        animal.state = data.data[0];
        setRender(!render);
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
  };

  const deleteFact = (fact) => {
    axios.delete(`/animals/${fact._id}`, { data: { name: animal.state.name, type: fact.type } }).then(() => {
      axios.get('/animal', { params: { name: animal.state.name } }).then((data) => {
        // eslint-disable-next-line prefer-destructuring
        animal.state = data.data[0];
        setRender(!render);
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <div className="center-container">
        <img
          style={{ width: '25vw', height: '25vw' }}
          src={`${animal.state.photo}?fit=crop&auto=format`}
          alt={animal.state.name}
        />
      </div>
      <h1 className="center-container">
        {properName}
      </h1>
      <Box sx={{ width: '100%' }}>
        <Tabs
          TabIndicatorProps={{
            sx: {
              backgroundColor: 'green',
            },
          }}
          value={value}
          onChange={handleChange}
          centered
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Disturbing Facts" style={{ minWidth: '25%', color: 'green' }} />
          <Tab value="two" label="Fun Facts" style={{ minWidth: '25%', color: 'green' }} />
        </Tabs>
      </Box>
      <div className="center-container">
        {value === 'one'
          ? (
            <TerribleFacts
              facts={animal.state.terribleFacts}
              add={addNewFact}
              remove={deleteFact}
            />
          )
          : (
            <FunFacts
              facts={animal.state.funFacts}
              add={addNewFact}
              remove={deleteFact}
            />
          )}
      </div>
    </div>
  );
};

export default Animal;
