import createCache, { EmotionCache } from '@emotion/cache';
import { useCurrentLang } from '@hooks/use-current-lang';
import rtlPlugin from 'stylis-plugin-rtl';
import { Languages } from '@lib/i18n';

export default function createEmotionCache(): EmotionCache {
  const currentLang = useCurrentLang();
  const { ar_EG } = Languages;

  // Create LTR cache
  const cacheLTR = createCache({
    key: 'css',
  });

  // Create RTL cache
  const cacheRTL = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
  });

  if (currentLang === ar_EG) return cacheRTL;
  return cacheLTR;
}
