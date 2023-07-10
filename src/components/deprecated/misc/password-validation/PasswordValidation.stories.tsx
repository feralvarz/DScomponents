import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import PasswordValidation from './PasswordValidation';
import Input from '../../inputs/simple-input/Input';

export default {
  title: 'Deprecated/PasswordValidation',
  component: PasswordValidation,
  decorators: [withDesign],
} as Meta<typeof PasswordValidation>;

const Template: StoryFn<typeof PasswordValidation> = (args) => {
  const [value, setValue] = useState<string>('');
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-5 w-2/12" data-theme="main">
      <Input
        id="input"
        label="Password"
        valid={isPasswordValid}
        value={value}
        required
        onChange={(event: any) => setValue(event.target.value)}
      />
      <PasswordValidation {...args} callback={setIsPasswordValid} value={value} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  items: [
    {
      id: 'characterMin',
      text: 'Al menos 10 caracteres',
      regex: '.{10,}',
      colorTextSuccess: 'text-lime-300',
      colorTextError: 'text-red-300',
    },
    {
      id: 'upperAndLower',
      text: 'Mayusculas y Minusculas',
      regex: '^(?=.*[a-z])(?=.*[A-Z])\\S+$',
      colorTextSuccess: 'text-lime-300',
      colorTextError: 'text-red-300',
    },
    {
      id: 'numberAndCharacter',
      text: 'Al menos un número y un caracter especial',
      regex: '^(?=.*\\d)(?=.*[\\W_])',
      colorTextSuccess: 'text-lime-300',
      colorTextError: 'text-red-300',
    },
  ],
};

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=10-2788&t=6r1YYwRLOHCdn8XB-0',
  },
};
