import { memo } from 'react';

import type { ButtonProps } from './Button.types';
import { getClassName } from './Button.styles';

/**
 * Button Component.
 * @param variant - controls the main aspect of the button see types for more info.
 * @param small - size.
 */
export const Button = memo(function Button(props: ButtonProps) {
  const { className = '', loading = false, small = false, ...rest } = props;

  return (
    <button {...rest} className={getClassName(props)}>
      {props.loading && <i className="ri-loader-line animate-spin [&+i]:hidden" />}
      {rest.children}
    </button>
  );
});
