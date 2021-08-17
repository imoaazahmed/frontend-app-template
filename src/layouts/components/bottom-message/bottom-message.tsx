import React, { useState } from 'react';
import { Box } from '@elements';

export function BottomMessage(): JSX.Element | null {
  const [visible, setVisible] = useState(false);

  // Helpers
  const hideBottomMessage = () => {
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <Box className='absolute bottom-0 w-full bg-blue-800 text-white p-4'>
      Bottom Message .... <button onClick={hideBottomMessage}>Close</button>
    </Box>
  );
}