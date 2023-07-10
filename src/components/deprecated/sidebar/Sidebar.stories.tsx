import { StoryFn, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import SidebarMenu from './Sidebar';

export default {
  title: 'Deprecated/Sidebar',
  component: SidebarMenu,
  decorators: [withDesign],
} as Meta<typeof SidebarMenu>;

const Template: StoryFn<typeof SidebarMenu> = (args) => <SidebarMenu {...args} />;
export const Basic = Template.bind({});

const items = [
  {
    id: 'menu-1',
    title: 'Menu 1',
    items: [
      {
        id: 'menu-2',
        title: 'Submenu 1',
        icon: 'computer-line',
        items: [
          {
            id: 'option-1',
            title: 'Option 1',
            section: '/option1',
          },
          {
            id: 'option-2',
            title: 'Option 2',
            section: '/option2',
          },
          {
            id: 'option-4',
            title: 'Option 4',
            section: '/option2',
          },
          {
            id: 'option-5',
            title: 'Option 5',
            section: '/option2',
          },
          {
            id: 'option-6',
            title: 'Option 6',
            section: '/option2',
          },
          {
            id: 'option-7',
            title: 'Option 7',
            section: '/option2',
          },
          {
            id: 'option-8',
            title: 'Option 8',
            section: '/option2',
          },
        ],
      },
      {
        id: 'submenu-2',
        title: 'Submenu 2',
        icon: 'computer-line',
        items: [
          {
            id: 'option-2-3',
            title: 'Option 3',
            section: '/option3',
          },
        ],
      },
    ],
  },
  {
    id: 'menu-2',
    title: 'Menu 2',
    items: [
      {
        id: 'submenu-2-1',
        title: 'Submenu 2-1',
        icon: 'computer-line',
        items: [
          {
            id: 'Option-2-1',
            title: 'Option 2-1',
            section: '/option1',
          },
          {
            id: 'Option-2-2',
            title: 'Option 2-2',
            section: '/option2',
          },
        ],
      },
      {
        id: 'submenu-2-2',
        title: 'Submenu 2-2',
        icon: 'computer-line',
        items: [
          {
            id: 'submenu-2-3',
            title: 'Option 2-3',
            section: '/option3',
          },
        ],
      },
    ],
  },
];

Basic.args = {
  fixedProperties: {
    top: '100px',
  },
  spacing: 'compact',
  items,
  toggleTransitionTime: 300,
  responsive: true,
};

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=1-2462&t=JQPya9ZKP2NRHVjB-4',
  },
};
