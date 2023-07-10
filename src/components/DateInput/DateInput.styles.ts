import ctl from '@netlify/classnames-template-literals';
import { DateInputProps } from './DateInput.types';

export const getClassName = (props: DateInputProps) =>
  ctl(`
  ${props?.className}
`);

export const iconClass = ctl(`
  ri-calendar-2-line
  text-secondary-900
  text-[1.5rem]
`);
