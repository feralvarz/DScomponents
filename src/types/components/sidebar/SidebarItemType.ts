import { MenuItemType } from '../menu/MenuItemType';

export interface SidebarItemType {
  id: string;
  title?: string;
  items: MenuItemType[];
}
