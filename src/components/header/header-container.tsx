import React from 'react';
import { Header, HeaderProps } from '@elements';

export function HeaderContainer({ children }: HeaderProps): JSX.Element {
  return <Header className='flex justify-between py-4 px-8'>{children}</Header>;
}
