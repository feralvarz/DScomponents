import { CalendarProps } from 'primereact/calendar';
import { DSComponentProps } from 'src/types';

/**
 * @deprecated
 */
export interface CalendarType extends CalendarProps, DSComponentProps {
  id: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  className?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  invalid?: boolean;
  dateFormat?: string;
  value?: Date;
  onChange?: (e: any) => void;
  errorMessage?: string;
}
