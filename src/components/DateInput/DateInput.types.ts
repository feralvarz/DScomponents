export type DateInputProps = {
  id: string;
  required?: boolean;
  error?: string;
  label?: string;
  className?: string;
  locale?: 'es' | 'en';
  disabled?: boolean;
  dateFormat?: 'mm/dd/yy' | 'dd/mm/yy';
};
