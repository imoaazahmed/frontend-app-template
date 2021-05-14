/*
 * ----------------------
 * DON'T MAKE ANY CHANGES
 * ----------------------
 */

import React from 'react';
import { Main } from '@elements';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;
  return <Main>{children}</Main>;
}
