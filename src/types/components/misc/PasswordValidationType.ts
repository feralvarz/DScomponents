import { DSComponentProps } from 'src/types/component';

export interface PasswordValidationItemType {
  id: string;
  text: string;
  regex: string;
  colorTextSuccess?: string;
  colorTextError?: string;
}

export interface PasswordValidationType extends DSComponentProps {
  items: PasswordValidationItemType[];
  value: string;
  callback: (valid: boolean) => void;
}
