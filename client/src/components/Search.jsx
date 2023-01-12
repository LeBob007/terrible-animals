import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TextField from '@mui/material/TextField';

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
    <div>
      <TextField
        id="search-bar"
        className="text"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        label="Search for animals"
        color="success"
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={{ width: '50vw' }}
      />
      <IconButton type="submit" aria-label="search" onClick={handleClick}>
        <SearchRoundedIcon style={{ fill: 'green' }} />
      </IconButton>
    </div>
  );
};

export default Search;
