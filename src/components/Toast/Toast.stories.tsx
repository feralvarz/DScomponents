import type { StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { Button } from '../Button/Button';
import { useRef } from 'react';
import { ToastMethods, ToastProps } from './Toast.types';

const successMessage: ToastProps['message'] = {
  severity: 'success',
  summary: '¡Éxito!',
  detail:
    'La carga se ha realizado correctamente. Se ha enviado un email de confirmación a la dirección correspondiente.',
  life: 3000,
};

const warnMessage: ToastProps['message'] = {
  severity: 'warn',
  summary: 'Alerta',
  detail: 'Por favor revise el estado del componente.',
  life: 3000,
};
const errorMessage: ToastProps['message'] = {
  severity: 'error',
  summary: '¡Error!',
  detail: 'La carga no se ha realizado correctamente.',
  life: 3000,
};
const infoMessage: ToastProps['message'] = {
  severity: 'info',
  summary: 'Información',
  detail:
    'La carga se ha realizado correctamente. Se ha enviado un email de confirmación a la dirección correspondiente.',
  life: 3000,
};

export default {
  title: 'Design System/Notifications/Toast',
  component: Toast,
};

const ToastDemo = () => {
  const toastRef = useRef<ToastMethods>(null);

  const handleShowToast = (message: ToastProps['message']) => {
    if (toastRef.current) {
      toastRef.current.show(message!);
    }
  };
  return (
    <div>
      <Toast ref={toastRef} />
      <div className="flex gap-4">
        <Button onClick={() => handleShowToast(successMessage)} variant="secondary">
          Success
        </Button>
        <Button onClick={() => handleShowToast(warnMessage)} variant="secondary">
          Warn
        </Button>
        <Button onClick={() => handleShowToast(errorMessage)} variant="secondary">
          Error
        </Button>
        <Button onClick={() => handleShowToast(infoMessage)} variant="secondary">
          Info
        </Button>
      </div>
    </div>
  );
};

export const Basic: StoryObj<typeof Toast> = {
  render: ToastDemo,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?type=design&node-id=19%3A4327&mode=design&t=rK4E9ztEdAdaq7KU-1',
    },
  },
};
