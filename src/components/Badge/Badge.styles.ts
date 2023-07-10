import ctl from '@netlify/classnames-template-literals';
import { BadgeProps, BadgeVariant } from './Badge.types';

const getVariant = (variant: BadgeVariant) => {
  const variants = {
    green: 'bg-badge-green-400 text-badge-green-900',
    orange: 'bg-badge-orange-400 text-badge-orange-900',
    red: 'bg-badge-red-500 text-badge-red-900',
    cyan: 'bg-badge-cyan-400 text-badge-cyan-900',
    yellow: 'bg-badge-yellow-300 text-badge-yellow-800',
    amber: 'bg-badge-amber-600 text-badge-amber-900',
    purple: 'bg-badge-purple-300 text-badge-purple-900',
    transparent: 'bg-transparent text-black',
  };

  return variants[variant] || variants.green;
};

const baseBadge = ctl(`
  text-badge
  rounded-full
  py-1
  px-3
  font-bold
  max-w-max
`);

export const getClassName = (props: BadgeProps) =>
  ctl(`
  ${baseBadge}
  ${getVariant(props?.variant)}
  ${props?.className}
  ${props?.disabled && 'disabled'}
`);
