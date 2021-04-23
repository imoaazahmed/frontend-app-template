import isMobile from "ismobilejs";

export function useIsMobile() {
  if (typeof window === "undefined") return false;
  return isMobile(window.navigator).phone;
}
