import { StoryFn, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import Button from './Button';

export default {
  title: 'Deprecated/Button',
  component: Button,
  decorators: [withDesign],
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <div className="flex flex-col gap-3 w-[500px]">
    <Button {...args} />
    <Button {...args} />
  </div>
);

export const Basic = Template.bind({});

Basic.args = {
  color: 'primary',
  label: 'Button demo',
  size: 'small',
  disabled: false,
  iconLeft: <i className="ri-loader-line mr-2" />,
};

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=10%3A5475&t=SmmjWsXVsV9oQ0qa-1',
  },
};
