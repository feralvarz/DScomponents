export type LabelProps = {
  text: string;
  children?: React.ReactNode;
  className?: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
} & React.ComponentPropsWithRef<'label'>;
