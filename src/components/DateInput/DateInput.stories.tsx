import { DateInput } from './DateInput';

export default {
  title: 'Design System/Input/DateInput',
  component: DateInput,
};

export const Playground = {
  args: {
    id: 'datepicker-example',
    label: 'Fecha',
    required: true,
    disabled: false,
    locale: 'es',
    dateFormat: 'dd/mm/yy',
  },
  argTypes: {
    dateFormat: {
      type: 'select',
      options: ['dd/mm/yy', 'mm/dd/yy'],
    },
    locale: {
      type: 'select',
      options: ['es', 'en'],
    },
  },
};
