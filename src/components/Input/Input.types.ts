export type InputProps = {
  id: string;
  name: string;

  type?: 'text' | 'password' | 'email' | 'number' | 'url' | 'search';
  small?: boolean;
  readOnly?: boolean;
  label?: string;
  error?: string;
  hint?: string;
} & React.ComponentPropsWithRef<'input'>;
