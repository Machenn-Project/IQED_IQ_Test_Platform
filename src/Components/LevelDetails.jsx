import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const LevelDetails = ({ level }) => {
  return (
    <Box>
      <Typography variant="h4">Level {level.level} Details</Typography>
      <Typography variant="body1">Progress: {level.progress}/{level.total}</Typography>
      {/* Add more detailed information about the level */}
    </Box>
  );
};

export default LevelDetails;
