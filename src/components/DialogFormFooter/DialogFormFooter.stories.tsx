import { DialogFormFooter } from './DialogFormFooter';

export default {
  title: 'Design System/Dialog/Dialog form footer',
  component: DialogFormFooter,
};

export const Playground = {
  args: {
    acceptLabel: 'Guardar',
    cancelLabel: 'Cancelar',
    disabled: false,
    onHide: () => console.log('close footer form event'),
  },
};
