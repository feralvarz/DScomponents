import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import VerticalMenu from '../VerticalMenu';

const items = [
  {
    id: 'menu-1',
    title: 'Menu Item 1',
    section: '/section-1',
    items: [
      {
        id: 'menu-2',
        title: 'Submenu Item 1',
        section: '/section-1-1',
      },
      {
        id: 'menu-3',
        title: 'Submenu Item 2',
        section: '/section-1-2',
      },
    ],
  },
  {
    id: 'menu-4',
    title: 'Menu Item 2',
    section: '/section-2',
  },
];

describe('VerticalMenu', () => {
  it('should render correctly with default props', () => {
    const { getByText } = render(
      <VerticalMenu items={items} spacing="normal" theme="main" toggleTransitionTime={0} />,
    );
    expect(getByText('Menu Item 1')).toBeInTheDocument();
    expect(getByText('Submenu Item 1')).toBeVisible();
  });

  it('should toggle sub-menu visibility when menu item is clicked', () => {
    render(<VerticalMenu items={items} spacing="normal" toggleTransitionTime={500} />);

    const menuItem = screen.getByText('Menu Item 1');
    const subMenu = screen.getByTestId('vertical-menu-sub-menu');

    fireEvent.click(menuItem);
    expect(subMenu).toBeVisible();

    fireEvent.click(menuItem);
    expect(subMenu).toHaveClass('hidden');
  });
});
