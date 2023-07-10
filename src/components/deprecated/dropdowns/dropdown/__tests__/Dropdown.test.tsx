import { render, screen } from '@testing-library/react';
import Dropdown from '../Dropdown';

const options = [
  { name: 'Option 1', value: 'option1' },
  { name: 'Option 2', value: 'option2' },
  { name: 'Option 3', value: 'option3' },
];

describe('Dropdown', () => {
  it('should render correctly', async () => {
    render(<Dropdown options={options} placeholder="Placeholder" theme="main" />);
    const placeholder = await screen.findAllByText('Placeholder');
    const plVisible = placeholder.filter((a) => a.classList.contains('p-dropdown-label'));
    expect(plVisible[0].textContent).toBe('Placeholder');
  });
});
