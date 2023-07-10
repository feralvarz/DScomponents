import ctl from '@netlify/classnames-template-literals';
import { TextVariant, TextWeight } from './Text.types';

const getVariant = (variant: TextVariant) => {
  const variants = {
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    base: 'text-base',
    badge: 'text-badge',
    xs: 'text-xs',
    pre: 'font-mono',
  };

  return variants[variant] || variants.base;
};

const getWeight = (weight: TextWeight) => {
  const weights = {
    normal: 'font-normal',
    semi: 'font-semi',
    bold: 'font-bold',
  };

  return weights[weight];
};

export const getClassName = (variant: TextVariant, weight?: TextWeight, className?: string) =>
  ctl(`
  ${className}
  ${getVariant(variant)}
  ${weight && getWeight(weight)}
`);
