import { StoryFn, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import SimpleCalendar from './Calendar';

export default {
  title: 'Deprecated/Calendar',
  component: SimpleCalendar,
  decorators: [withDesign],
} as Meta<typeof SimpleCalendar>;

const Template: StoryFn<typeof SimpleCalendar> = (args) => <SimpleCalendar {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  id: 'input',
  label: 'Input demo',
  disabled: false,
  placeholder: 'place holder',
  required: true,
  invalid: true,
  value: new Date(),
  dateFormat: 'dd-mm-yy',
  errorMessage: 'error message custom',
};

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=10-2788&t=6r1YYwRLOHCdn8XB-0',
  },
};
