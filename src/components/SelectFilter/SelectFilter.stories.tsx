import { SelectFilter } from './SelectFilter';
import type { StoryObj } from '@storybook/react';

export default {
  title: 'Design System/Input/Select filter',
  component: SelectFilter,
};

export const Playground: StoryObj<typeof SelectFilter> = {
  render: (args) => (
    <div className="w-1/4">
      <SelectFilter {...args} />
    </div>
  ),
  args: {
    label: 'Aeropuerto',
    placeholder: 'Elija un aeropuerto',
    disabled: false,
    errorText: '',
    options: [
      { label: 'Amsterdam', value: 'ams' },
      { label: 'Bangkok', value: 'bkk' },
      { label: 'Beijing', value: 'pek' },
      { label: 'Berlin', value: 'txl' },
      { label: 'Cairo', value: 'cai' },
      { label: 'Dubai', value: 'dxb' },
      { label: 'Hong Kong', value: 'hkg' },
      { label: 'Istanbul', value: 'ist' },
      { label: 'Johannesburg', value: 'jnb' },
      { label: 'London', value: 'lhr' },
      { label: 'Los Angeles', value: 'lax' },
      { label: 'Madrid', value: 'mad' },
      { label: 'Melbourne', value: 'mel' },
      { label: 'Mexico City', value: 'mex' },
      { label: 'Moscow', value: 'svo' },
      { label: 'Mumbai', value: 'bom' },
      { label: 'New York', value: 'jfk' },
      { label: 'Paris', value: 'cdg' },
      { label: 'Roma', value: 'fco' },
      { label: 'São Paulo', value: 'gru' },
      { label: 'Seoul', value: 'icn' },
      { label: 'Singapore', value: 'sin' },
      { label: 'Sydney', value: 'syd' },
      { label: 'Tokyo', value: 'hnd' },
      { label: 'Toronto', value: 'yyz' },
    ],
  },
};
