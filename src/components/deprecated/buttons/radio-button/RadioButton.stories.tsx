import { StoryFn, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import RadioButton from './RadioButton';

export default {
  title: 'Deprecated/RadioButton',
  component: RadioButton,
  decorators: [withDesign],
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  color: 'bg-yellow-500',
  label: 'Button demo',
  disabled: false,
  checked: true,
};

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=10%3A5475&t=SmmjWsXVsV9oQ0qa-1',
  },
};
