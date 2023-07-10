import ctl from '@netlify/classnames-template-literals';
import { TypographyProps } from './typography.types';

const twLeadingClass = {
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
};

const twAlignClass = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

export const computedClassName = ({
  align = 'left',
  className = '',
  gutterBottom = false,
  noWrap = false,
  leading = 'normal',
}: TypographyProps) =>
  ctl(`
  typography-component
  ${className}
  ${gutterBottom && 'mb-2'}
  ${noWrap && 'whitespace-nowrap'}
  ${twLeadingClass[leading]}
  ${twAlignClass[align]}
`);
