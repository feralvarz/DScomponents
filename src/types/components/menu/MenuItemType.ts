export interface MenuItemType {
  id: string;
  title: string;
  icon?: string;
  section?: string;
  items?: MenuItemType[];
}
