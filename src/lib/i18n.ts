import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
import EN_US from '../../public/assets/lang/en_US.json';
import AR_EG from '../../public/assets/lang/ar_EG.json';

export enum Languages {
  en_US = 'en_US',
  ar_EG = 'ar_EG',
}

const resources = {
    en_US: {
        translation: EN_US,
    },
    ar_EG: {
        translation: AR_EG,
    },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: Languages.en_US,
    debug: false,
    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      // order and from where user language should be detected
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage'],

      // keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18next',
      lookupSessionStorage: 'i18next',

      // cache user language on
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
    },
  });

export default i18n;
