import React, { useState } from 'react';
import { Box } from '@mui/material';

export function BottomMessage(): JSX.Element | null {
  const [visible, setVisible] = useState(false);

  // Helpers
  const hideBottomMessage = () => {
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <Box sx={{ position: 'absolute', bottom: 0, width: '100%', bgcolor: 'blue', color: 'white', padding: '1rem' }}>
      Bottom Message .... <button onClick={hideBottomMessage}>Close</button>
    </Box>
  );
}
