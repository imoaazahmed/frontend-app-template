import qs, { ParseOptions, StringifyOptions } from 'query-string';
import { useRouter } from 'next/router';

export type TParam = string | number | boolean | (string | number | boolean | null)[] | null;

export const usePageParams = () => {
  const router = useRouter();

  const getPageParams = (options?: ParseOptions) => {
    const params: qs.ParsedQuery<string | number | boolean> = qs.parse(window.location.search, {
      parseNumbers: true,
      parseBooleans: true,
      ...options,
    });

    // Remove undefined or null values before returning params
    Object.keys(params).forEach((key) => {
      if (params[key] === null || params[key] === undefined || params[key] === '') {
        delete params[key];
      }
    });

    return params;
  };

  const setPageParams = (params: Record<string, any>, options?: StringifyOptions) => {
    const stringified = qs.stringify(params, { skipEmptyString: true, ...options });
    router.replace({ search: stringified });
  };

  return { getPageParams, setPageParams };
};
