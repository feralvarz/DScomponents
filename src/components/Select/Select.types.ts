import { DropdownProps } from 'primereact/dropdown';
import { LabelProps } from '../Label/Label.types';
export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  errorText?: string;
  options: SelectOption[];
  label?: string;
} & LabelProps &
  DropdownProps;
