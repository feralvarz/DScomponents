import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../Input';
import '@testing-library/jest-dom';

describe('Input component', () => {
  it('should render the label', () => {
    const { getByLabelText } = render(<Input id="input-test" label="Test Input" theme="main" />);
    expect(getByLabelText('Test Input')).toBeInTheDocument();
  });

  it('should render the placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input id="input-test" label="Test Input" placeholder="Placeholder" theme="main" />,
    );
    expect(getByPlaceholderText('Placeholder')).toBeInTheDocument();
  });

  it('should render disabled textinput', () => {
    render(<Input id="input-test" label="Test input" theme="main" disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea.getAttribute('disabled')).toBeDefined();
  });
});
