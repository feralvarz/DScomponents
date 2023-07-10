import { ButtonHTMLAttributes } from 'react';

export type ExampleVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

export type ButtonProps = {
  variant: ExampleVariant;
  loading?: boolean;
  small?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
