import { StoryFn, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import Input from './Input';

export default {
  title: 'Deprecated/Input',
  component: Input,
  decorators: [withDesign],
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  id: 'input',
  label: 'Input demo',
  disabled: true,
  placeholder: 'place holder',
  required: true,
  valid: true,
  errorMessage: 'custom error message',
};

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=10-2788&t=6r1YYwRLOHCdn8XB-0',
  },
};
