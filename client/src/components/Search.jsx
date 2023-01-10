import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    console.log(query);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <button type="submit" onClick={handleClick}>Search</button>
    </div>
  );
};

export default Search;
