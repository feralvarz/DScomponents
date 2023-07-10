import logo from '../../assets/logo-ityneri.svg';

import { Header } from './Header';
import type { MenuItem } from 'primereact/menuitem';

const model: MenuItem[] = [
  {
    label: 'Red seleccionada',
    items: [
      {
        label: 'Red Actioticket',
        template: (item: MenuItem) => (
          <a
            href="#"
            role="menuitem"
            className="p-menuitem-link"
            aria-haspopup="false"
            onClick={(e) => {
              e.preventDefault();
              console.log('Click on item', item);
            }}
          >
            <span className="p-menuitem-text">{item.label}</span>
          </a>
        ),
      },
      { label: 'Item Two' },
    ],
  },
  {
    icon: <i className="ri-user-settings-line text-white text-h3" />,
    items: [
      { label: 'admin_ccw@yopmail.com', disabled: true },
      { separator: true },
      { label: 'Cambiar contraseña' },
      { label: 'Cambiar idioma' },
      { label: 'Cerrar sesión' },
    ],
  },
];

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?type=design&node-id=80%3A7133&mode=design&t=rK4E9ztEdAdaq7KU-1',
};

export default {
  title: 'Design System/Menus/Header',
  component: Header,
};

export const Default = {
  title: 'Default',
  args: {
    startItem: <img alt="Logo" src={logo} />,
    model: [model[1]],
  },
  parameters: {
    design,
  },
};

export const WithItems = {
  title: 'With items',
  args: {
    startItem: <img alt="Logo" src={logo} />,
    model,
  },
  parameters: {
    design,
  },
};
