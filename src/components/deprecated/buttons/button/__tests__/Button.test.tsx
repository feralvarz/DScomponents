import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('should render correctly', () => {
    const { container } = render(<Button label="geoactio" theme="main" />);
    expect(container.textContent).toBe('geoactio');
  });

  it('should render disable button', () => {
    render(<Button label="geoactio" theme="main" disabled />);
    const button = screen.getByRole('button');
    expect(button.getAttribute('disabled')).toBeDefined();
  });

  it('should render loading button', () => {
    render(<Button label="geoactio" theme="main" loading />);
    const button = screen.getByRole('button');
    expect(button.getElementsByClassName('loading')).toBeDefined();
  });
});
