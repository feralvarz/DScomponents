export type TextAreaProps = {
  label?: string;
  readOnly?: boolean;
  hint?: string;
  error?: string;
} & React.ComponentPropsWithRef<'textarea'>;
