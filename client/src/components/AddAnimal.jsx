import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
      getAnimals();
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClose();
      axios.post('/animals', { animal }).then(() => {
        getAnimals();
      }).catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} color="success">Add a New Animal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="new-animal-modal"
        aria-describedby="add-a-new-animal"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a New Animal!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input onChange={handleChange} onKeyPress={handleKeyPress} />
            <button type="submit" onClick={handleClick}>Add</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default AddAnimal;
