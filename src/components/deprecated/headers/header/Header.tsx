import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import type { DSComponentProps } from 'src/types';
import type { FC } from 'react';

interface HeaderProps extends DSComponentProps {
  items?: MenuItem[];
  startItem?: React.ReactNode;
  endItem?: React.ReactNode;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  className?: string;
}

const twJustifyClass = {
  center: 'justify-center',
  start: 'justify-start',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

/**
 * @deprecated use Header from components/Header/Header
 */
const Header: FC<HeaderProps> = ({
  startItem,
  endItem,
  theme = 'main',
  items = [],
  justify = 'between',
  className,
}) => {
  return (
    <header className={className} data-theme={theme}>
      <Menubar
        className={`bg-primary text-base-content rounded-none border-primary flex flex-row ${twJustifyClass[justify]}`}
        end={endItem}
        model={items}
        start={startItem}
      />
    </header>
  );
};

export default Header;
