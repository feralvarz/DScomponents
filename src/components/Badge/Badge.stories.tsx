import { Badge } from './Badge';

export default {
  title: 'Design System/Button/Badge',
  component: Badge,
};

export const Playground = {
  args: {
    children: 'Hello World',
    variant: 'green',
    disabled: false,
  },
  argTypes: {
    variant: {
      type: 'select',
      options: ['green', 'orange', 'red', 'cyan', 'yellow', 'amber', 'purple', 'transparent'],
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?type=design&node-id=10%3A4182&mode=design&t=rK4E9ztEdAdaq7KU-1',
    },
  },
};
