import { render, fireEvent } from '@testing-library/react';
import RadioButton from '../RadioButton';
import '@testing-library/jest-dom';

describe('RadioButton', () => {
  const mockOnChange = jest.fn();

  it('renders the radio button with label', () => {
    const { getByLabelText } = render(
      <RadioButton checked={false} id="radio" label="Option" onChange={mockOnChange} />,
    );

    const radioButton = getByLabelText('Option') as HTMLInputElement;
    expect(radioButton.type).toBe('radio');
    expect(radioButton.checked).toBe(false);
  });

  it('disables the radio button when disabled prop is true', () => {
    const { getByLabelText } = render(
      <RadioButton checked={false} id="radio" label="Option" disabled onChange={mockOnChange} />,
    );

    const radioButton = getByLabelText('Option') as HTMLInputElement;
    expect(radioButton.disabled).toBe(true);
  });
});
