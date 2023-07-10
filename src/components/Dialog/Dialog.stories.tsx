import type { DialogCloseEvent } from './Dialog.types';
import { Input } from '../Input/Input';
import { Dialog } from './Dialog';
import { DialogFormFooter } from '../DialogFormFooter/DialogFormFooter';

const closeCallback = (event: DialogCloseEvent) => console.log('close event', event);

/**
 * When is used with a form, DialogFormFooter should be used
 * inside form tag as is shown in this example.
 */
const DemoForm = () => (
  <form
    method="post"
    autoComplete="off"
    onSubmit={(event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);

      console.log(formData.get('demo-field-one'));
      console.log(formData.get('demo-field-two'));
      console.log(formData.get('demo-field-three'));
    }}
  >
    <Input name="demo-field-one" id="dmf-1" placeholder="Field content" label="Field one" />
    <Input name="demo-field-two" id="dmf-2" placeholder="Field content" label="Field two" />
    <Input name="demo-field-three" id="dmf-3" placeholder="Field content" label="Field three" />
    <DialogFormFooter acceptLabel="Aceptar" cancelLabel="Cancelar" onHide={closeCallback} />
  </form>
);

export default {
  title: 'Design System/Dialog/Dialog with form',
  component: Dialog,
};

export const Playground = {
  args: {
    header: 'Agregar nuevo elemento',
    children: <DemoForm />,
    onHide: closeCallback,
  },
};

export const StaticDialog = {
  title: 'Design System/Dialog/Basic dialog',
  args: {
    header: '',
    children: (
      <div>
        <h2 className="text-h2 text-secondary-600 mb-4">Content</h2>
        <p className="max-w-prose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero debitis laboriosam
          distinctio exercitationem, obcaecati repudiandae quisquam ad deserunt possimus ex ipsum
          doloribus fugiat tempora consequatur amet voluptatem velit non.
        </p>
      </div>
    ),
    onHide: closeCallback,
  },
};
