import { StoryFn, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import PageTitle from './PageTitle';

export default {
  title: 'Deprecated/Title',
  component: PageTitle,
  decorators: [withDesign],
} as Meta<typeof PageTitle>;

const Template: StoryFn<typeof PageTitle> = (args) => <PageTitle {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  label: 'Titulo',
  actionsBottom: [
    {
      label: 'Button',
      className: 'p-button p-component p-button-text',
    },
    {
      label: 'Button 1',
      iconLeft: <i className="ri-download-line h-[18px] w-[19px]" />,
      className: 'p-button p-component p-button-text',
    },
    {
      label: 'Button 2',
      iconLeft: <i className="ri-download-line h-[18px] w-[19px]" />,
      className: 'p-button p-component p-button-text',
    },
  ],
  actionsTop: [
    {
      label: 'Button',
      iconLeft: <i className="ri-arrow-left-s-line" />,
      className: 'p-button p-component p-button-text',
    },
    {
      label: 'Button1',
      iconLeft: <i className="ri-arrow-left-s-line" />,
      className: 'p-button p-component p-button-text',
    },
    {
      label: 'Button2',
      iconLeft: <i className="ri-arrow-left-s-line" />,
      className: 'p-button p-component p-button-text',
    },
  ],
};

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=31-2884&t=9Ld8LvfljYsbDI6U-0',
  },
};
