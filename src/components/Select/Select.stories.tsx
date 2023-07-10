import type { StoryObj } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'Design System/Input/Select',
  component: Select,
};

export const Playground: StoryObj<typeof Select> = {
  render: (args) => (
    <div className="w-1/4">
      <Select {...args} />
    </div>
  ),
  args: {
    label: 'Aeropuerto',
    placeholder: 'Elija un aeropuerto',
    disabled: false,
    errorText: '',
    options: [
      { label: 'Amsterdam', value: 'ams' },
      { label: 'Madrid', value: 'mad' },
      { label: 'Roma', value: 'fco' },
    ],
  },
};
