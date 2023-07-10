import { Text } from './Text';

export default {
  title: 'Design System/Content/Text',
  component: Text,
};

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?type=design&node-id=1167%3A6308&mode=design&t=rK4E9ztEdAdaq7KU-1',
};

export const Playground = {
  args: { children: 'Hello World', variant: 'h1', as: 'h4', weight: '' },
  argTypes: {
    weight: {
      type: 'select',
      options: ['normal', 'semi', 'bold', 'reset'],
    },
  },
  parameters: {
    design,
  },
};
