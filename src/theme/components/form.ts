import type { ComponentMultiStyleConfig } from '@chakra-ui/react';

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

const Form: ComponentMultiStyleConfig = {
  parts: ['container'],
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    floating: {
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles,
          },
        },
        'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label': {
          ...activeLabelStyles,
        },
        label: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: 'absolute',
          backgroundColor: 'white',
          pointerEvents: 'none',
          fontWeight: 'normal',
          color: 'gray.400',
          mx: 0,
          px: 1,
          my: 2,
          transformOrigin: 'left top',
          ...activeLabelStyles,
        },
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {},
};

export default Form;
