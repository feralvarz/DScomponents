import { render } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it('renders with props', () => {
    const { container } = render(
      <Header
        endItem={<div>end</div>}
        items={[
          {
            label: 'File',
            icon: 'pi pi-fw pi-file',
            items: [
              {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                  { label: 'Bookmark', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Video', icon: 'pi pi-fw pi-video' },
                ],
              },
              { label: 'Delete', icon: 'pi pi-fw pi-trash' },
              { separator: true },
              { label: 'Export', icon: 'pi pi-fw pi-external-link' },
            ],
          },
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Left', icon: 'pi pi-fw pi-align-left' },
              { label: 'Right', icon: 'pi pi-fw pi-align-right' },
              { label: 'Center', icon: 'pi pi-fw pi-align-center' },
              { label: 'Justify', icon: 'pi pi-fw pi-align-justify' },
            ],
          },
          {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [
              { label: 'New', icon: 'pi pi-fw pi-user-plus' },
              { label: 'Delete', icon: 'pi pi-fw pi-user-minus' },
              {
                label: 'Search',
                icon: 'pi pi-fw pi-users',
                items: [
                  {
                    label: 'Filter',
                    icon: 'pi pi-fw pi-filter',
                    items: [{ label: 'Print', icon: 'pi pi-fw pi-print' }],
                  },
                ],
              },
            ],
          },
          {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            items: [
              {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [{ label: 'Save', icon: 'pi pi-fw pi-calendar-plus' }],
              },
              { label: 'Archieve', icon: 'pi pi-fw pi-calendar-minus' },
            ],
          },
        ]}
        justify="between"
        startItem={<div>start</div>}
        theme="main"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
