import type { StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { model } from './Sidebar.mocks';

export default {
  title: 'Design System/Navigation/Sidebar',
  component: Sidebar,
};

export const Basic: StoryObj<typeof Sidebar> = {
  args: { model },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?type=design&node-id=1%3A891&mode=design&t=rK4E9ztEdAdaq7KU-1',
    },
  },
};
