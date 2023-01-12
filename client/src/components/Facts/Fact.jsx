import React, { useState } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const Fact = ({
  type, fact, remove, user,
}) => {
  const [openReport, setOpenReport] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const handleOpenReport = () => setOpenReport(true);
  const handleCloseReport = () => setOpenReport(false);
  const handleOpenShare = () => setOpenShare(true);
  const handleCloseShare = () => setOpenShare(false);

  const [flag, setFlag] = useState(false);
  const handleFavorite = () => {
    setFlag(true);
  };

  const deleteFact = () => {
    const factToRemove = { _id: fact._id, type };
    remove(factToRemove);
    setOpenReport(false);
  };

  const [toName, setToName] = useState('');
  const [toEmail, setToEmail] = useState('');

  const sendEmail = () => {
    const data = {
      service_id: process.env.SERVICE_ID,
      template_id: process.env.TEMPLATE_ID,
      user_id: process.env.PUBLIC_KEY,
      template_params: {
        from_name: user,
        to_name: toName,
        message: fact.fact,
        to_email: toEmail,
        reply_to: process.env.EMAIL,
      },
    };
    setOpenShare(false);
    axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
      .catch((err) => console.log(err));
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
        <IconButton aria-label="share" onClick={handleOpenShare}>
          <ShareRoundedIcon color="success" />
        </IconButton>
        <IconButton aria-label="report" onClick={handleOpenReport}>
          <FlagRoundedIcon color="success" />
        </IconButton>
      </div>
      <Dialog
        open={openReport}
        onClose={handleCloseReport}
        aria-labelledby="report-dialog-title"
        aria-describedby="report-dialog-description"
      >
        <DialogTitle sx={{ color: '#1b5e20' }} id="report-dialog-title">
          Report this fact?
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: '#1b5e20' }} id="report-dialog-description">
            Are you sure you want to report this fact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReport} color="success">No</Button>
          <Button onClick={deleteFact} color="success">Yes</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openShare}
        onClose={handleCloseShare}
        aria-labelledby="share-dialog-title"
        aria-describedby="share-dialog-description"
      >
        <DialogTitle sx={{ color: '#1b5e20' }} id="share-dialog-title">
          Send
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: '#1b5e20' }} id="share-dialog-description">
            Who do you want to share this fact with?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="to-name"
            label="Recipient Name"
            autoComplete="off"
            onChange={(e) => setToName(e.target.value)}
            color="success"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            margin="dense"
            id="to-email"
            label="Recipient Email"
            autoComplete="off"
            onChange={(e) => setToEmail(e.target.value)}
            color="success"
            fullWidth
            variant="standard"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseShare} color="success">Cancel</Button>
          <Button onClick={sendEmail} color="success">Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Fact;
