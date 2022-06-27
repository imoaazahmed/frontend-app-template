import type { ComponentMultiStyleConfig } from '@chakra-ui/react';

const Switch: ComponentMultiStyleConfig = {
  parts: ['track', 'container', 'thumb'],
  // style object for base or default style
  baseStyle: {
    container: {
      mb: '0px',
    },
    track: {
      _focus: {
        boxShadow: '0px 0px 0px 3px var(--chakra-colors-brand-100)',
      },
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: 'lg',
    colorScheme: 'brand',
  },
};

export default Switch;
