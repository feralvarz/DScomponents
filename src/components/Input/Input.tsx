import type { ForwardRef } from 'src/types';
import { forwardRef, memo } from 'react';

import type { InputProps } from './Input.types';
import { getClassName } from './Input.styles';
import { Label } from '../Label/Label';

/**
 * Input Component.
 */
export const Input: ForwardRef<HTMLInputElement, InputProps> = memo(
  forwardRef(function Input(props: InputProps, ref) {
    const { type = 'text' } = props;

    return (
      <div>
        {props?.label && (
          <Label htmlFor={props.id} text={props?.label} required={props?.required} />
        )}
        <input {...props} id={props.id} ref={ref} type={type} className={getClassName(props)} />
        {props?.error && <Label text={props?.error} error />}
        {!props.readOnly && !props?.error && props?.hint && (
          <Label text={props?.hint} className="text-gray-400" />
        )}
      </div>
    );
  }),
);
