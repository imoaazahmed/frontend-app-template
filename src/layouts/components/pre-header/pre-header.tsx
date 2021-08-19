import React, { useState } from 'react';
import { Box } from '@elements';

export function PreHeader(): JSX.Element | null {
  const [visible, setVisible] = useState(false);

  // Helpers
  const hidePreHeader = () => {
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <Box className='bg-green-500 text-white p-4'>
      Pre-header .... <button onClick={hidePreHeader}>Close</button>
    </Box>
  );
}
