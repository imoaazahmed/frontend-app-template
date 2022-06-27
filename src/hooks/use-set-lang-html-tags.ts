import { useEffect, useState } from 'react';

export const useSetLangHtmlTags = () => {
  const [_document, setDocument] = useState<Document | null>(null);
  const htmlElement = _document?.querySelector('html');
  const rtl = false;

  // Set default value for [lang, dir] attribute in html tag
  const setHTMLTags = () => {
    if (rtl) {
      htmlElement?.setAttribute('lang', 'ar');
      htmlElement?.setAttribute('dir', 'rtl');
    }

    if (!rtl) {
      htmlElement?.setAttribute('lang', 'en');
      htmlElement?.setAttribute('dir', 'ltr');
    }
  };

  // Get document object & set default language
  useEffect(() => {
    setDocument(document);
    setHTMLTags();
  }, [_document]);
};
