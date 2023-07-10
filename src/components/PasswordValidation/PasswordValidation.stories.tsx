import type { StoryObj } from '@storybook/react';
import { PasswordValidation } from './PasswordValidation';

export default {
  title: 'Design System/Content/PasswordValidation',
  component: PasswordValidation,
};

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?type=design&node-id=1167%3A6284&mode=design&t=rK4E9ztEdAdaq7KU-1',
};

export const Basic: StoryObj<typeof PasswordValidation> = {
  args: {
    title: 'Tu contraseña debe tener:',
    messages: [
      { text: 'Al menos 8 caracteres', isValid: true },
      { text: 'Al menos una letra mayúscula', isValid: false },
      { text: 'Al menos un número y un carater especial', isValid: false },
    ],
  },
  parameters: {
    design,
  },
};
