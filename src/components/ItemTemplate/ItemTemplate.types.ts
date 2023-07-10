import { MenuItem } from 'primereact/menuitem';

export type ItemTemplateProps = {
  wrapperComponent?: React.ReactElement;
  active?: boolean;
} & MenuItem;

export type ItemStyleProps = Omit<ItemTemplateProps, 'wrapperComponent'>;
