import type { MenuItem } from 'primereact/menuitem';
import { MenubarProps } from 'primereact/menubar';

export type HeaderProps = {
  startItem: React.ReactNode;
  endItem?: React.ReactNode;
} & MenubarProps;
