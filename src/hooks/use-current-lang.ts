import i18n from 'i18next';

export function useCurrentLang(): string {
  return i18n.language;
}
