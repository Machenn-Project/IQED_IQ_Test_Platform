
import React from 'react';
import { Box } from '@mui/material';


const Logo = ({Icon , CusWidth}) => (
  <Box sx={{ width:CusWidth || '100px', height: 'auto' }}>
    <img src={Icon} alt="Icon" style={{ width: '100%', height: 'auto' }} />
  </Box>
);

export default Logo;