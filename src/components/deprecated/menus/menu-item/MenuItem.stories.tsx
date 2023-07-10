import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import MenuItem from './MenuItem';

export default {
  title: 'Deprecated/MenuItem',
  component: MenuItem,
  decorators: [withDesign],
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <div className="w-2/12">
    <MenuItem {...args} />
  </div>
);

export const Basic = Template.bind({});

Basic.args = {
  title: 'Monitoring',
  icon: 'computer-line',
  href: 'string',
};

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=1-2462&t=JQPya9ZKP2NRHVjB-4',
  },
};
