import { TFunction, useTranslation } from 'react-i18next';

export function useTrans(): TFunction<'translation'> {
  const { t: trans } = useTranslation();
  return trans;
}
