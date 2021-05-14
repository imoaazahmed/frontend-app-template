import React from 'react';
import {
  Box,
  Container,
  Stack,
  Heading,
  RadioGroup,
  Radio,
  Input,
} from '@elements';

export default function PlayGroundScreen(): JSX.Element {
  return (
    <Box>
      <Container>
        <Stack className='mb-8' inline>
          <Heading as='h1'>Heading</Heading>
          <Heading as='h2'>Heading</Heading>
          <Heading as='h3'>Heading</Heading>
          <Heading as='h4'>Heading</Heading>
          <Heading as='h5'>Heading</Heading>
          <Heading as='h6'>Heading</Heading>
        </Stack>

        <Input name='' placeholder='Username' label='Username' />

        <Box className='mt-4'>
          <RadioGroup label='Radio group'>
            <Radio>Option 1</Radio>
            <Radio>Option 1</Radio>
            <Radio>Option 1</Radio>
          </RadioGroup>
        </Box>
      </Container>
    </Box>
  );
}
