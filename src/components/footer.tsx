import React from 'react';
import { useIsMobile } from '@hooks/use-is-mobile';

export default function Footer(): JSX.Element {
  const isMobile = useIsMobile();

  // Mobile
  if (isMobile) {
    return <footer className='fixed bottom-0 w-full'>Mobile Footer</footer>;
  }

  // Desktop
  return <footer>Footer</footer>;
}
