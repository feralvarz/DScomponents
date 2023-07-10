import ctl from '@netlify/classnames-template-literals';
import { RadioProps } from './Radio.types';

export const radioStyle = ctl(`
w-4
h-4
text-primary-900
accent-ds-neutral
bg-ds-base
border-gray-300
`);

export const getClassName = (props: RadioProps) =>
  ctl(`
  ${radioStyle}
  ${props?.disabled && 'disabled'}
  ${props?.className}
  `);

export const radioWrapper = ctl(`
  flex
  gap-2
  items-center
`);
