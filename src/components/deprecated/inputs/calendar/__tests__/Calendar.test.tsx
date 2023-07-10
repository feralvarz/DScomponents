import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SimpleCalendar from '../Calendar';
import '@testing-library/jest-dom';

describe('SimpleCalendar', () => {
  const mockOnChange = jest.fn();

  it('renders the calendar with label', () => {
    const { getByLabelText } = render(
      <SimpleCalendar id="calendar" label="Select Date" onChange={mockOnChange} />,
    );

    const calendar = getByLabelText('Select Date');
    expect(calendar).toBeInTheDocument();
  });

  it('disables the calendar when disabled prop is true', () => {
    const { getByLabelText } = render(
      <SimpleCalendar id="calendar" label="Select Date" disabled onChange={mockOnChange} />,
    );

    const calendar = getByLabelText('Select Date');
    expect(calendar).toBeDisabled();
  });

  // Add more test cases for different scenarios and edge cases
});
