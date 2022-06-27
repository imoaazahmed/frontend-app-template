import { useAppSelector } from '@redux/hooks';

export const useFeatureFlags = () => {
  const featureFlags = useAppSelector((state) => state.featureFlags);
  return featureFlags;
};
