import { TextArea } from './TextArea';

export default {
  title: 'Design System/Input/TextArea',
  component: TextArea,
};

export const Playground = {
  args: {
    name: 'text-area-field-example',
    label: 'Text area component',
    placeholder: 'Placeholder for this component',
    readOnly: false,
    hint: `58 characters remaining`,
    error: '',
  },
};
