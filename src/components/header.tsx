import React from 'react';
import { useIsMobile } from '@hooks/useIsMobile';

export default function Header() {
  const isMobile = useIsMobile();

  // Mobile
  if (isMobile) {
    return <header>Mobile Header</header>;
  }

  // Desktop
  return <header>Header</header>;
}
