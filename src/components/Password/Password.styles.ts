import ctl from '@netlify/classnames-template-literals';
import { PasswordProps } from './Password.types';

export const getClassName = (props: PasswordProps) =>
  ctl(`
  ${props?.className}
`);

export const getRevealIcon = (reveal: boolean) =>
  ctl(`
  text-ds-placeholder

  ${reveal ? 'ri-eye-line' : 'ri-eye-off-line'}
`);
