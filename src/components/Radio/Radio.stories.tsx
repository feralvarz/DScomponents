import { Radio } from './Radio';

export default {
  title: 'Design System/Input/Radio',
  component: Radio,
};

export const Playground = {
  args: { text: 'Option 1', value: 'option1', name: 'options-field', disabled: false },
};

export const Grouped = {
  render: () => (
    <form className="bg-white p-4 border border-ds-base rounded-md">
      <Radio text="Option 1" value="option1" defaultChecked name="options-field" />
      <Radio text="Option 2" value="option2" name="options-field" />
    </form>
  ),
};
