import React, { useState } from 'react';

export default function BottomMessage() {
  const [visible, setVisible] = useState(false);

  // Helpers
  const hideBottomMessage = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className='absolute bottom-0 w-full bg-blue-800 text-white p-4'>
      Bottom Message .... <button onClick={hideBottomMessage}>Close</button>
    </div>
  );
}
