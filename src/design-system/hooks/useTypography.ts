import {typography} from '@design-system/tokens/typography';
import {normalize} from '@design-system/tokens/breakpoints';

export function useTypography() {
  return {
    ...typography,
    normalize: (size: number) => normalize(size),
  };
}
