/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fact from './Fact';

const FunFacts = ({ facts, add }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newFact, setNewFact] = useState({ type: 'Fun' });
  const handleFactChange = (e) => setNewFact({ ...newFact, fact: e.target.value });
  const handleNameChange = (e) => setNewFact({ ...newFact, author: e.target.value });

  const handleSubmit = () => {
    add(newFact);
    setOpen(false);
  };

  return (
    <div className="center-container">
      {facts.map((fact) => <Fact key={fact._id} fact={fact} />)}
      <div className="add-fact-body">
        <Button variant="contained" onClick={handleOpen} color="success">Add a Fact</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ color: '#1b5e20' }}>Add A Fun Fact!</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ color: '#1b5e20' }}>
              Have something to share? Add it down below!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Fact"
              onChange={handleFactChange}
              color="success"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="name"
              label="Name"
              onChange={handleNameChange}
              color="success"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="success">Cancel</Button>
            <Button onClick={handleSubmit} color="success">Add</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default FunFacts;
