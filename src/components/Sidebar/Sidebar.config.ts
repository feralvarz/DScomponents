import type { PanelMenuPassThroughOptions } from 'primereact/panelmenu';

export const pt: PanelMenuPassThroughOptions = {
  headerSubmenuIcon: () => ({
    className: 'hidden',
  }),
  header: () => ({
    expanded: true,
    className: 'header-item',
  }),
  headerLabel: () => ({
    className: 'ds-menu-header-label uppercase text-badge font-sans text-ds-placeholder',
  }),
  toggleableContent: () => ({
    className: 'ds-panelmenu pl-2',
  }),
  menuitem: () => ({
    className: `ds-menuitem`,
  }),
  label: () => ({
    className: `ds-menu-label truncate`,
  }),
};
