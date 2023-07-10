import { memo, useCallback, useState } from 'react';
import './Sidebar.css';
import type { SidebarProps } from './Sidebar.types';
import type { CSSTransitionProps } from 'primereact/csstransition';
import { PanelMenu } from 'primereact/panelmenu';
import { pt } from './Sidebar.config';
import { arrowCollapseStyles, collapseStyles, collapseButton } from './Sidebar.styles';

/**
 * Sidebar component
 */
export const Sidebar = memo(function MainMenu(props: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapse = useCallback(() => setCollapsed((prev) => !prev), []);

  return (
    <aside className={collapseStyles(collapsed)}>
      <button onClick={handleCollapse} className={collapseButton}>
        <i className={arrowCollapseStyles(collapsed)} />
      </button>
      <nav className="ds-main-menu">
        <PanelMenu
          model={props.model}
          className="overflow-y-auto"
          multiple
          pt={pt}
          transitionOptions={{ disabled: true } as CSSTransitionProps}
        />
      </nav>
    </aside>
  );
});
