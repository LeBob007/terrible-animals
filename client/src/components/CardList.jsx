/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';

import Card from './Card';
import '../assets/styles.css';

const CardList = ({ animals }) => {
  const [column, setColumn] = useState(4);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const columns = window.innerWidth > 2000
        ? 4
        : window.innerWidth > 1500
          ? 3
          : window.innerWidth > 1000
            ? 2
            : 1;
      setColumn(columns);
    });
  });

  return (
    <div>
      <ImageList className="animal-image-list" sx={{ width: '65vw', height: '80vh' }} cols={column}>
        {animals.map((animal) => (
          <Card key={animal._id} animal={animal} />
        ))}
      </ImageList>
    </div>
  );
};

export default CardList;
