import ctl from '@netlify/classnames-template-literals';
import { twJoin } from 'tailwind-merge';
import type { ItemStyleProps } from './ItemTemplate.types';

export const itemTemplateBaseStyles = (props: ItemStyleProps) =>
  ctl(`
  ds-menu-label
  flex
  items-center
  ${props?.active && '!text-secondary-accent'}
`);

export const getClassName = (props: ItemStyleProps) =>
  twJoin(itemTemplateBaseStyles(props), props?.className);
