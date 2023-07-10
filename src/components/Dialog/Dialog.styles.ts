import ctl from '@netlify/classnames-template-literals';
import { DialogProps } from './Dialog.types';

export const modalContent = ctl(`
  pt-4
  pb-6
  max-w-6xl
`);

export const getClassName = (props: DialogProps) =>
  ctl(`
  ds-dialog
  w-1/3
  min-w-fit
  max-w-6xl
  ${props?.className}
`);

export const formWrapper = ctl(`
  grid
  auto-rows-auto
  gap-2
  px-5
`);
