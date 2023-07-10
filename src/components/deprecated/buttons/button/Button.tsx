import { FC, MouseEvent, useCallback } from 'react';
import type { DSComponentProps } from '../../../../types';

const getSizeClasses = (size: any) => {
  switch (size) {
    case 'small': {
      return 'btn-sm';
    }
    case 'large': {
      return 'btn-lg';
    }
    case 'medium': {
      return 'btn-md';
    }
    default: {
      return 'btn-sm';
    }
  }
};

const BASE_BUTTON_CLASSES = 'btn flex justify-center items-center rounded relative';

const SPINNER = (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      fill="currentColor"
    />
  </svg>
);

interface ButtonProps extends DSComponentProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'outline';
  iconLeft?: React.ReactNode;
  onClick?: (ev: MouseEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const twColors = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
};

/**
 * @deprecated Use `Button` from `@ds/components/button` instead
 */
const Button: FC<ButtonProps> = ({
  theme = 'main',
  size = 'small',
  color,
  label,
  iconLeft,
  onClick,
  disabled,
  loading,
  type = 'button',
  ...props
}) => {
  const computedClasses = useCallback(() => {
    const sizeClass = getSizeClasses(size);
    const colorClass = color ? twColors[color] : '';
    const iconLeftClass = iconLeft ? 'icon-left' : '';
    const loadingClass = loading ? 'loading' : '';

    return [iconLeftClass, colorClass, sizeClass, loadingClass].filter((e) => e !== '').join(' ');
  }, [size, color, iconLeft, loading]);

  return (
    <button
      className={`${BASE_BUTTON_CLASSES} ${computedClasses()} ${disabled ? 'btn-disabled' : ''}`}
      data-theme={theme}
      disabled={!!disabled}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      {...props}
    >
      {iconLeft}
      {label}
    </button>
  );
};

export default Button;
