import {spacing} from '@design-system/tokens/spacing';
import {normalize} from '@design-system/tokens/breakpoints';

export function useSpacing() {
  return {
    ...spacing,
    normalize: (size: number) => normalize(size),
  };
}
