import React, { useState } from 'react';
import axios from 'axios';

import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const sendQuestion = () => {
    const data = {
      service_id: process.env.SERVICE_ID,
      template_id: process.env.TEMPLATE_ID,
      user_id: process.env.PUBLIC_KEY,
      template_params: {
        from_name: name,
        from_email: email,
        from_phone: phone,
        message,
      },
    };
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setOpen(true);
    axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
      .catch((err) => console.log(err));
  };

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
              onChange={(e) => setName(e.target.value)}
              value={name}
              color="success"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="email"
              label="Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              color="success"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="phone"
              label="Phone"
              autoComplete="off"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              color="success"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="message"
              label="Message"
              autoComplete="off"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              color="success"
              fullWidth
              variant="standard"
              multiline
              minRows="5"
            />
            <Button fullWidth color="success" variant="contained" onClick={sendQuestion}>Send</Button>
            <Collapse in={open}>
              <Alert onClose={() => setOpen(false)}>Message sent!</Alert>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
