import React from 'react';
import { Result, Button } from 'antd';
import { useRouter } from 'next/router';

function Buttons(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Button type='primary' onClick={() => router.back()}>
        Go Back
      </Button>
      <Button type='default' onClick={() => router.push('/')}>
        Back Home
      </Button>
    </>
  );
}

export default function Custom500(): JSX.Element {
  return (
    <Result
      status='500'
      title='500'
      subTitle='Sorry, something went wrong.'
      extra={<Buttons />}
    />
  );
}
