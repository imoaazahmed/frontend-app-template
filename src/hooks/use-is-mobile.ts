import isMobile from 'ismobilejs';

export function useIsMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return isMobile(window.navigator).phone;
}
