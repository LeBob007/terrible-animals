import React from 'react';
import { useParams } from 'react-router-dom';

const Animal = () => {
  const { animal } = useParams();
  return (
    <div>
      {animal}
    </div>
  );
};

export default Animal;
