import ctl from '@netlify/classnames-template-literals';
import { LabelProps } from './Label.types';

export const getClassName = (props: LabelProps) =>
  ctl(`
  label-base
  ${props?.disabled && 'pointer-events-none select-none opacity-60'}
  ${props?.className}
  ${props?.error && 'text-status-error'}
`);
