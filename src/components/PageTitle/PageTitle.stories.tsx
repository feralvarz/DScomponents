import type { StoryObj } from '@storybook/react';
import { PageTitle } from './PageTitle';
import { Button } from '../Button/Button';

export default {
  title: 'Design System/Content/PageTitle',
  component: PageTitle,
};

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?type=design&node-id=31%3A2884&mode=design&t=rK4E9ztEdAdaq7KU-1',
};

export const Basic: StoryObj<typeof PageTitle> = {
  args: {
    title: 'Detalles de usuario',
    topSlot: (
      <div className="-ml-2">
        <Button variant="ghost" small>
          <i className="ri-arrow-left-s-line ri-lg text-base" />
          Volver al listado
        </Button>
      </div>
    ),
    bottomSlot: (
      <div className="-ml-4 flex gap-4">
        <Button variant="ghost" className="text-ds-copy">
          <i className="ri-download-line ri-1x text-base" />
          Exportar
        </Button>
      </div>
    ),
  },
  parameters: {
    design,
  },
};
