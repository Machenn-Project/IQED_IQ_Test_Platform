// IQEDLogo.js
import React from 'react';
import { Box } from '@mui/material';
import { IQEDLogo } from '../assets';

const Logo = () => (
  <Box sx={{ width: '100px', height: 'auto' }}>
    <img src={IQEDLogo} alt="IQED Logo" style={{ width: '100%', height: 'auto' }} />
  </Box>
);

export default Logo;