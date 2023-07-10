import React from 'react';
import { Preview } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import '../src/lib/design-system.css';
import { Primary, Title } from '@storybook/addon-docs';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="bg-white shadow-md border border-ds-base rounded-lg p-6">
        <Story />
      </div>
    ),
    withDesign,
  ],
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      page: () => (
        <>
          <Title />
          <Primary />
        </>
      ),
    },
  },
};

export default preview;
