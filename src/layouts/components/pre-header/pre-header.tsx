import React, { useState } from 'react';
import { Box } from '@mui/material';

export function PreHeader(): JSX.Element | null {
  const [visible, setVisible] = useState(false);

  // Helpers
  const hidePreHeader = () => {
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <Box sx={{ bgcolor: 'green', color: 'white', padding: '1rem' }}>
      Pre-header .... <button onClick={hidePreHeader}>Close</button>
    </Box>
  );
}
