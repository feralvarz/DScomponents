import { Input } from './Input';
import type { InputProps } from './Input.types';

export default {
  title: 'Design System/Input/Input',
  component: Input,
};

export const Playground = {
  args: {
    id: 'input-field-name-example',
    name: 'name-field-example',
    placeholder: 'Enter your name',
    label: 'Input component',
    error: '',
    hint: 'Type an error in options to change the state',
    type: 'text',
    small: false,
    required: false,
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    type: {
      type: 'select',
      options: ['text', 'password', 'email', 'number', 'search', 'url'],
    },
  },
  render: (args: InputProps) => (
    <div className="w-1/2">
      <Input {...args} />
    </div>
  ),
};
