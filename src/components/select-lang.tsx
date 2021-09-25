import React, { useState, useEffect } from 'react';
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

  // Get document object
  useEffect(() => {
    setDocument(document);
  }, [_document]);

  // Set default value for [lang, dir] attribute in html tag
  useEffect(() => {
    if (currentLang === ar_EG) setHTMLTags('ar');
    if (currentLang === en_US) setHTMLTags('en');
  }, [_document]);

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

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;

    if (value === ar_EG) {
      i18n.changeLanguage(ar_EG);
    }

    if (value === en_US) {
      i18n.changeLanguage(en_US);
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
