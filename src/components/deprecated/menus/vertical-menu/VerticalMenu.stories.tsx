import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import VerticalMenu from './VerticalMenu';

export default {
  title: 'Deprecated/VerticalMenu',
  component: VerticalMenu,
  decorators: [withDesign],
} as ComponentMeta<typeof VerticalMenu>;

const Template: ComponentStory<typeof VerticalMenu> = (args) => <VerticalMenu {...args} />;

export const Basic = Template.bind({});

const items = [
  {
    id: '1',
    title: 'Dashboard',
    icon: 'computer-line',
    items: [
      {
        id: '2',
        title: 'Prueba 1',
      },
      {
        id: '3',
        title: 'Prueba 2',
      },
    ],
  },
  {
    id: '4',
    title: 'Puntualidad',
    icon: 'computer-line',
    items: [
      {
        id: '5',
        title: 'Paradas y expediciones',
      },
      {
        id: '6',
        title: 'Lineas',
      },
    ],
  },
];

Basic.args = {
  spacing: 'compact',
  items,
  toggleTransitionTime: 300,
};

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=1-2462&t=JQPya9ZKP2NRHVjB-4',
  },
};
