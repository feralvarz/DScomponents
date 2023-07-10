import { memo } from 'react';

import type { BadgeProps } from './Badge.types';
import { getClassName } from './Badge.styles';

/**
 * Badge component.
 * @param variant - Controls the color of the badge.
 * @param children - The content for this component.
 */
export const Badge = memo(function Badge(props: BadgeProps) {
  if (!props?.children) return null;
  const { variant, className = '', ...rest } = props;

  return (
    <button {...rest} className={getClassName(props)}>
      {props?.children}
    </button>
  );
});
