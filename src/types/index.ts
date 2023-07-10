export type Assign<T, U> = {
  [P in keyof (T & U)]: P extends keyof T ? T[P] : P extends keyof U ? U[P] : never;
};

export interface ForwardRef<T, P>
  extends React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>> {}

// TODO: remove this types after migration to V2
export type { DSComponentProps } from './component';
export type { MenuItemType } from './components/menu/MenuItemType';
export type { SidebarItemType } from './components/sidebar/SidebarItemType';
export type { TextareaType } from './components/textarea/TextareaType';
export type { PasswordValidationType } from './components/misc/PasswordValidationType';
export type { PasswordValidationItemType } from './components/misc/PasswordValidationType';
export type { DropdownType } from './components/dropdown/DropdownType';
export type { ToastType } from './components/misc/ToastType';
