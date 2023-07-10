import { DSComponentProps } from 'src/types/component';

/**
 * @deprecated
 */
export interface TextareaType extends DSComponentProps {
  id: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  cols?: number;
  autoResize?: boolean;
}
