import type { Ref } from 'react';
import { forwardRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Typography } from '../../typography/typography';
import type { InputType } from '../../../../types/components/input/InputType';

/**
 * @deprecated Use Input from components/Input
 */
function Input(props: InputType, ref: Ref<HTMLInputElement>) {
  const { id, label, theme = 'main', required, errorMessage = 'Error' } = props;
  const validClass = props.valid ? 'p-invalid' : '';
  const inputClassName = `${validClass} ${props.className}`;
  const placeholder = props.placeholder ?? undefined;
  const disabled = props.disabled ?? false;

  return (
    <div className="flex justify-self-auto flex-col">
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
      <InputText
        className={inputClassName}
        disabled={disabled}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
      {props.valid ? (
        <Typography className="text-sm text-red-500">{errorMessage}</Typography>
      ) : null}
    </div>
  );
}

export default forwardRef<HTMLInputElement, InputType>(Input);
