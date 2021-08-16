import React from 'react';
import { Container } from '@elements';
import { Input } from 'antd';

export default function PlayGroundScreen(): JSX.Element {
  return (
    <Container className='p-4'>
      <Input name='' placeholder='Username' />
    </Container>
  );
}
