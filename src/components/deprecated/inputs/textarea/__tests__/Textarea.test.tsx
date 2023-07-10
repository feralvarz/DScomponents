import React from 'react';
import { render, screen } from '@testing-library/react';
import Textarea from '../Textarea';

describe('Textarea component', () => {
  it('should render the label', () => {
    const { getByLabelText } = render(
      <Textarea id="input-test" label="Test textarea" theme="main" />,
    );

    expect(getByLabelText('Test textarea')).toBeDefined();
  });

  it('should render the placeholder', () => {
    const { getByPlaceholderText } = render(
      <Textarea id="input-test" label="Test textarea" placeholder="Placeholder" theme="main" />,
    );
    expect(getByPlaceholderText('Placeholder')).toBeDefined();
  });

  it('should render disabled textarea', () => {
    render(<Textarea id="input-test" label="Test textarea" theme="main" disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea.getAttribute('disabled')).toBeDefined();
  });
});
