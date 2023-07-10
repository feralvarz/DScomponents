import ctl from '@netlify/classnames-template-literals';
import { InputProps } from './Input.types';

export const getClassName = (props: InputProps) =>
  ctl(`
  ds-input-base
  truncate
  ${props?.small ? 'text-xs' : 'text-base'}
  ${props?.readOnly ? 'border-transparent !px-0' : 'border-ds-placeholder'}
  ${props?.className}
  `);
