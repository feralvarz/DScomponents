import { DSComponentProps } from 'src/types/component';
import { DropdownProps } from 'primereact/dropdown';

export interface DropdownType extends DSComponentProps, DropdownProps {
  label?: string;
}
