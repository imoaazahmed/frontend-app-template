import type { ComponentSingleStyleConfig } from '@chakra-ui/react';

const Button: ComponentSingleStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    outline: {
      _hover: {
        bgColor: 'white',
      },
      _active: {
        bgColor: 'white',
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    colorScheme: 'gray',
  },
};

export default Button;
