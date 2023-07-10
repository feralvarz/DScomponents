import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import type { DropdownChangeEvent } from 'primereact/dropdown';
import Dropdown from './Dropdown';

const options = [
  { label: 'New York', value: 'NYC' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

// CSF 3.0
const Story: Meta = {
  title: 'Deprecated/Dropdown',
  component: Dropdown,
  argTypes: {},
  decorators: [withDesign],
};

export default Story;

const Template: StoryFn<typeof Dropdown> = (args) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const onChangeEvent = (e: DropdownChangeEvent) => setSelectedValue(e.value);
  return <Dropdown {...args} value={selectedValue} onChange={onChangeEvent} />;
};

export const Default = Template.bind({});
Default.args = {
  id: 'dropdown-default',
  options,
  label: 'Dropdown',
  className: '',
  placeholder: 'Select a value',
  optionLabel: 'label',
  optionValue: 'value',
  disabled: false,
  required: true,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=10-2732',
  },
};
