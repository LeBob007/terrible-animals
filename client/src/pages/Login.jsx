import React from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import TextField from '@mui/material/TextField';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="center-container">
      <div style={{ width: '30vw', paddingLeft: '3vw' }}>
        <h1>Login</h1>
        <TextField
          id="username"
          className="text"
          label="Username"
          color="success"
          variant="outlined"
          size="small"
          sx={{ width: '25vw' }}
        />
        <TextField
          id="password"
          type="password"
          className="text"
          label="Password"
          color="success"
          variant="outlined"
          size="small"
          sx={{ width: '25vw' }}
        />
        <IconButton type="submit" aria-label="search" onClick={() => navigate('/home')}>
          <ArrowForwardIosRoundedIcon style={{ fill: 'green' }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Contact;
