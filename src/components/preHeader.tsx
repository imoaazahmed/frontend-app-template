import React, { useState } from 'react';

export default function PreHeader(): JSX.Element | null {
  const [visible, setVisible] = useState(false);

  // Helpers
  const hidePreHeader = () => {
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <div className='bg-green-500 text-white p-4'>
      Pre-header .... <button onClick={hidePreHeader}>Close</button>
    </div>
  );
}
