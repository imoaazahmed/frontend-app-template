import type { ComponentMultiStyleConfig } from '@chakra-ui/react';

const Input: ComponentMultiStyleConfig = {
  parts: ['element', 'field', 'addon'],
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    flushed: {
      field: {
        _focus: {
          borderColor: 'brand.500',
          boxShadow: '0px 1px 0px 0px var(--chakra-colors-brand-500)',
        },
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: 'flushed',
  },
};

export default Input;
