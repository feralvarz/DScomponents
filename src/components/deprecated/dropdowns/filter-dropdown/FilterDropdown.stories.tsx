import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import FilterDropdown from './FilterDropdown';

export default {
  title: 'Deprecated/Filter Dropdown',
  component: FilterDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterDropdown>;

const Template: ComponentStory<typeof FilterDropdown> = (args) => <FilterDropdown {...args} />;
const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
  { label: 'Option 5', value: 'option-5' },
  { label: 'Option 6', value: 'option-6' },
  { label: 'Option 7', value: 'option-7' },
  { label: 'Option 8', value: 'option-8' },
  { label: 'Option 9', value: 'option-9' },
  { label: 'Option 10', value: 'option-10' },
];

export const Default = Template.bind({});
Default.args = {
  id: 'filter-dropdown',
  label: 'Texto',
  options,
  optionLabel: 'label',
  optionValue: 'value',
  placeholder: 'Elegir...',
  value: null,
  required: true,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=10%3A2797&t=OhyEBG5t2f3pCJne-4',
  },
};

export const WithValue = Template.bind({});
WithValue.args = {
  id: 'filter-dropdown',
  label: 'Texto',
  options,
  optionLabel: 'label',
  optionValue: 'value',
  placeholder: 'Elegir...',
  value: 'option-1',
  required: true,
};
WithValue.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=10%3A2797&t=OhyEBG5t2f3pCJne-4',
  },
};
