import { StoryFn, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { classNames } from 'primereact/utils';
import logo from './assets/logo_ityneri.svg';
import icon from './assets/user_icon.svg';

import Header from './Header';

export default {
  title: 'Deprecated/Header',
  component: Header,
  decorators: [withDesign],
} as Meta;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  items: [
    {
      icon: <img alt="Icon" src={icon} />,
      items: [
        { label: 'admin_ccw@yopmail.com', disabled: true },
        { separator: true },
        { label: 'Cambiar contraseña' },
        { label: 'Cambiar idioma' },
        { label: 'Cerrar sesión' },
      ],
    },
  ],
  startItem: <img alt="Logo" src={logo} style={{ height: 40, paddingLeft: 20 }} />,
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=81-7885&t=mtY3RIf5noMTARMC-4',
  },
};

export const WithItems = Template.bind({});
WithItems.args = {
  items: [
    {
      label: 'RED SELECCIONADA',
      items: [
        {
          label: 'RED ACTIOTICKET',
          template: (item, options) => (
            <a
              className={classNames(options.className, {
                'p-disabled': item.disabled,
              })}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // eslint-disable-next-line no-alert
                alert('RED ACTIOTICKET');
              }}
            >
              {item.label}
            </a>
          ),
        },
        { label: 'RED ACTIOTICKET 2' },
      ],
    },
    {
      icon: <img alt="Icon" src={icon} />,
      items: [
        { label: 'admin_ccw@yopmail.com', disabled: true },
        { separator: true },
        { label: 'Cambiar contraseña' },
        { label: 'Cambiar idioma' },
        { label: 'Cerrar sesión' },
      ],
    },
  ],
  startItem: <img alt="Logo" src={logo} style={{ height: 40, paddingLeft: 20 }} />,
};
WithItems.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/lqwCGcf4nD8K5x5HnZrNu3/Geoactio---Design-System?node-id=81-7885&t=mtY3RIf5noMTARMC-4',
  },
};
