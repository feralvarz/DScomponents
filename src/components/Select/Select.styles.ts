import ctl from '@netlify/classnames-template-literals';
import { twMerge } from 'tailwind-merge';

const baseStyles = ctl(`
  ds-select
  focus-visible:outline-ds-neutral/50
  min-w-[16rem]
  w-full
  text-ds-copy
  border-ds-placeholder
`);
export const getClassName = (className?: string) => twMerge(baseStyles, className);
