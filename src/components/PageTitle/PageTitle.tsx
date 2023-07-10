import { memo } from 'react';

import type { PageTitleProps } from './PageTitle.types';
import { getClassName } from './PageTitle.styles';
import { Text } from '../Text/Text';

/**
 * Page title component.
 */
export const PageTitle = memo(function PageTitle(props: PageTitleProps) {
  const { title, topSlot = null, bottomSlot = null } = props;

  return (
    <div className={getClassName(props?.className)}>
      {topSlot}
      <Text variant="h2">{title}</Text>
      {bottomSlot}
    </div>
  );
});
