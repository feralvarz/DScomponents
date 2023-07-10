import React, { forwardRef, memo, useRef } from 'react';
import { Toast as PrimeReactToast, ToastMessage } from 'primereact/toast';
import { ToastMethods, ToastProps } from './Toast.types';

export const Toast = memo(
  forwardRef(function Toast(props: ToastProps, ref: React.Ref<ToastMethods>) {
    const toastRef = useRef<PrimeReactToast>(null);

    React.useImperativeHandle(ref, () => ({
      show: (message: ToastMessage | ToastMessage[]) => {
        if (toastRef.current) {
          toastRef.current.show(message);
        }
      },
    }));

    return <PrimeReactToast {...props} ref={toastRef} />;
  }),
);
