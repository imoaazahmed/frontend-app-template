import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from './styles';

// Component style overrides
import Button from './components/button';
import Table from './components/table';
import Modal from './components/modal';
import Input from './components/input';
import Switch from './components/switch';
import Form from './components/form';
import Popover from './components/popover';

const overrides = {
  ...styles,
  components: {
    Button,
    Table,
    Modal,
    Input,
    Switch,
    Form,
    Popover,
  },
};

export default extendTheme(overrides);
