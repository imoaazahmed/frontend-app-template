import React, { useEffect, useState } from 'react';
import i18n from 'i18next';
import { Languages } from '@lib/i18n';
import { useCurrentLang } from '@hooks/use-current-lang';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';

export function SelectLanguage(): JSX.Element {
  const [_document, setDocument] = useState<Document | null>(null);
  const htmlElement = _document?.querySelector('html');
  const currentLang = useCurrentLang();
  const { en_US, ar_EG } = Languages;
  const router = useRouter();

  // Set default value for [lang, dir] attribute in html tag
  const setHTMLTags = (key: 'ar' | 'en') => {
    if (key === 'ar') {
      htmlElement?.setAttribute('lang', 'ar');
      htmlElement?.setAttribute('dir', 'rtl');
    }

    if (key === 'en') {
      htmlElement?.setAttribute('lang', 'en');
      htmlElement?.setAttribute('dir', 'ltr');
    }
  };

  // Get document object & set default language
  useEffect(() => {
    setDocument(document);

    if (currentLang === ar_EG) setHTMLTags('ar');
    if (currentLang === en_US) setHTMLTags('en');
  }, [_document]);

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;

    if (value === ar_EG) {
      i18n.changeLanguage(ar_EG).then(() => setHTMLTags('ar'));
    }

    if (value === en_US) {
      i18n.changeLanguage(en_US).then(() => setHTMLTags('en'));
    }

    router.reload();
  };

  return (
    <Select size='small' defaultValue={currentLang} sx={{ width: '100px' }} onChange={handleChange}>
      <MenuItem value={en_US}>English</MenuItem>
      <MenuItem value={ar_EG}>عربي</MenuItem>
    </Select>
  );
}
