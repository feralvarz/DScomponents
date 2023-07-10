import { ButtonHTMLAttributes } from 'react';

export type BadgeVariant =
  | 'green'
  | 'orange'
  | 'red'
  | 'cyan'
  | 'yellow'
  | 'amber'
  | 'purple'
  | 'transparent';

export type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant: BadgeVariant;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
