import { THEMES } from '../shared/constants';

export interface DSComponentProps {
  theme?: (typeof THEMES)[number];
  className?: string;
}
