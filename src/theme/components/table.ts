import type { ComponentMultiStyleConfig } from '@chakra-ui/react';

const Table: ComponentMultiStyleConfig = {
  parts: ['caption', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr'],
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    striped: {
      thead: {
        position: 'sticky',
        top: '0',
        bgColor: 'white',
        zIndex: 1,
      },
      th: {
        fontWeight: 'medium',
        fontSize: 'sm',
        textTransform: 'capitalize',
        color: 'black',
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: 'striped',
  },
};

export default Table;
