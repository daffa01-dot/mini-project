import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import Card from '@mui/material/Card';
import { Box, Typography, Button } from '@mui/material';

const TemanAsuhApp: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <Card sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <PetsIcon />
          <Typography variant="h5">TemanAsuh</Typography>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Halaman sedang dikembangkan.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button variant="contained">Mulai</Button>
        </Box>
      </Card>
    </div>
  );
};

export default TemanAsuhApp;
