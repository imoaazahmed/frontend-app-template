import { useMemo, useState } from 'react';

export const useIsLoggedIn = (): boolean => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const accessToken = localStorage.getItem('access-token');

  useMemo(() => {
    if (accessToken) return setIsLoggedIn(true);
    return setIsLoggedIn(false);
  }, [accessToken]);

  return isLoggedIn;
};
