import React from 'react';
import { SelectLanguage } from '@components/select-lang';
import { Box } from '@mui/material';

export function HeaderRight(): JSX.Element {
  return (
    <Box sx={{ marginInlineStart: 'auto' }}>
      <SelectLanguage />
    </Box>
  );
}
