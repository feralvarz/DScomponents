import ctl from '@netlify/classnames-template-literals';
import { TextAreaProps } from './TextArea.types';

export const getClassName = (props: TextAreaProps) =>
  ctl(`
  ds-input-base
  ${props?.className}
  ${props?.readOnly ? 'border-transparent !px-0' : 'border-ds-placeholder'}
`);
