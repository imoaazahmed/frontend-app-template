import React from 'react';
import i18n from 'i18next';
import { Select } from 'antd';
import { Languages } from '@lib/i18n';
import { SelectValue } from 'antd/lib/select';
import { useCurrentLang } from '@hooks/use-current-lang';
const { Option } = Select;

export function SelectLanguage(): JSX.Element {
  const currentLang = useCurrentLang();
  const { en_US, ar_EG } = Languages;

  const handleChange = (value: SelectValue) => {
    if (value === ar_EG) i18n.changeLanguage(ar_EG);
    if (value === en_US) i18n.changeLanguage(en_US);
  };

  return (
    <Select defaultValue={currentLang} style={{ width: 100 }} onChange={handleChange}>
      <Option value={en_US}>English</Option>
      <Option value={ar_EG}>Arabic</Option>
    </Select>
  );
}
