import { useMemo } from 'react';
import { computedClassName } from './typography.styles';

import type { TypographyProps } from './typography.types';

/**
 * Typography component
 * @deprecated Prefer using the `Text` component instead.
 */
export function Typography(props: TypographyProps) {
  const { variant = 'p', children, ...rest } = props;
  const elementClass = useMemo(() => computedClassName(rest), [rest]);

  /* TODO: The following type definitions needs to be removed
   * Typography sizes doesn't need to be tied to specific elements.
   */
  const typeVariants = useMemo(
    () => ({
      h1: <h1 className={elementClass}>{children}</h1>,
      h2: <h2 className={elementClass}>{children}</h2>,
      h3: <h3 className={elementClass}>{children}</h3>,
      pre: <pre className={elementClass}>{children}</pre>,
      span: <span className={elementClass}>{children}</span>,
      p: <p className={elementClass}>{children}</p>,
    }),
    [elementClass, children],
  );

  return typeVariants[variant] || typeVariants.p;
}
