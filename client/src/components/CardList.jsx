import React from 'react';
import ImageList from '@mui/material/ImageList';

import Card from './Card';

const CardList = ({ animals }) => {
  return (
    <div style={{ display: 'flex' }}>
      <ImageList sx={{ width: '65vw', height: '80vh' }}>
        {animals.map((animal) => (
          <Card animal={animal} />
        ))}
      </ImageList>
    </div>
  );
};

export default CardList;
