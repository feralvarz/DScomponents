import { FC, useState } from 'react';
import { DSComponentProps, MenuItemType } from 'src/types';
import MenuItem from '../menu-item/MenuItem';

interface VerticalMenuProps extends DSComponentProps {
  spacing: 'normal' | 'compact';
  items: MenuItemType[];
  simple?: boolean;
  toggleTransitionTime: number;
}

/**
 * @deprecated
 */
const VerticalMenu: FC<VerticalMenuProps> = ({
  spacing,
  items,
  simple = false,
  toggleTransitionTime,
  className = '',
  theme = 'main',
}) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (item: string) => {
    setOpenItems((prevItems) => ({ ...prevItems, [item]: !prevItems[item] }));
  };

  return (
    <div className={`flex flex-col ${spacing === 'compact' ? 'gap-0.5' : 'gap-1'} ${className}`}>
      {items.map((subItem) => (
        <div key={subItem.id}>
          <MenuItem
            href={subItem?.section}
            icon={subItem.icon}
            showArrow={subItem?.items !== undefined && !simple}
            theme={theme}
            title={subItem.title}
            onToggle={() => toggleItem(subItem.id)}
          />
          {!simple && subItem.items && (
            <div
              className={`ml-8 ${spacing === 'compact' ? 'mt-0.5' : 'mt-1'} ${
                !openItems[subItem.id] ? 'hidden' : ''
              }`}
              data-testid="vertical-menu-sub-menu"
            >
              <VerticalMenu
                items={subItem.items}
                spacing="normal"
                theme={theme}
                toggleTransitionTime={toggleTransitionTime}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalMenu;
