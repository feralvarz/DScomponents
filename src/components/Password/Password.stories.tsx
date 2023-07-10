import { Password } from './Password';

export default {
  title: 'Design System/Input/Password',
  component: Password,
};

export const Playground = {
  args: {
    id: 'ds-password-field',
    name: 'password-field-example',
    label: 'Password',
    hint: 'Must be at least 8 characters long',
    error: '',
    required: true,
  },
};
