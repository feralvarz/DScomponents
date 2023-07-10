import React, { forwardRef, useState } from 'react';
import { Password } from 'primereact/password';
import type { PasswordType } from '../../../../types/components/password/PasswordInputType';

const getSizeClasses = (size: any) => {
  switch (size) {
    case 'small': {
      return 'p-inputtext-sm';
    }
    case 'large': {
      return 'p-inputtext-lg';
    }
    case 'medium': {
      return undefined;
    }
    default: {
      return undefined;
    }
  }
};

/**
 * @deprecated use Input[type="password"] from components/Input
 */
function PasswordInput(props: PasswordType, ref: any) {
  const {
    id,
    label,
    theme = 'main',
    required,
    disabled = false,
    showFeedBack = false,
    toggleMask = true,
    placeholder,
    className,
  } = props;
  const [value, setValue] = useState<string>('');
  const size = getSizeClasses(props.size);
  const validClass = props.valid ? '' : 'p-invalid';
  const passClassName = `${size} ${validClass} ${className} `;
  return (
    <div className="form-control w-full bg-transparent" data-theme={theme}>
      <label className={`${disabled ? 'text-neutral-400' : ''} label`} htmlFor={id}>
        <p>
          {label}{' '}
          <span className={`${disabled ? 'text-neutral-400' : 'text-secondary'}`}>
            {required ? '*' : null}
          </span>
        </p>
      </label>
      <div>
        <Password
          aria-describedby={`${id}-help`}
          className={passClassName}
          disabled={disabled}
          feedback={showFeedBack}
          placeholder={placeholder}
          ref={ref}
          toggleMask={toggleMask}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          {...props}
        />
      </div>
    </div>
  );
}

export default forwardRef<Password, PasswordType>(PasswordInput);
