import './Header.css';
import { memo } from 'react';
import type { HeaderProps } from './Header.types';

import { Menubar } from 'primereact/menubar';
import { getClassName } from './Header.styles';

/**
 * Header component
 */
export const Header = memo(function Header(props: HeaderProps) {
  const { model = [], startItem, endItem } = props;

  return (
    <header className="ds-header">
      <Menubar
        className={getClassName(props?.className)}
        start={startItem}
        end={endItem}
        model={model}
        pt={{
          start: () => ({
            className: 'ds-header-start',
          }),
        }}
      />
    </header>
  );
});
