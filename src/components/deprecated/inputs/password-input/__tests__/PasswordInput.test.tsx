import { render, screen } from '@testing-library/react';
import PasswordInput from '../PasswordInput';
import '@testing-library/jest-dom';

describe('PasswordInput', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<PasswordInput id="password" theme="main" />);
    expect(container).toMatchSnapshot();
  });

  it('renders label', () => {
    render(<PasswordInput id="password" label="Password" theme="main" required />);
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('should render the placeholder', () => {
    const { getByPlaceholderText } = render(
      <PasswordInput
        id="input"
        label="Password Test Input"
        placeholder="Placeholder"
        theme="main"
      />,
    );
    expect(getByPlaceholderText('Placeholder')).toBeInTheDocument();
  });
});
