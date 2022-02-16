import { createTheme } from '@mui/material/styles';
import i18n from 'i18next';
import { Languages } from '@lib/i18n';

// Create a theme instance.
const theme = createTheme({
  direction: i18n.language === Languages.en_US ? 'ltr' : 'rtl',
});

export default theme;
