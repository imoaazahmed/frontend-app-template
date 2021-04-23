import React from 'react';
import { useIsMobile } from '@hooks/use-is-mobile';

export default function Header() {
  const isMobile = useIsMobile();

  // Mobile
  if (isMobile) {
    return <header>Mobile Header</header>;
  }

  // Desktop
  return <header>Header</header>;
}
