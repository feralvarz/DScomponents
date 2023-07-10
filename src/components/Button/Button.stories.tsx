import { Button } from './Button';

const argTypes = {
  variant: {
    type: 'select',
    options: ['primary', 'secondary', 'danger', 'ghost'],
  },
};

export default {
  title: 'Design System/Button/Button',
  component: Button,
};

export const Playground = {
  args: {
    children: 'Hello World',
    variant: 'primary',
    disabled: false,
    small: false,
    loading: false,
    className: 'w-full',
  },
  argTypes,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?type=design&node-id=10%3A4183&mode=design&t=rK4E9ztEdAdaq7KU-1',
    },
  },
};

export const WithIcon = {
  args: {
    children: (
      <>
        <i className="ri-add-line ri-lg" />
        <span>Nuevo</span>
        <Button variant="primary">Hola</Button>
      </>
    ),
    variant: 'primary',
    disabled: false,
    className: 'w-full',
    small: false,
    loading: false,
  },
  parameters: {
    controls: { exclude: ['children'] },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?type=design&node-id=10%3A4183&mode=design&t=rK4E9ztEdAdaq7KU-1',
    },
  },
  argTypes,
};
