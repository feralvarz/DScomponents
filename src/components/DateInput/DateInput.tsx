import './DateInput.overrides.css';
import { forwardRef, memo } from 'react';

import type { DateInputProps } from './DateInput.types';
import { iconClass } from './DateInput.styles';
import { Calendar } from 'primereact/calendar';
import { Label } from '../Label/Label';
import { addLocale } from 'primereact/api';
import { ForwardRef } from 'src/types';

addLocale('es', {
  firstDayOfWeek: 1,
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'viernes', 'Sábado'],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  monthNamesShort: [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ],
  today: 'Hoy',
  clear: 'Limpiar',
  dateFormat: 'dd/mm/yy',
});

/**
 * Date Input component.
 */
export const DateInput: ForwardRef<Calendar, DateInputProps> = memo(
  forwardRef(function DateInput(props: DateInputProps, ref) {
    const { locale = 'es', dateFormat = 'dd/mm/yy' } = props;

    return (
      <div className="ds-date-input">
        {props?.label && (
          <Label htmlFor={props.id} text={props?.label} required={props?.required} />
        )}
        <div className="flex">
          <Calendar
            {...props}
            ref={ref}
            locale={locale}
            icon={<i className={iconClass} />}
            appendTo="self"
            dateFormat={dateFormat}
            showIcon
          />
        </div>
        {props?.error && <Label text={props?.error} error />}
      </div>
    );
  }),
);
