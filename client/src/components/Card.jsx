import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Card = ({ animal }) => {
  console.log(animal);
  return (
    <ImageListItem key={animal.photo}>
      <img
        src={`${animal.photo}?w=248&fit=crop&auto=format`}
        srcSet={`${animal.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={animal.name}
        loading="lazy"
      />
      <ImageListItemBar
        title={animal.name}
        position="below"
        sx={{ padding: 0 }}
      />
    </ImageListItem>
  );
};

export default Card;
