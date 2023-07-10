import ctl from '@netlify/classnames-template-literals';
import { ButtonProps, ExampleVariant } from './Button.types';
import { twMerge } from 'tailwind-merge';

const getVariant = (variant: ExampleVariant) => {
  const variants = {
    primary: ctl(`
      bg-primary-900
      text-white
      border
      border-primary-900
    `),
    secondary: ctl(`
      bg-white
      text-primary-900
      border
      border-primary-900
    `),
    danger: ctl(`
      bg-status-error
      text-white
      border
      border-status-error
    `),
    ghost: ctl(`
      bg-transparent
      text-ds-placeholder
    `),
  };

  return variants[variant] || variants.secondary;
};

export const buttonStyles = (props: ButtonProps) =>
  ctl(`
  ${props?.small ? 'button-small' : 'button-base'}
  ${getVariant(props?.variant)}
  ${props?.disabled && 'disabled'}
`);

export const getClassName = (props: ButtonProps) => twMerge(buttonStyles(props), props?.className);
