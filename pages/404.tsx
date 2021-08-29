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

export default function Custom404(): JSX.Element {
  return <Result status='404' title='404' subTitle='Sorry, the page you visited does not exist.' extra={<Buttons />} />;
}
