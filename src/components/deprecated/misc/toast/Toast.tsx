import type { ToastType } from 'src/types';
import { Toast as PrimeReactToast, ToastMessage } from 'primereact/toast';
import { FC, useEffect, useRef } from 'react';

/**
 * @deprecated use Toast from components/Toast/Toast
 */
const Toast: FC<ToastType> = ({ message, position = 'bottom-right' }) => {
  const toastRef = useRef<PrimeReactToast>(null);

  useEffect(() => {
    if (!message) return;
    toastRef.current?.show(message as ToastMessage);
  }, [message]);

  return <PrimeReactToast position={position} ref={toastRef} />;
};

export default Toast;
