import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Button } from '../../../deprecated/buttons/button';

import Toast from './Toast';

export default {
  title: 'Deprecated/Toast',
  component: Toast,
  decorators: [withDesign],
} as Meta<typeof Toast>;

const Template: StoryFn<typeof Toast> = () => {
  const [message, setMessage] = useState<any>(null);

  const onClick = () => {
    setMessage({
      severity: 'success',
      summary: 'Success Message',
      detail: 'Message Content',
      life: 3000,
    });
  };

  return (
    <div>
      <Button label="Notify me" onClick={onClick} />
      <Toast message={message} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=10-2788&t=6r1YYwRLOHCdn8XB-0',
  },
};
