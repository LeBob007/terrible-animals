import React from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/styles.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Animal = () => {
  const animal = useLocation();
  const properName = animal.state.name.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');

  const [value, setValue] = React.useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
    </div>
  );
};

export default Animal;
