import { StoryFn, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import Textarea from './Textarea';

export default {
  title: 'Deprecated/Textarea',
  component: Textarea,
  decorators: [withDesign],
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => (
  <div className="w-2/12">
    <Textarea {...args} />
  </div>
);

export const Basic = Template.bind({});

Basic.args = {
  label: 'Textarea',
  placeholder: 'Escriba...',
  rows: 5,
  cols: 30,
  required: true,
  disabled: false,
  autoResize: true,
};

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=10-2788&t=6r1YYwRLOHCdn8XB-0',
  },
};
