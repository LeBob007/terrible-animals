import React, { useState } from 'react';

const Search = ({ search }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    search(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search(query);
    }
  };

  return (
    <div style={{ width: '65vw' }}>
      <input onChange={handleChange} onKeyPress={handleKeyPress} style={{ width: '55vw' }} />
      <button type="submit" onClick={handleClick} style={{ width: '9vw' }}>Search</button>
    </div>
  );
};

export default Search;
