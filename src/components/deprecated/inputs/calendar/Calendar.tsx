import React, { FC } from 'react';
import { Calendar } from 'primereact/calendar';
import { Typography } from '../../typography/typography';
import type { CalendarType } from '../../../../types/components/calendar/CalendarType';

/**
 * @deprecated use DateInput from components/DateInput/DateInput
 */
const SimpleCalendar: FC<CalendarType> = ({
  theme = 'main',
  id,
  label,
  disabled = false,
  icon,
  showIcon = false,
  required,
  errorMessage = 'Error',
  ...props
}) => {
  const invalidClass = props.invalid ? 'p-invalid' : '';
  const calendarClassName = `${invalidClass} ${props.className}`;
  const placeholder = props.placeholder ?? undefined;

  return (
    <div className="flex justify-self-auto flex-col bg-transparent" data-theme={theme}>
      <label
        className={`${disabled ? 'text-neutral-400' : ''} label bg-transparent`}
        data-theme={theme}
        htmlFor={id}
      >
        <p>
          {label}{' '}
          <span className={`${disabled ? 'text-neutral-400' : 'text-secondary'}`}>
            {required ? '*' : null}
          </span>
        </p>
      </label>
      <Calendar
        {...props}
        appendTo="self"
        className={calendarClassName}
        disabled={disabled}
        inputId={id}
        placeholder={placeholder}
        showIcon={showIcon}
      />
      {props.invalid ? (
        <Typography className="text-sm text-red-500">{errorMessage}</Typography>
      ) : null}
    </div>
  );
};

export default SimpleCalendar;
