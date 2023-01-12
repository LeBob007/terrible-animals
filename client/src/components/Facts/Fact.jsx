import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import IconButton from '@mui/material/IconButton';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const Fact = ({ type, fact, remove }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [flag, setFlag] = useState(false);
  const handleFavorite = () => {
    setFlag(true);
  };

  const deleteFact = () => {
    const factToRemove = { _id: fact._id, type };
    remove(factToRemove);
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
        <IconButton aria-label="favorite" onClick={handleFavorite}>
          <FavoriteRoundedIcon color={flag ? 'secondary' : 'success'} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareRoundedIcon color="success" />
        </IconButton>
        <IconButton aria-label="report" onClick={handleOpen}>
          <FlagRoundedIcon color="success" />
        </IconButton>
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
          <Button onClick={handleClose} color="success">No</Button>
          <Button onClick={deleteFact} color="success">Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Fact;
