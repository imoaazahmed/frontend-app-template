import type { ComponentMultiStyleConfig } from '@chakra-ui/react';

const Modal: ComponentMultiStyleConfig = {
  parts: ['body', 'dialog', 'footer', 'header', 'overlay', 'closeButton', 'dialogContainer'],
  // style object for base or default style
  baseStyle: {
    dialog: {
      borderRadius: 'md',
      boxShadow: 'none',
    },
    header: {
      px: 'xl',
      pt: 'xl',
      pb: 'sm',
      color: 'brand.500',
      fontSize: '2xl',
    },
    body: {
      px: 'xl',
      py: 'sm',
    },
    footer: {
      px: 'xl',
      pb: 'xl',
      pt: 'sm',
    },
    overlay: {
      bg: 'rgba(0,0,0,0.30)',
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: '2xl',
    isCentered: true,
  },
};

export default Modal;
