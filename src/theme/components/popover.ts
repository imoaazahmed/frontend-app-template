import type { ComponentMultiStyleConfig } from '@chakra-ui/react';

const Popover: ComponentMultiStyleConfig = {
  parts: ['body', 'footer', 'header', 'content', 'closeButton', 'popper', 'arrow'],
  // style object for base or default style
  baseStyle: {
    content: {
      w: 'fit-content',
      border: '1px solid',
      borderColor: 'gray.200',
      boxShadow: 'sm',
      bgColor: 'white',
      borderRadius: 'base',
      _focus: {
        boxShadow: 'none',
      },
    },
    body: {
      w: '100%',
      p: 'sm',
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {},
};

export default Popover;
