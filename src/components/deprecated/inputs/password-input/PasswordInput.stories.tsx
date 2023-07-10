import { StoryFn, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import PasswordInput from './PasswordInput';

export default {
  title: 'Deprecated/PasswordInput',
  component: PasswordInput,
  decorators: [withDesign],
} as Meta<typeof PasswordInput>;

const Template: StoryFn<typeof PasswordInput> = (args) => <PasswordInput {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  id: 'input',
  label: 'Input demo',
  disabled: false,
  required: false,
  valid: true,
  placeholder: 'password',
  inputClassName:
    'w-full border-b-2 p-2 bg-transparent border-x-0 border-t-0 focus:ring-[1.5px] focus:outline-none focus:ring focus:ring-black',
  className: 'w-full',
};

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=10-2788&t=6r1YYwRLOHCdn8XB-0',
  },
};
