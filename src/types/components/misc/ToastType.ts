import { ToastMessage } from 'primereact/toast';
import { DSComponentProps } from 'src/types/component';

// TODO: remove after migration to v2. DEPRECATED
export const GEOACTIO = 'GEOACTIO';
export const DEFAULT = 'DEFAULT';

export type ToastMessageType = ToastMessage;

export interface ToastType extends DSComponentProps {
  message?: ToastMessageType | undefined;
  position?:
    | 'center'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-center'
    | 'top-left'
    | 'top-right'
    | 'bottom-center'
    | 'bottom-left'
    | 'bottom-right';
}
