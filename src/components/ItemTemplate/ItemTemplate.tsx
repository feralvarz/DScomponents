import { cloneElement, memo } from 'react';

import type { ItemStyleProps, ItemTemplateProps } from './ItemTemplate.types';
import { getClassName } from './ItemTemplate.styles';

/**
 * Content is the visual part of the component.
 * Can be used as children when a wrapper component is provided.
 */
function Content(props: ItemStyleProps) {
  const { icon, label } = props;

  // TODO: this component works only with react-icons/ri, it should be able to work with any icon library
  // or SVG icons.
  return (
    <div className={getClassName(props)}>
      {icon && <i className={`ri-${icon} ri-lg mr-1 text-inherit`} data-testid="menu-item-icon" />}
      <span className="truncate">{label}</span>
    </div>
  );
}

/**
 * Item template component.
 */
export const ItemTemplate = memo(function MenuItem(props: ItemTemplateProps) {
  const { wrapperComponent, ...rest } = props;

  if (wrapperComponent) {
    return cloneElement(wrapperComponent, {}, <Content {...rest} />);
  }

  return <Content {...props} />;
});
