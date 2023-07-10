import { memo } from 'react';

import type { LabelProps } from './Label.types';
import { getClassName } from './Label.styles';

/**
 * Label Component.
 * @param children - The content for this component, it could wrap an input in some context.
 * @param required - If the label is required, it will add an asterisk.
 * @param error - If the label has an error, it will show a status error color.
 */
export const Label = memo(function Label(props: LabelProps) {
  const { className = '', ...rest } = props;

  return (
    <label {...rest} className={getClassName(props)}>
      {props?.children}
      {props.text}
      {props?.required && !props?.error && (
        <span className="text-sm pl-0.5 font-bold text-secondary-900">*</span>
      )}
    </label>
  );
});
