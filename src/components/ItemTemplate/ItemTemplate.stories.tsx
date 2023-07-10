import { StoryObj } from '@storybook/react';
import { ItemTemplate } from './ItemTemplate';

export default {
  title: 'Design System/Navigation/Item template',
  component: ItemTemplate,
};

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?type=design&node-id=104%3A4248&mode=design&t=rK4E9ztEdAdaq7KU-1',
};

export const Basic: StoryObj<typeof ItemTemplate> = {
  args: { label: 'Item template example', active: false, icon: 'computer-line' },
  parameters: {
    design,
  },
  render: (args) => (
    <div className="text-ds-neutral">
      <h2 className="text-h3 mb-4">ItemTemplate component</h2>
      <p className="text-base">
        Este componente recibe <code className="text-ds-accent">props:Menuitem</code> de{' '}
        <span className="font-semi">Prime React</span>.
      </p>
      <p className="text-base">
        Puede utilizarse con la prop <code className="text-ds-accent">wrapperElement</code> que
        recibe un componente donde sera renderizado. Esto es útil para casos de uso como{' '}
        <code className="text-ds-accent">Link</code> de <span className="font-semi">NextJS</span>.
      </p>
      <div className="py-8">
        <ItemTemplate {...args} />
      </div>
    </div>
  ),
};

export const Wrapped: StoryObj<typeof ItemTemplate> = {
  args: {
    label: 'Item template example',
    active: false,
    icon: 'computer-line',
    wrapperComponent: <a href="#some-url" />,
  },
  parameters: {
    design,
  },
  render: (args) => (
    <div className="text-ds-neutral">
      <h2 className="text-h3 mb-4">ItemTemplate component</h2>
      <p className="text-base">
        Ejemplo de uso con un{' '}
        <code className="text-ds-accent">wrapperElement={`{<a href="#some-url"/>}`}</code> de{' '}
        <span className="font-semi">NextJS</span>.
      </p>
      <div className="py-8">
        <ItemTemplate {...args} />
      </div>
    </div>
  ),
};
