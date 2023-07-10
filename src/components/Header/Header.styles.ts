import ctl from '@netlify/classnames-template-literals';
import { twMerge } from 'tailwind-merge';

const baseStyles = ctl(`
  bg-primary-900
  text-base
  rounded-none
  border-primary-900
  flex
  flex-row
  justify-between
  text-white
  px-6
  py-2
`);

export const getClassName = (className = '') => twMerge(baseStyles, className);
