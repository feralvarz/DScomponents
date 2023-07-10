/* eslint-disable no-nested-ternary */
import { FC, useState } from 'react';
import { DSComponentProps, SidebarItemType } from 'src/types';
import VerticalMenu from '../menus/vertical-menu/VerticalMenu';
import { Scrollbar } from '../misc/scrollbar';

interface FixedProperties {
  top?: string;
}

interface SidebarProps extends DSComponentProps {
  spacing: 'normal' | 'compact';
  children?: React.ReactNode;
  items: SidebarItemType[];
  toggleTransitionTime: number;
  fixedProperties?: FixedProperties;
  className?: string;
  responsive?: boolean;
}

/**
 * @deprecated use MainMenu from components/MainMenu/MainMenu
 */
const Sidebar: FC<SidebarProps> = ({
  spacing,
  items,
  toggleTransitionTime,
  theme = 'main',
  children,
  className,
  fixedProperties,
  responsive = true,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  const sidebarWidth = isHidden ? 'w-20' : responsive ? 'w-20 md:w-64' : 'w-64';
  const sidebarButtonMargin = isHidden ? 'ml-16' : responsive ? 'ml-16 md:ml-60' : 'ml-60';
  const childrenPadding = isHidden ? 'pl-20' : responsive ? 'pl-20 md:pl-64' : 'pl-64';
  const rotateClass = isHidden ? 'rotate-180' : '';

  return (
    <div className="flex" style={{ paddingTop: fixedProperties?.top }}>
      <Scrollbar
        className={`${className} ${sidebarWidth} duration-${toggleTransitionTime} flex overflow-y-auto flex-none ${
          fixedProperties && 'fixed'
        } z-40`}
        data-testid="sidebar"
        data-theme={theme}
      >
        <button
          className={`${
            responsive ? 'hidden md:flex' : 'flex'
          } ${sidebarButtonMargin} duration-${toggleTransitionTime} btn-primary rounded-full justify-center items-center mt-5 w-7 h-7 ${rotateClass} bg-neutral z-40 ${
            fixedProperties ? 'fixed' : 'absolute'
          }`}
          data-testid="sidebar-button"
          data-theme={theme}
          type="button"
          onClick={() => setIsHidden((prevState) => !prevState)}
        >
          <i className="ri-arrow-left-s-line ri-lg" />
        </button>
        <div className="p-6" data-theme={theme}>
          {items.map((item) => (
            <div className={`${spacing === 'compact' ? 'mb-2' : 'mb-3'}`} key={item.id}>
              {item?.title && (
                <h6 className="truncate block text-gray-500">{item.title.toUpperCase()}</h6>
              )}
              <VerticalMenu
                className={`${spacing === 'compact' ? 'mt-1' : 'mt-2'}`}
                items={item.items}
                simple={isHidden}
                spacing={spacing}
                theme={theme}
                toggleTransitionTime={toggleTransitionTime}
              />
            </div>
          ))}
        </div>
      </Scrollbar>
      <div
        className={`flex-1 ${fixedProperties && childrenPadding} duration-${toggleTransitionTime}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
