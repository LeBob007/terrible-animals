import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useNavigate } from 'react-router-dom';

const Card = ({ animal }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${animal.name}`);
  };

  const properName = animal.name.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');

  return (
    <ImageListItem key={animal.photo} onClick={handleClick}>
      <img
        src={`${animal.photo}?w=248&fit=crop&auto=format`}
        srcSet={`${animal.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={animal.name}
        loading="lazy"
      />
      <ImageListItemBar
        title={properName}
        position="below"
        sx={{ padding: 0 }}
      />
    </ImageListItem>
  );
};

export default Card;
