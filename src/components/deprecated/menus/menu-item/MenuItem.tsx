import { FC, useState } from 'react';
import { DSComponentProps } from 'src/types';
import Link from 'next/link';

interface MenuItemProps extends DSComponentProps {
  title: string;
  icon?: string;
  href?: string;
  showArrow?: boolean;
  onToggle?: () => void;
}

/**
 * @deprecated use MenuItem from components/MenuItem/MenuItem
 */
const MenuItem: FC<MenuItemProps> = ({
  title,
  icon,
  href,
  showArrow = false,
  onToggle,
  theme = 'main',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
    onToggle?.();
  };

  return (
    <>
      <div>
        {icon && (
          <i className={`ri-${icon} ri-lg mr-3 text-inherit`} data-testid="menu-item-icon" />
        )}
        <span>{title}</span>
      </div>
      {showArrow && <div data-testid="menu-item-arrow" />}
    </>
  );
};

export default MenuItem;
