import { PasswordProps } from 'primereact/password';
import { DSComponentProps } from 'src/types/component';

/**
 * @deprecated
 */
export interface PasswordType extends PasswordProps, DSComponentProps {
  id: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  valid?: boolean;
  showFeedBack?: boolean;
  toggleMask?: boolean;
  placeholder?: string;
  className?: string;
}
