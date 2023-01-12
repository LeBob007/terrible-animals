import React from 'react';

import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Contact = () => {
  return (
    <div className="center-container">
      <div style={{ width: '50vw' }}>
        <h1>Contact Us</h1>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Info</h3>
            <div style={{ fontSize: '20px' }}>
              <Person2RoundedIcon />
              Name
            </div>
            <p style={{ fontSize: '18px' }}>TOTALLY REAL PERSON</p>
            <div style={{ fontSize: '20px' }}>
              <EmailRoundedIcon />
              Email
            </div>
            <p style={{ fontSize: '18px' }}>totallyrealemail@gmail.com</p>
            <div style={{ fontSize: '20px' }}>
              <LocalPhoneRoundedIcon />
              Phone
            </div>
            <p style={{ fontSize: '18px' }}>+1 (123) 456-7890</p>
          </div>
          <div className="contact-form">
            <h3>Contact Form</h3>
            <TextField
              margin="dense"
              id="name"
              label="Name"
              autoComplete="off"
              color="success"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="email"
              label="Email"
              autoComplete="off"
              color="success"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="phone"
              label="Phone"
              autoComplete="off"
              color="success"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="message"
              label="Message"
              autoComplete="off"
              color="success"
              fullWidth
              variant="standard"
              multiline
              minRows="5"
            />
            <Button fullWidth color="success" variant="contained">Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
