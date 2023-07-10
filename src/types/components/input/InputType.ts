import { InputTextProps } from 'primereact/inputtext';
import { DSComponentProps } from 'src/types';

/**
 * @deprecated
 */
export interface InputType extends InputTextProps, DSComponentProps {
  id: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  valid?: boolean;
  className?: string;
  errorMessage?: string;
}
