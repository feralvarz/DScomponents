import { FC } from 'react';
import type { DSComponentProps } from '../../../../types';

interface ButtonProps extends DSComponentProps {
  label: string;
  checked: boolean;
  id: string;
  color?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
}

/**
 * @deprecated  Use `Radio` from components/Radio
 */
const RadioButton: FC<ButtonProps> = ({
  theme = 'main',
  color = 'bg-secondary',
  id,
  label,
  onChange,
  disabled,
  checked,
  ...props
}) => (
  <div className="flex items-center bg-transparent mr-3" data-theme={theme} key={id}>
    <input
      className={`radio ${checked ? color : ''} checked:${color}`}
      disabled={disabled}
      id={id}
      type="radio"
      {...props}
      checked={checked}
      onChange={onChange}
    />
    <label className={`ml-1 ${disabled ? 'text-neutral-400' : ''}`} htmlFor={id}>
      {label}
    </label>
  </div>
);

export default RadioButton;
