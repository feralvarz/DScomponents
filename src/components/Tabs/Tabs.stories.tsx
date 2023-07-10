import type { StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

export default {
  title: 'Design System/Panels/Tabs',
  component: Tabs,
};

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?type=design&node-id=1167%3A6327&mode=design&t=rK4E9ztEdAdaq7KU-1',
};

export const Basic: StoryObj<typeof Tabs> = {
  args: {
    model: [
      {
        header: 'User settings',
        children: (
          <div>
            <h3 className="text-h3">Account info</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, ex repellendus
              libero nam distinctio quibusdam adipisci dolorem obcaecati maxime enim voluptatibus
              unde sit eveniet harum consectetur neque odit quidem numquam.
            </p>
          </div>
        ),
      },
      {
        header: 'Display',
        children: (
          <div>
            <h3 className="text-h3">Display settings</h3>
            <p>
              Architecto quod delectus voluptatem quas explicabo nam cupiditate reiciendis,
              inventore ipsam perspiciatis, eveniet labore sit ea ad veritatis molestias autem
              dolores et?
            </p>
          </div>
        ),
      },
      {
        header: 'Energy options',
        children: (
          <div>
            <h3 className="text-h3">Energy saver</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, ex repellendus
            </p>
          </div>
        ),
      },
    ],
  },
  parameters: {
    design,
  },
};
