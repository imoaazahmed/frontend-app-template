import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { Select } from 'antd';
import { Languages } from '@lib/i18n';
import { SelectValue } from 'antd/lib/select';
import { useCurrentLang } from '@hooks/use-current-lang';
const { Option } = Select;

export function SelectLanguage(): JSX.Element {
  const [_document, set_document] = useState<Document | null>(null);
  const htmlElement = _document?.querySelector('html');
  const currentLang = useCurrentLang();
  const { en_US, ar_EG } = Languages;

  // Get document object
  useEffect(() => {
    set_document(document);
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

  const handleChange = (value: SelectValue) => {
    if (value === ar_EG) {
      i18n.changeLanguage(ar_EG);
      setHTMLTags('ar');
    }

    if (value === en_US) {
      i18n.changeLanguage(en_US);
      setHTMLTags('en');
    }
  };

  return (
    <Select defaultValue={currentLang} style={{ width: 100 }} onChange={handleChange}>
      <Option value={en_US}>English</Option>
      <Option value={ar_EG}>Arabic</Option>
    </Select>
  );
}
