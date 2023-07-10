import ctl from '@netlify/classnames-template-literals';
import { Message } from './PasswordValidation.types';

export const getMessageClass = (message: Message) =>
  ctl(`
  flex
  gap-2
  items-center
  text-xs
  mb-1
  ${message.isValid ? 'text-status-success' : 'text-status-error'}
`);

export const getIconClass = (message: Message) =>
  ctl(`
  ri-xl
  ${message.isValid ? 'ri-checkbox-circle-line' : 'ri-close-circle-line'}
`);

export const getClassName = (className?: string) =>
  ctl(`
  ${className}
`);
