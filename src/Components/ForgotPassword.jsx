import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';

function ForgotPassword({ open, handleClose }) {
  return (
    <Dialog
    
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          handleClose();
        },
        sx: {
            padding: '20px', // Add padding here
          },
      }}
    >
      <DialogTitle  sx={{fontSize:'24px',fontWeight:'bold'}}>Reset password</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2}}
      >
        <DialogContentText sx={{fontSize:'14px'}}>
          Enter your account&apos;s email address, and we&apos;ll send you a link to
          reset your password.
        </DialogContentText>
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Email address"
          placeholder="Email address"
          type="email"
          fullWidth
          sx={{height: '40px'}}
        />
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose} sx={{color:'#02216F'}}>Cancel</Button>
        <Button variant="contained" type="submit" sx={{
            fontWeight: 'bold',
            backgroundColor: '#1A49BA',
            overflow: 'hidden',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: 'Black',
                transition: 'transform 0.3s ease-in-out',
                transform: 'translateY(-5px)', 
            },
            boxShadow: '2px 3px #FFDA55'

          }}>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;