import type { ToastMessage, ToastProps as PrimeToastProps } from 'primereact/toast';

export type ToastMethods = {
  show: (message: ToastMessage | ToastMessage[]) => void;
};

export type ToastProps = {
  message?: ToastMessage;
  ref: React.Ref<any>;
} & PrimeToastProps;
