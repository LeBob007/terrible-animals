import React, { useState } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const Fact = ({ fact }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteFact = () => {
    setOpen(false);
  };

  return (
    <div className="fact-body">
      <div className="fact-body-fact">
        {fact.fact}
      </div>
      <div className="fact-body-author">
        {fact.author}
      </div>
      <div className="fact-body-buttons">
        <FavoriteRoundedIcon color="success" />
        <ShareRoundedIcon color="success" />
        <FlagRoundedIcon onClick={handleOpen} color="success" />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ color: '#1b5e20' }} id="alert-dialog-title">
          Report this fact?
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: '#1b5e20' }} id="alert-dialog-description">
            Are you sure you want to report this fact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="success">Cancel</Button>
          <Button onClick={deleteFact} color="success">Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Fact;
