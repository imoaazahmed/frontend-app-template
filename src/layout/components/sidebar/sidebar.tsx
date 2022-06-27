import React from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { SidebarItem } from '@layout/components/sidebar/sidebar-item';
import { sidebarItems } from '@layout/components/sidebar/utils/sidebar-items';

export const Sidebar = () => {
  return (
    <Box>
      <Flex align={'center'} justify='center' h='68px' borderBottom={'2px solid'} borderColor='gray.200'>
        LOGO
      </Flex>

      <Stack spacing={'xs'} p={'md'}>
        {sidebarItems.map((item, index) => (
          <SidebarItem item={item} key={index} />
        ))}
      </Stack>
    </Box>
  );
};
