import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AddAnimal = ({ getAnimals }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [animal, setAnimal] = useState('');

  const handleChange = (e) => {
    setAnimal(e.target.value);
  };

  const handleClick = () => {
    handleClose();
    axios.post('/animals', { animal }).then(() => {
      setOpen(false);
      getAnimals();
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <Button onClick={handleOpen} color="success">Add a New Animal</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: '#1b5e20' }}>Add An Animal!</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: '#1b5e20' }}>
            Animal name here:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="animal"
            label="Animal"
            autoComplete="off"
            onChange={handleChange}
            color="success"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="success">Cancel</Button>
          <Button onClick={handleClick} color="success">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddAnimal;
